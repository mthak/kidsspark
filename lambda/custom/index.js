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
    ANSWER: `_ANSWER`,
    GROUP_INIT: `_GROUP_INIT`,
    COMPLETED: `COMPLETED`
  };

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        console.log('LaunchRequestHandler: canHandle');
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        console.log('LaunchRequestHandler: handle');
        const locale = handlerInput.requestEnvelope.request.locale;
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        
        console.log('LaunchRequestHandler: Locale for this request is ' + locale);

        if (sessionAttributes.gameQuestions == undefined) {
            return handlerInput.responseBuilder
                .speak('<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01"/>' + handlerInput.t('WELCOME_MSG'))
                .reprompt(handlerInput.t('WELCOME_REPROMPT_MSG'))
                .getResponse();
        } else {
            return handlerInput.responseBuilder
                .speak('<audio src="soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_outro_01"/>' + handlerInput.t('WELCOME_BACK_MSG'))
                .reprompt(handlerInput.t('WELCOME_REPROMPT_MSG'))
                .getResponse();
        }
    }
};

const ResumeHandler = {
    canHandle(handlerInput) {
        console.log('ResumeHandler: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && 
            (request.intent.name === 'ResumeIntent');
    },
    handle(handlerInput) {
        console.log("ResumeHandler: handle");
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let response = handlerInput.responseBuilder;
        if (sessionAttributes.gameQuestions == undefined || sessionAttributes.gameQuestions == null || sessionAttributes.state == states.COMPLETED) {
            console.log("ResumeHandler: handle in side check");
            return handlerInput.responseBuilder.speak(handlerInput.t('RESUME_ERROR_MSG'))
            .reprompt(handlerInput.t('RESUME_ERROR_MSG'))
            .withShouldEndSession(false)
            .getResponse();
    
        }
        console.log("ResumeHandler: handle going to get next question");
        console.error("*****************RESUME GAME GENERATING PRESENTABLE QUESTIONS***************** ");
        const [askQuestion, askAgain, currentQuestion] = generatePresentableQuestion(sessionAttributes.gameQuestions, handlerInput);
        let speakOutput = askQuestion;
        console.error("*****************RESUME GAME  QUESTIONS RETRUNED***************** " + currentQuestion);
        sessionAttributes.currentQuestion = currentQuestion;
        sessionAttributes.state = states.INPROGRESS;
        return response.speak(speakOutput)
                     .reprompt(askAgain)
                     .withShouldEndSession(false)
                     .getResponse();
    },
};

const GroupNameHandler = {
    canHandle(handlerInput) {
        console.log('GroupNameIntent: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'GroupNameIntent';
    },
    async handle(handlerInput) {
        console.log("GroupNameIntent: handle");
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const locale = handlerInput.requestEnvelope.request.locale;
        
        let response = handlerInput.responseBuilder;
        let speakOutput = handlerInput.t('DEFAULT_GAME_NAME_MSG');
        let repeatOutput = handlerInput.t('DEFAULT_GAME_NAME_MSG');
        
        const groupName = handlerInput.requestEnvelope.request.intent.slots.groupName.value;
        sessionAttributes.gameMode = "GROUP";
        sessionAttributes.groupName = groupName;
        sessionAttributes.state = states.GROUP_INIT;
        console.log("GroupNameHandler: locale " + locale);

        const [doesGroupNameExists, questions] = await validateGroupExists(groupName, locale);
        
        if (questions == undefined || questions == null) {
            return response.speak(handlerInput.t('DEFAULT_GAME_NAME_MSG'))
                     .reprompt(handlerInput.t('ERROR_CREATING_GROUP_REPEAT'))
                     .withShouldEndSession(false)
                     .getResponse();
        }

        if (doesGroupNameExists) {
           
            speakOutput = handlerInput.t('GROUP_ALREADY_EXISTS');
            repeatOutput = handlerInput.t('GROUP_ALREADY_EXISTS_REPROMPT');
           
        } else {
            speakOutput = handlerInput.t('GROUP_NOT_EXISTS');
            repeatOutput = handlerInput.t('GROUP_NOT_EXISTS_REPROMPT');
       
        }
        sessionAttributes.gameQuestions = questions;
        //Resetting every field as this is the start of new game
        resetGameState(sessionAttributes, questions);

        return response.speak(speakOutput)
                     .reprompt(repeatOutput)
                     .withShouldEndSession(false)
                     .getResponse();
    },
};

async function validateGroupExists(group, locale) {
    //TODO the api call
    const doesGroupNameExists = await Promise.resolve(apiservice.getKbcQuestions(group, locale)).then((response) => {
        console.log("GroupNameHandler: validateGroupExists " + JSON.stringify(response));
        if (response.message == "undefined" || response.message == "existing" || response.message == null) {
            return [true, response.data];
        } else {
            return [false, response.data];
        }
      }).catch((error) => {
        console.error("*****************ERROR Calling Question Api ***************** " + error);
        return [false, null];
    });
    return doesGroupNameExists;
}

const FiftyFiftyHandler = {
    canHandle(handlerInput) {
        console.log('FiftyFiftyHandler: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && 
            (request.intent.name === 'FiftyFiftyIntent');
    },
    handle(handlerInput) {
        console.log("FiftyFiftyHandler: handle");
        var speakOutput = null;
        var repromt = null;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let response = handlerInput.responseBuilder;
        if (sessionAttributes.state == states.INPROGRESS  && sessionAttributes.currentQuestion != null) {
            
            if(!sessionAttributes.fiftyFityUsed) {
                speakOutput = handlerInput.t('FIFTY_FITY_MSG') + sessionAttributes.currentQuestion.help + handlerInput.t('REASK_FIFTY_FIFTY_QUESTION', {currentQuestion: sessionAttributes.currentQuestion.ques});
                repromt = handlerInput.t('CURRENT_QUESTION', {currentQuestion: sessionAttributes.currentQuestion.ques});
                sessionAttributes.fiftyFityUsed = true;

            } else {
                speakOutput = handlerInput.t('LIFE_LINE_EXHAUSTED', {lifeLineName: " Fifty Fifty ", currentQuestion: sessionAttributes.currentQuestion.ques});
                repromt = handlerInput.t('LIFE_LINES_SATUS' , {currentQuestion: sessionAttributes.currentQuestion.ques});
            }

        } else {
            speakOutput = handlerInput.t('LIFE_LINE_ERROR_MSG');
            repromt = handlerInput.t('START_GAME_MSG');
        }
        return response.speak(speakOutput)
                     .reprompt(repromt)
                     .withShouldEndSession(false)
                     .getResponse();
    },
};

const ExpertReviewHandler = {
    canHandle(handlerInput) {
        console.log('ExpertReviewHandler: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && 
            (request.intent.name === 'ExpertReviewIntent');
    },
    handle(handlerInput) {
        console.log("ExpertReviewHandler: handle");
        var speakOutput = null;
        var repromt = null;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let response = handlerInput.responseBuilder;
        if (sessionAttributes.state == states.INPROGRESS && sessionAttributes.currentQuestion != null) {

            if (!sessionAttributes.expertReviewUsed) {
                speakOutput = handlerInput.t('EXPERT_REVIEW_MSG') + sessionAttributes.currentQuestion.hint + handlerInput.t('REASK_EXPERT_REVIEW_QUESTION', {currentQuestion: sessionAttributes.currentQuestion.ques});
                repromt = handlerInput.t('CURRENT_QUESTION', {currentQuestion: sessionAttributes.currentQuestion.ques});
                sessionAttributes.expertReviewUsed = true;
            } else {
                speakOutput = handlerInput.t('LIFE_LINE_EXHAUSTED', {lifeLineName: " Expert Review ", currentQuestion: sessionAttributes.currentQuestion.ques});
                repromt = handlerInput.t('LIFE_LINES_SATUS', {currentQuestion: sessionAttributes.currentQuestion.ques});
            }

        } else {
            speakOutput = handlerInput.t('LIFE_LINE_ERROR_MSG');
            repromt = handlerInput.t('START_GAME_MSG');
        }
        return response.speak(speakOutput)
                     .reprompt(repromt)
                     .withShouldEndSession(false)
                     .getResponse();
    },
};

const ScoreHandler = {
    canHandle(handlerInput) {
        console.log('ScoreHandler: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && 
            (request.intent.name === 'ScoreIntent');
    },
    handle(handlerInput) {
        console.log("ScoreHandler: handle");
        let speakOutput = null;
        let repromt = null;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let response = handlerInput.responseBuilder;
        if (sessionAttributes.state == states.INPROGRESS) {


            var lifeLinesLeft = "";
            if(sessionAttributes.fiftyFityUsed === false)
                lifeLinesLeft = " fifty fifty, " + lifeLinesLeft;
            if(sessionAttributes.expertReviewUsed === false)
                lifeLinesLeft = " expert review, " + lifeLinesLeft;
            if(sessionAttributes.glideOptionUsed === false)
                lifeLinesLeft = " glide , " + lifeLinesLeft;
                
            speakOutput = handlerInput.t('CURRENT_SCORE', {score: sessionAttributes.quizScore}) + handlerInput.t('LIFE_LINE_MSG', {lifeLinesLeft: lifeLinesLeft, currentQuestion: sessionAttributes.currentQuestion.ques});
            repromt = handlerInput.t('START_GAME_MSG');

        } else {
            speakOutput = handlerInput.t('CURRENT_SCORE_ERROR');
            repromt = handlerInput.t('START_GAME_MSG');
        }
        return response.speak(speakOutput)
                     .reprompt(repromt)
                     .withShouldEndSession(false)
                     .getResponse();
    },
};

const LifeLineHandler = {
    canHandle(handlerInput) {
        console.log('LifeLineHandler: canHandle');
        const { request } = handlerInput.requestEnvelope;
        return request.type === 'IntentRequest' && request.intent.name === 'LifeLineIntent';
    },
    handle(handlerInput) {
        console.log("LifeLineHandler: handle");
        var speakOutput = null;
        var repromt = null;
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        let response = handlerInput.responseBuilder;
        if (sessionAttributes.state == states.INPROGRESS) {

            var lifeLinesLeft = "";
            if(sessionAttributes.fiftyFityUsed === false)
                lifeLinesLeft = " fifty fifty, " + lifeLinesLeft;
            if(sessionAttributes.expertReviewUsed === false)
                lifeLinesLeft = " expert review, " + lifeLinesLeft;
            if(sessionAttributes.glideOptionUsed === false)
                lifeLinesLeft = " glide option, " + lifeLinesLeft;
            if (lifeLinesLeft == "")
            lifeLinesLeft = "zero"
            
            speakOutput = handlerInput.t('LIFE_LINE_MSG', {lifeLinesLeft: lifeLinesLeft, currentQuestion: sessionAttributes.currentQuestion.ques});
            repromt = handlerInput.t('START_GAME_MSG');

            
        } else {
            console.log("LifeLineHandler: ELSE");
            speakOutput = handlerInput.t('LIFE_LINE_ERROR_MSG');
            repromt = handlerInput.t('START_GAME_MSG');
        }
        return response.speak(speakOutput)
                     .reprompt(repromt)
                     .withShouldEndSession(false)
                     .getResponse();
    },
};

const QuizHandler = {
    canHandle(handlerInput) {
      console.log('GAME.QuizHandler: canHandle');
      const request = handlerInput.requestEnvelope.request;
      return request.type === "IntentRequest" && (request.intent.name === "QuizIntent" 
                                    || request.intent.name === 'AMAZON.StartOverIntent');
    },
    async handle(handlerInput) {
      console.log("GAME.QuizHandler: handle");
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const locale = handlerInput.requestEnvelope.request.locale;
      const response = handlerInput.responseBuilder;
      var questions = null;

      if(sessionAttributes.gameMode == undefined || sessionAttributes.gameMode == null) {
        sessionAttributes.gameMode = "SINGLE";
      }

      if (sessionAttributes.state == states.START || sessionAttributes.state != states.GROUP_INIT) {
            questions = await fetchAllQuestions("easy", locale);
            sessionAttributes.gameQuestions = questions;
            console.error("*****************GOT FRESH QUESTIONS ***************** ");
            //Resetting every field as this is the start of new game
            resetGameState(sessionAttributes, questions);

        } else if (sessionAttributes.gameQuestions != null) {
            questions = sessionAttributes.gameQuestions
            console.error("*****************FETCHING QUESTIONS FROM SESSION***************** ");
       }

      if (questions == null) {
        return response.speak(handlerInput.t('ERROR_QUESTION_FETCH'))
        .reprompt(handlerInput.t('ERROR_QUESTION_FETCH'))
        .getResponse();

      } else {
        console.error("*****************GENERATING PRESENTABLE QUESTIONS***************** ");
        const [askQuestion, askAgain, currentQuestion] = generatePresentableQuestion(questions, handlerInput);
        let speakOutput = askQuestion;
        console.error("*****************QUESTIONS RETRUNED***************** " + currentQuestion);
        sessionAttributes.currentQuestion = currentQuestion;
        sessionAttributes.state = states.INPROGRESS
        return response.speak(speakOutput)
                     .reprompt(askAgain)
                     .withShouldEndSession(false)
                     .getResponse();
      }
    },
};

function resetGameState(sessionAttributes) {
    console.log("Re-setting the session attributes");
    sessionAttributes.fiftyFityUsed = false;
    sessionAttributes.expertReviewUsed = false;
    sessionAttributes.glideOptionUsed = false;
    sessionAttributes.quizScore = 0;
}

const QuizResponseHandler = {
    canHandle(handlerInput) {
        console.log('GAME.QuizResponseHandler: canHandle');
        const request = handlerInput.requestEnvelope.request;
        console.log("Inside QuizResponseHandler");
        return request.type === "IntentRequest" && (request.intent.name === "QuizAnswerIntent");
    }, 
    async handle(handlerInput) {
        console.log("Inside QuizResponseHandler : handle");
        var sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        var currentQuestion = sessionAttributes.currentQuestion;
        const response = handlerInput.responseBuilder;
        var speakOutput = handlerInput.t('ERROR_MSG') + handlerInput.t('START_GAME_MSG');
        var repeatOutput = handlerInput.t('ERROR_MSG') + handlerInput.t('START_GAME_MSG');
        const phrase = handlerInput.requestEnvelope.request.intent.slots.phrase.value;
        
        if(currentQuestion == undefined || currentQuestion == null) {
            speakOutput =  handlerInput.t('ERROR_QUESTION_FETCH');
            repeatOutput =  handlerInput.t('ERROR_QUESTION_FETCH');

        } else if (phrase.includes(currentQuestion.answer)) {
            console.log("QuizResponseHandler ANSWER is CORRECT");
            
            console.log("currentQuestion.points "  + JSON.stringify(sessionAttributes));
            sessionAttributes.state = states.INPROGRESS;
            sessionAttributes.quizScore = sessionAttributes.quizScore + currentQuestion.points;
            sessionAttributes.questionCounter = sessionAttributes.questionCounter + 1;
            
            //TODO add isQuestionAsked to notify that question was true
            console.log("QuizResponseHandler ASKING AGAIN");
            sessionAttributes = markQuestionCompleted(sessionAttributes.currentQuestion.id, sessionAttributes, true);
            //invalidating the current question
            // sessionAttributes.currentQuestion = null;

            //Asking new question
            const [askQuestion, askAgain, newCurrentQuestion] = generatePresentableQuestion(sessionAttributes.gameQuestions, handlerInput);
			
            speakOutput =  handlerInput.t('QUESTIONS_ANSWERED_CORRECTLY') + handlerInput.t('CURRENT_SCORE', {score: sessionAttributes.quizScore}) + handlerInput.t('NEXT_QUESTION') + askQuestion;
            
            sessionAttributes.currentQuestion = newCurrentQuestion;
            repeatOutput = askAgain;
            console.log("QuizResponseHandler ASKING AGAIN GOT QUESTIONS");
            
        } else {
            sessionAttributes = markQuestionCompleted(sessionAttributes.currentQuestion.id, sessionAttributes, false);
            //invalidating the current question
            sessionAttributes.currentQuestion = null;

            sessionAttributes.state = states.INPROGRESS;
            if (!sessionAttributes.glideOptionUsed) {	
                speakOutput = handlerInput.t('QUESTIONS_ANSWERED_WORNG') + handlerInput.t('QUESTIONS_JUMP');
                repeatOutput = handlerInput.t('QUESTIONS_JUMP');
            } else {
                speakOutput = handlerInput.t('QUESTIONS_ANSWERED_WORNG') + handlerInput.t('QUESTIONS_CANNOT_JUMP');
                repeatOutput = handlerInput.t('QUESTIONS_CANNOT_JUMP');
                sessionAttributes.state = null;
            }
        }

        if(sessionAttributes.state == states.COMPLETED) {
            return response.speak(speakOutput)
			         .reprompt(repeatOutput)
        			 .withShouldEndSession(true)
                     .getResponse();
        }

        return response.speak(speakOutput)
			         .reprompt(repeatOutput)
        			 .withShouldEndSession(false)
                     .getResponse();
    }
}

function markQuestionCompleted(questionDone, sessionAttributes, isAnswerCorrect) {
    for (var i = 0; i < sessionAttributes.gameQuestions.length; i++) {
        console.info("markQuestionCompleted: inside for loop ");
        if(sessionAttributes.gameQuestions[i].id === questionDone) {
            console.info("markQuestionCompleted: marking done ");
            sessionAttributes.gameQuestions[i].isQuestionAsked = true;
            sessionAttributes.gameQuestions[i].isAnswerCorrect = isAnswerCorrect;
            break;
        }
    }
    return sessionAttributes;
}

function generatePresentableQuestion(questions, handlerInput) {

    console.info("generatePresentableQuestion: processing ");
    var currentQuestion = null;

    for (var i = 0; i < questions.length; i++) {
        console.info("generatePresentableQuestion: inside for loop ");
        console.info(questions[i].isQuestionAsked == undefined || questions[i].isQuestionAsked == false);
        if(questions[i].isQuestionAsked == undefined || questions[i].isQuestionAsked == false) {
            console.info("generatePresentableQuestion: inside for loop ");
            currentQuestion = questions[i];
            break;
        }
    }
  	
    var conversationString = handlerInput.t('ERROR_QUESTION_FETCH');
    
    if(currentQuestion != null) {
        console.info("generatePresentableQuestion: counting questions");
        let ques = '<voice name="Brian"><lang xml:lang="en-GB">' + currentQuestion.ques + '</lang></voice>';
        return  [handlerInput.t('QUESTION_BEGIN') + ques, ques + handlerInput.t('USE_LIFE_LINES'), currentQuestion];
    } else if (currentQuestion == null) {
        conversationString = handlerInput.t('ALL_QUESTIONS_ANSWERED');
        sessionAttributes.state = states.COMPLETED;
        sessionAttributes.currentQuestion = null;
    }
    
    return [conversationString, conversationString, currentQuestion];
}

async function fetchAllQuestions(group, locale) {
    //TODO the api call
    const fetchedQuestion = await Promise.resolve(apiservice.getKbcQuestions(group, locale)).then((response) => {
        
        const sortedQuestions = sortBy( response.data, 'points' );
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
            handlerInput.requestEnvelope.request.intent.name === 'BuyIntent';
    },
    async handle(handlerInput) {
        // SAVING SESSION ATTRIBUTES TO PERSISTENT ATTRIBUTES,
        // BECAUSE THE SESSION EXPIRES WHEN WE START A CONNECTIONS DIRECTIVE.
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        console.log('IN: BuyHintHandler.handle 1 check');
        if(sessionAttributes.glideOptionUsed) {
            let speakOutput = handlerInput.t('LIFE_LINE_EXHAUSTED', {lifeLineName: " Glide ", currentQuestion: sessionAttributes.currentQuestion.ques});
            let repromt = handlerInput.t('LIFE_LINES_SATUS', {currentQuestion: sessionAttributes.currentQuestion.ques});
            return handlerInput.responseBuilder.speak(speakOutput)
                     .reprompt(repromt)
                     .withShouldEndSession(false)
                     .getResponse();
        }
        console.log('IN: BuyHintHandler.handle 2 check');
        if (sessionAttributes.state != states.INPROGRESS) {
            let speakOutput = handlerInput.t('LIFE_LINE_ERROR_MSG') + handlerInput.t('START_GAME_MSG');
            let repromt = handlerInput.t('START_GAME_MSG');
            return handlerInput.responseBuilder.speak(speakOutput)
                     .reprompt(repromt)
                     .getResponse();
        }
        console.log('IN: BuyHintHandler.handle 3 check');
        handlerInput.attributesManager.setPersistentAttributes(sessionAttributes);
        handlerInput.attributesManager.savePersistentAttributes();

        const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();

        return ms.getInSkillProducts(handlerInput.requestEnvelope.request.locale).then((res) => {
            
            const glideLifeLine = res.inSkillProducts.filter(record => record.referenceName === 'glide');
            if (glideLifeLine[0].purchasable === 'PURCHASABLE') {
                return handlerInput.responseBuilder
                    .addDirective({
                        'type': 'Connections.SendRequest',
                        'name': 'Buy',
                        'payload': {
                            'InSkillProduct': {
                                'productId': glideLifeLine[0].productId,
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
                .speak(handlerInput.t('CANNOT_BUY_RIGHT_NOW', {currentQuestion: sessionAttributes.currentQuestion.ques}))
                .withShouldEndSession(false)
                .getResponse();
        });
    },
};

const CancelPurchaseHandler = {//TODO sessionAttributes.glideOptionUsed = false;
    canHandle(handlerInput) {
        console.log('IN: CancelPurchaseHandler.canHandle');
        return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'CancelPurchaseIntent';
    },
    async handle(handlerInput) {
        // SAVING SESSION ATTRIBUTES TO PERSISTENT ATTRIBUTES,
        // BECAUSE THE SESSION EXPIRES WHEN WE START A CONNECTIONS DIRECTIVE.
        console.log('IN: CancelPurchaseHandler.handle');
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();

        handlerInput.attributesManager.setPersistentAttributes(sessionAttributes);
        handlerInput.attributesManager.savePersistentAttributes();

        const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();

        return ms.getInSkillProducts(handlerInput.requestEnvelope.request.locale).then((res) => {
            
            const glideLifeLine = res.inSkillProducts.filter(record => record.referenceName === 'glide');
            if (glideLifeLine[0].purchasable === 'PURCHASABLE') {
                return handlerInput.responseBuilder
                    .addDirective({
                        'type': 'Connections.SendRequest',
                        'name': 'Cancel',
                        'payload': {
                            'InSkillProduct': {
                                'productId': glideLifeLine[0].productId,
                            },
                        },
                        'token': 'correlationToken',
                    })
                    .getResponse();
            }
            return handlerInput.responseBuilder
                .speak(handlerInput.t('CANNOT_CANCEL_RIGHT_NOW'))
                .withShouldEndSession(false)
                .getResponse();
        });
    },
};

const CancelResponseHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'Connections.Response' &&
        handlerInput.requestEnvelope.request.name === 'Cancel';
    },
    handle(handlerInput) {
      console.log('IN: CancelResponseHandler.handle');
  
      const locale = handlerInput.requestEnvelope.request.locale;
      const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();
      const productId = handlerInput.requestEnvelope.request.payload.productId;
      let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      let speakOutput = '';
      let repeatOutput = handlerInput.t('RESUME_AFTER_CANCEL_PURCHASE');
  
      return ms.getInSkillProducts(locale).then(function handleCancelResponse(result) {
        const product = result.inSkillProducts.filter(record => record.productId === productId);
        console.log(`PRODUCT = ${JSON.stringify(product)}`);
        
        if (handlerInput.requestEnvelope.request.status.code === '200') {
          if (handlerInput.requestEnvelope.request.payload.purchaseResult === 'ACCEPTED') {
            speakOutput = handlerInput.t('CANCEL_SUCCESS') + handlerInput.t('RESUME_AFTER_CANCEL_PURCHASE');
            
          }
          if (handlerInput.requestEnvelope.request.payload.purchaseResult === 'NOT_ENTITLED') {
            speakOutput = handlerInput.t('NOTHING_TO_CANCEL') + handlerInput.t('RESUME_AFTER_CANCEL_PURCHASE');
      
          }
        } else {
            speakOutput = handlerInput.t('CANNOT_CANCEL_RIGHT_NOW') + handlerInput.t('RESUME_AFTER_CANCEL_PURCHASE');
            
        }
        // Something failed.
        console.log(`Connections.Response indicated failure. error: ${handlerInput.requestEnvelope.request.status.message}`);
  
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repeatOutput)
            .withShouldEndSession(false)
            .getResponse();
      });
    },
  };

const BuyHintResponseHandler = {
    canHandle(handlerInput) {
        console.log("Inside BuyHintResponseHandler");
        console.log(handlerInput.requestEnvelope.request.type === 'Connections.Response' &&
            (handlerInput.requestEnvelope.request.name === 'Upsell' ||
                handlerInput.requestEnvelope.request.name === 'Buy'));
        return handlerInput.requestEnvelope.request.type === 'Connections.Response' &&
            (handlerInput.requestEnvelope.request.name === 'Upsell' ||
                handlerInput.requestEnvelope.request.name === 'Buy');
    },
    async handle(handlerInput) {
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        console.log(`SESSION ATTRIBUTES AFTER= ${JSON.stringify(sessionAttributes)}`);

        let speakOutput = '';
        let repeatOutput = '';

        // IF THE USER DECLINED THE PURCHASE.
        if (handlerInput.requestEnvelope.request.payload.purchaseResult === 'DECLINED') {
            speakOutput = handlerInput.t('CONSUMABLE_NOT_PURCHASED');
            repeatOutput =  handlerInput.t('START_GAME_MSG');
        } else if (handlerInput.requestEnvelope.request.payload.purchaseResult === 'ACCEPTED') {
            
            sessionAttributes.glideOptionUsed = true;
            const [askQuestion, askAgain, newCurrentQuestion] = generatePresentableQuestion(sessionAttributes.gameQuestions, handlerInput);
            sessionAttributes.currentQuestion = newCurrentQuestion;
            sessionAttributes.state = states.INPROGRESS;
            speakOutput = handlerInput.t('THANK_YOU_FOR_BUYING') + askQuestion;
            repeatOutput = askAgain;
        } else if (handlerInput.requestEnvelope.request.payload.purchaseResult === 'ERROR') {
            // IF SOMETHING ELSE WENT WRONG WITH THE PURCHASE.
            speakOutput = handlerInput.t('CAN_NOT_BUY_CONSUMABLE');;
            repeatOutput =  handlerInput.t('START_GAME_MSG');
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repeatOutput)
            .withShouldEndSession(false)
            .getResponse();
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};
const GameRulesHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GameRulesIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('GAME_RULES_MSG') + handlerInput.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent');
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('GOODBYE_MSG');
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
		sessionAttributes.state = states.QUIZ
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(true)
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
            .withShouldEndSession(false)
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
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        if(sessionAttributes.gameQuestions != undefined) {
            sessionAttributes.state = states.QUIZ;
        }
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
        const speakOutput = handlerInput.t('ERROR_MSG') + handlerInput.t('START_GAME_MSG');
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
        
      
    //   console.log('----- REQUEST -----');
    //   console.log(`ATRRIBUTE ENVELOPE = ${JSON.stringify(handlerInput.attributesManager)}`);
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
        // console.log('----- SESSION ATTRIBUTES -----');
        // console.log(JSON.stringify(sessionAttributes, null, 2));

        // console.log('----- CURRENT PERSISTENT ATTRIBUTES -----');
        // console.log(JSON.stringify(persistentAtttributes, null, 2));
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
        GroupNameHandler,
        FiftyFiftyHandler,
        ExpertReviewHandler,
        ScoreHandler,
        LifeLineHandler,
        ResumeHandler,
        BuyHintHandler,
        CancelPurchaseHandler,
        CancelResponseHandler,
        BuyHintResponseHandler,
        GameRulesHandler,
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
