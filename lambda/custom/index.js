/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk');
// i18n library dependency, we use it below in a localisation interceptor
const i18n = require('i18next');
const sortBy = require('lodash').sortBy;
// i18n strings for all supported locales
const languageStrings = require('./languageStrings');
const apiservice = require('./apiservice');

const states = {
    START: `_START`,
    QUIZ: `_QUIZ`,
    INPROGRESS: `_IN_PROGRESS`,
    ANSWER: `ANSWER`
  };

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        console.log('LaunchRequestHandler: canHandle');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        console.log('LaunchRequestHandler: handle');
        const locale = handlerInput.requestEnvelope.request.locale;
        const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        if (sessionAttributes.state == states.QUIZ) {
            //TODO Welcome back
            return handlerInput.responseBuilder
                .speak(`Welcome back to Kids Spark. To start a new game you can say 'start game',` +
                  ' or to hear about the premium categories for purchase, say \'What can I buy\'. ' +
                  ' For help, say , \'Help me\'... So, What can I help you with?')
                .reprompt('I didn\'t catch that. What can I help you with?')
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak(`Welcome to Kids Spark. To resume your previous game say 'resume game',` +
                  ' or to start a new game, say \'Start Game\'. ' +
                  ' For help, say , \'Help me\'... So, What can I help you with?')
                .reprompt('I didn\'t catch that. What can I help you with?')
                .getResponse();
        }
    }
};

const YesHandler = {
    canHandle(handlerInput) {
        console.log('YesHandler: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && 
            (request.intent.name === 'AMAZON.YesIntent' || request.intent.name === 'AMAZON.StartOverIntent');
    },
    handle(handlerInput) {
        console.log("YesHandler/StartOverIntent: handle");
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        sessionAttributes.state = states.START
        QuizHandler.handle(handlerInput);
    },
};

const ResumeHandler = {
    canHandle(handlerInput) {
        console.log('ResumeHandler: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && 
            (request.intent.name === 'AMAZON.YesIntent' || request.intent.name === 'ResumeIntent');
    },
    handle(handlerInput) {
        console.log("ResumeHandler: handle");
        QuizHandler.handle(handlerInput);
    },
};

const QuizHandler = {
    canHandle(handlerInput) {
      console.log('GAME.QuizHandler: canHandle');
      const request = handlerInput.requestEnvelope.request;
      console.log("Inside QuizHandler");
      console.log(JSON.stringify(request));
      return request.type === "IntentRequest" && request.intent.name === "QuizIntent";
    },
    async handle(handlerInput) {
      console.log("GAME.QuizHandler: handle");
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const response = handlerInput.responseBuilder;
      var questions = null;

      if (sessionAttributes.state === states.START) {
            questions = await fetchAllQuestions();
            console.error("*****************GOT QUESTIONS ***************** ");
            //Putting all questions in the session for storage
            sessionAttributes.gameQuestions = questions;
            console.error("*****************ADDED QUESTIONS IN SESSION***************** ");
        } else if (sessionAttributes.gameQuestions != null) {
            questions = sessionAttributes.gameQuestions.questionList
            console.error("*****************FETCHING QUESTIONS FROM SESSION***************** ");
       }


      if (questions == null) {
        return response.speak(handlerInput.t('ERROR_QUESTION_FETCH'))
        .reprompt(handlerInput.t('ERROR_QUESTION_FETCH'))
        .getResponse();

      } else {
        console.error("*****************GENERATING PRESENTABLE QUESTIONS***************** ");
        const [askQuestion, askAgain, currentQuestion] = generatePresentableQuestion(questions);
        const speakOutput = handlerInput.t('START_QUIZ_MESSAGE') + askQuestion;
        if (sessionAttributes.state === states.QUIZ) {
            speakOutput =  handlerInput.t('QUESTIONS_ANSWERED_CORRECTLY') + handlerInput.t('CURRENT_SCORE', {score: sessionAttributes.quizScore}) + handlerInput.t('NEXT_QUESTION') + + askQuestion;
        }

        sessionAttributes.currentQuestion = currentQuestion;
        return response.speak(speakOutput)
                     .reprompt(askAgain)
                     .getResponse();
      }
    },
};

const QuizResponseHandler = {
    canHandle(handlerInput) {
        console.log('GAME.QuizResponseHandler: canHandle');
        const request = handlerInput.requestEnvelope.request;
        console.log("Inside QuizResponseHandler");
        console.log(JSON.stringify(request));
        return request.type === "IntentRequest" && (request.intent.name === "QuizAnswerIntent");
    }, 
    async handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const currentQuestion = sessionAttributes.currentQuestion;
        const response = handlerInput.responseBuilder;
        var speakOutput = null;
        const phrase = handlerInput.requestEnvelope.request.intent.slots.phrase.value;
        if(currentQuestion === null || currentQuestion === undefined ) {
            speakOutput =  handlerInput.t('ERROR_QUESTION_FETCH');

        } else if (phrase.includes(currentQuestion.answer)) {
            sessionAttributes.state = states.QUIZ;
            sessionAttributes.quizScore = sessionAttributes.quizScore + currentQuestion.points;
            //TODO add isQuestionAsked to notify that question was true
            QuizHandler.handle(handlerInput);
        } else {
            sessionAttributes.state = states.QUIZ;
        }

        return response.speak(speakOutput)
                     .getResponse();
    }
}

function generatePresentableQuestion(questions) {

    console.info("generatePresentableQuestion: processing ");
    var currentQuestion = null;
    try {
    for (var i = 0; i < questions.length; i++) {
        console.info("generatePresentableQuestion: inside for loop ");
        console.info(questions[i].isQuestionAsked == undefined);
        if(questions[i].isQuestionAsked == undefined || questions[i].isQuestionAsked == false) {
            console.info("generatePresentableQuestion: inside for loop ");
            currentQuestion = questions[i];
            break;
        }
    }
    } catch (error) {
        console.info("generatePresentableQuestion: in the for loop ");
        console.info(error);
    }
    var conversationString = handlerInput.t('ERROR_QUESTION_FETCH');
    console.info("generatePresentableQuestion: counting questions");
    if(currentQuestion.length === 1) {
        const unansweredQuestions = _countBy(questions, o => (o.isQuestionAsked === undefined || o.isQuestionAsked === false)).true
        const easyQuestions = _.countBy(unansweredQuestions, o => o.points < 3).true
        const mediumQuestions  = _.countBy(unansweredQuestions, o => 2 < o.points < 7).true
        const hardQuestions  = _.countBy(unansweredQuestions, o => 6 < o.points < 15).true
        console.info("easyQuestions: " + easyQuestions + " easyQuestions: " + mediumQuestions + " hardQuestions: " + hardQuestions);
    
        const questionBegin = "You have " + easyQuestions + " easy questions, " + mediumQuestions + " medium questions " + hardQuestions + " hard questions left. Here is your question coming up now. "
        //TODO Translate
        return  [questionBegin + currentQuestion.ques, currentQuestion.ques, currentQuestion];
    } else if (currentQuestion.length === 0) {
        conversationString = handlerInput.t('ALL_QUESTIONS_ANSWERED');
    }
    
    return [conversationString, conversationString, currentQuestion];
}

async function fetchAllQuestions() {
    //TODO the api call
    const fetchedQuestion = await Promise.resolve(apiservice.getKbcQuestions("first", 1)).then((response) => {
        // console.error("*****************SUCCESS Calling Question Api ***************** " + JSON.stringify(response));
        // console.error("*****************SORTING CALLING QUESTIONS ***************** ");
        const sortedQuestions = sortBy( response, 'points' );
        console.log(sortedQuestions);
        return sortedQuestions;


      }).catch((error) => {
        console.error("*****************ERROR Calling Question Api ***************** " + error);
        return null;
    });
    return fetchedQuestion;
}

const BuyHintHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'BuyHintIntent';
    },
    async handle(handlerInput) {
        // SAVING SESSION ATTRIBUTES TO PERSISTENT ATTRIBUTES,
        // BECAUSE THE SESSION EXPIRES WHEN WE START A CONNECTIONS DIRECTIVE.
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const persistentAttributes = await handlerInput.attributesManager.getPersistentAttributes();
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        persistentAttributes.currentSession = sessionAttributes;
        handlerInput.attributesManager.savePersistentAttributes();

        const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();

        return ms.getInSkillProducts(handlerInput.requestEnvelope.request.locale).then((res) => {
            const hintpack = res.inSkillProducts.filter(record => record.referenceName === 'surprise_pack');
            if (hintpack.length < 10 && hintpack[0].purchasable === 'PURCHASABLE') {
                return handlerInput.responseBuilder
                    .addDirective({
                        'type': 'Connections.SendRequest',
                        'name': 'Buy',
                        'payload': {
                            'InSkillProduct': {
                                'productId': hintpack[0].productId,
                            },
                        },
                        'token': 'correlationToken',
                    })
                    .getResponse();
            }
            // requested product didn't match something from the catalog
            console.log(`!!! ALERT !!!  The requested product **${productCategory}** could not be found.  This could be due to no ISPs being created and linked to the skill, the ISPs being created `
            + ' incorrectly, the locale not supporting ISPs, or the customer\'s account being from an unsupported marketplace.');

            return handlerInput.responseBuilder
                .speak(handlerInput.t('CANNOT_BUY_RIGHT_NOW'))
                .getResponse();
        });
    },
};

const CancelPurchaseHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'CancelPurchaseIntent';
    },
    async handle(handlerInput) {
        // SAVING SESSION ATTRIBUTES TO PERSISTENT ATTRIBUTES,
        // BECAUSE THE SESSION EXPIRES WHEN WE START A CONNECTIONS DIRECTIVE.
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const persistentAttributes = await handlerInput.attributesManager.getPersistentAttributes();
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        persistentAttributes.currentSession = sessionAttributes;
        handlerInput.attributesManager.savePersistentAttributes();

        const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();

        return ms.getInSkillProducts(handlerInput.requestEnvelope.request.locale).then((res) => {
            const hintpack = res.inSkillProducts.filter(record => record.referenceName === 'surprise_pack');
            if (hintpack.length < 5 && hintpack[0].purchasable === 'PURCHASABLE') {
                return handlerInput.responseBuilder
                    .addDirective({
                        'type': 'Connections.SendRequest',
                        'name': 'Cancel',
                        'payload': {
                            'InSkillProduct': {
                                'productId': hintpack[0].productId,
                            },
                        },
                        'token': 'correlationToken',
                    })
                    .getResponse();
            }
            return handlerInput.responseBuilder
                .speak(handlerInput.t('CANNOT_CANCEL_RIGHT_NOW'))
                .getResponse();
        });
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('HELP_MSG');
        //TODO You have two life line
        //TODO If all your life line has finished you can buy out the question

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('GOODBYE_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('FALLBACK_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = handlerInput.t('REFLECTOR_MSG', {intentName: intentName});

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = handlerInput.t('ERROR_MSG');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// This request interceptor will bind a translation function 't' to the handlerInput
const LocalisationRequestInterceptor = {
    process(handlerInput) {
        i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: languageStrings
        }).then((t) => {
            handlerInput.t = (...args) => t(...args);
        });
    }
};

/*
    Function to demonstrate how to filter inSkillProduct list to get list of
    all entitled products to render Skill CX accordingly
*/
function getAllEntitledProducts(inSkillProductList) {
    const entitledProductList = inSkillProductList.filter(record => record.entitled === 'ENTITLED');
    return entitledProductList;
}


/*
    Helper function that returns a speakable list of product names from a list of
    entitled products.
*/
function getSpeakableListOfProducts(entitleProductsList) {
    const productNameList = entitleProductsList.map(item => item.name);
    let productListSpeech = productNameList.join(', '); // Generate a single string with comma separated product names
    productListSpeech = productListSpeech.replace(/_([^_]*)$/, 'and $1'); // Replace last comma with an 'and '
    return productListSpeech;
}

// returns true if the skill is running on a device with a display (show|spot)
function supportsDisplay(handlerInput) {
    var hasDisplay =
      handlerInput.requestEnvelope.context &&
      handlerInput.requestEnvelope.context.System &&
      handlerInput.requestEnvelope.context.System.device &&
      handlerInput.requestEnvelope.context.System.device.supportedInterfaces &&
      handlerInput.requestEnvelope.context.System.device.supportedInterfaces.Display
    return hasDisplay;
}

const RequestLog = {
    async process(handlerInput) {
        console.log('Global.RequestInterceptor: pre-processing response');
        let {
        attributesManager,
        requestEnvelope
        } = handlerInput;
        let persistentAtttributes = await attributesManager.getPersistentAttributes();
        let sessionAttributes = attributesManager.getSessionAttributes();

         /**
       * Ensure a state in case we're starting fresh
       */
      if (sessionAttributes.state == null) {
        console.log('SETTING state TO START GAME MODE');
        sessionAttributes.state = states.START;
      }
        
      
      console.log('----- REQUEST -----');
      console.log(`ATRRIBUTE ENVELOPE = ${JSON.stringify(handlerInput.attributesManager)}`);
      // Apply the persistent attributes to the current session
      attributesManager.setSessionAttributes(Object.assign({}, persistentAtttributes, sessionAttributes));
      /**
       * Log the request for debug purposes.
       */
    //   console.log(JSON.stringify(requestEnvelope, null, 2));

    //   console.log(`REQUEST ENVELOPE = ${JSON.stringify(handlerInput.requestEnvelope)}`);
    //   console.log(`ATRRIBUTE ENVELOPE = ${JSON.stringify(handlerInput.attributesManager)}`);
       console.log('Global.RequestInterceptor: pre-processing response complete');
    },
};

const ResponseLog = {
    async process(handlerInput) {
        console.log(`RESPONSE BUILDER = ${JSON.stringify(handlerInput)}`);
        console.log('Global.ResponseInterceptor: post-processing response');
        let {
            attributesManager
        } = handlerInput;
        let sessionAttributes = attributesManager.getSessionAttributes();
        let persistentAtttributes = await attributesManager.getPersistentAttributes();
        console.log('----- SESSION ATTRIBUTES -----');
        console.log(JSON.stringify(sessionAttributes, null, 2));

        console.log('----- CURRENT PERSISTENT ATTRIBUTES -----');
        console.log(JSON.stringify(persistentAtttributes, null, 2));
        attributesManager.setPersistentAttributes(sessionAttributes);
        await attributesManager.savePersistentAttributes();
        console.log('----- NEW PERSISTENT ATTRIBUTES -----');
        console.log(JSON.stringify(persistentAtttributes, null, 2));
    },
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.standard()
    .addRequestHandlers(
        LaunchRequestHandler,
        QuizHandler,
        QuizResponseHandler,
        YesHandler,
        ResumeHandler,
        BuyHintHandler,
        CancelPurchaseHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalisationRequestInterceptor,
        RequestLog)
    .addResponseInterceptors(ResponseLog)    
    .withTableName('kids-spark')
    .withAutoCreateTable(true)
    .lambda();




    // return ms.getInSkillProducts(locale).then(
    //     function reportPurchasedProducts(result) {
    //       const entitledProducts = getAllEntitledProducts(result.inSkillProducts);
    //       if (entitledProducts && entitledProducts.length > 0) {
    //         // Customer owns one or more products
  
    //         return handlerInput.responseBuilder
    //           .speak(`Welcome to Kids Spark. You currently own ${getSpeakableListOfProducts(entitledProducts)}` +
    //             ' products. To start your game you can say, \'start game\' or you can ask' +
    //             ' for a specific category you have purchased, for example, say \'Tell me a science fact\'. ' +
    //             ' To know what else you can buy, say, \'What can i buy?\'. So, what can I help you' +
    //             ' with?')
    //           .reprompt('I didn\'t catch that. What can I help you with?')
    //           .getResponse();
    //       }
  
    //       // Not entitled to anything yet.
    //       console.log('No entitledProducts');
    //       return handlerInput.responseBuilder
    //         .speak(`Welcome to Kids Spark. To start your game you can say 'start game',` +
    //           ' or to hear about the premium categories for purchase, say \'What can I buy\'. ' +
    //           ' For help, say , \'Help me\'... So, What can I help you with?')
    //         .reprompt('I didn\'t catch that. What can I help you with?')
    //         .getResponse();
    //     },
    //     function reportPurchasedProductsError(err) {
    //       console.log(`Error calling InSkillProducts API: ${err}`);
  
    //       return handlerInput.responseBuilder
    //         .speak('Something went wrong in loading your purchase history')
    //         .getResponse();
    //     },
    // );