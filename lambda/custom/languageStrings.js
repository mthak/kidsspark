/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: 'Welcome back to Kids Spark. To start a new game you can say \'start new game\',  or to hear about the premium categories for purchase, say \'What can I buy\'. For help, say , \'Help me\'... So, What can I help you with?',
            WELCOME_BACK_MSG: 'Welcome back to Kids Spark. To resume your previous game say \'resume game\', or to start a new game, say \'Start new Game\'.  For help, say , \'Help me\'... So, What can I help you with?',
            WELCOME_REPROMPT_MSG: 'I didn\'t catch that. What can I help you with?',
            HELLO_MSG: 'Hello World!',
            GOODBYE_MSG: 'Goodbye!',
            REFLECTOR_MSG: 'You just triggered {{intentName}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, I had trouble doing what you asked. Please try again.',
            CANNOT_BUY_RIGHT_NOW: 'I don\'t think we have a product by that name.  Can you try again?',
            START_QUIZ_MESSAGE: 'OK.  Let\'s begin \'Me Millionaire\' . ',
            CANNOT_CANCEL_RIGHT_NOW: '',
            ERROR_QUESTION_FETCH: 'Sorry there was an error retrieving the questions. Please try again after sometime!',
            ALL_QUESTIONS_ANSWERED: 'Congratualtions! You have answered all the questions. Well Done!',
            QUESTIONS_ANSWERED_CORRECTLY: ' This is the right answer. ',
            QUESTIONS_ANSWERED_WORNG: ' OH NO!    This     is     the      wrong     answer.  ',
            NEXT_QUESTION: ' Let us proceed to your next question. ',
            QUESTIONS_JUMP: ' You can still use your glide life line. To you and buy out this questions,  please say buy GLIDE . ', 
            QUESTIONS_CANNOT_JUMP: ' Unfortunatelly you can not use any your GLIDE Quetion Life Line this time. Please start new game. ', 
            QUESTIONS_REPROMPT_MSG: 'I didn\'t catch that.' ,
            HELP_MSG: ' Here are your life lines detail. You can use Fifty  Fifty option to listen to couple of answers one right and another worng. ' 
            + ' Your another life line Expert Opinion can provide you some guidance for the correct answer. '
            + ' The third life line GLIDE can take you through an incorrect answers, but you need to buy GLIDE PACK ',
            CURRENT_SCORE: ' Your current score is {{score}} . ',
            CURRENT_SCORE_ERROR: ' Please resume or start a game to know the game score. ',
            FIFTY_FITY_MSG: ' Here are the two options for your question ',
            EXPERT_REVIEW_MSG: ' This is what expert has to say about your question ',
            LIFE_LINE_ERROR_MSG: ' Sorry, you can only use this life line when your game is in progress. Please resume or start a new game to use your life lines. ',
            LIFE_LINE_MSG: ' You have {{lifeLinesLeft}} line lines left. ',
            LIFE_LINE_EXHAUSTED: ' Sorry, You have already used {{lifeLineName}} life line. Please use another life line. ',
            LIFE_LINES_SATUS: ' To know about other life lines say my life line or life lines status ',
            CURRENT_QUESTION: 'Here is your current question {{currentQuestion}} ',
            START_GAME_MSG: 'To resume your previous game say \'resume game\', or to start a new game, say \'Start new Game\'.  For help, say , \'Help me\'... So, What can I help you with?'
        }
    },
    es: {
        translation: {
            WELCOME_MSG: 'Bienvenido, puedes decir Hola o Ayuda. Cual prefieres?',
            HELLO_MSG: 'Hola Mundo!',
            HELP_MSG: 'Puedes decirme hola. Cómo te puedo ayudar?',
            GOODBYE_MSG: 'Hasta luego!',
            REFLECTOR_MSG: 'Acabas de activar {{intentName}}',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
            ERROR_MSG: 'Lo siento, ha habido un error. Por favor inténtalo otra vez.',
            CANNOT_BUY_RIGHT_NOW: '',
            CANNOT_CANCEL_RIGHT_NOW: '',
            START_QUIZ_MESSAGE: '',
            ERROR_QUESTION_FETCH: '',
            ALL_QUESTIONS_ANSWERED: '',
            QUESTIONS_ANSWERED_CORRECTLY: '',
            NEXT_QUESTION: '',
            CURRENT_SCORE: ''
        }
    },
    de: {
        translation: {
            WELCOME_MSG: 'Wilkommen, du kannst Hallo oder Hilfe sagen. Was würdest du gern tun?',
            HELLO_MSG: 'Hallo!',
            HELP_MSG: 'Du kannst hallo zu mir sagen. Wie kann ich dir helfen?',
            GOODBYE_MSG: 'Tschüss!',
            REFLECTOR_MSG: 'Du hast gerade {{intentName}} ausgelöst',
            FALLBACK_MSG: 'Es tut mir leid, ich weiss das nicht. Bitte versuche es erneut.',
            ERROR_MSG: 'Es tut mir leid, ich konnte das nicht machen. Bitte versuche es erneut.',
            CANNOT_BUY_RIGHT_NOW: '',
            CANNOT_CANCEL_RIGHT_NOW: '',
            START_QUIZ_MESSAGE: '',
            ERROR_QUESTION_FETCH: '',
            ALL_QUESTIONS_ANSWERED: '',
            QUESTIONS_ANSWERED_CORRECTLY: '',
            NEXT_QUESTION: '',
            CURRENT_SCORE: ''
        }
    },
    ja: {
        translation: {
            WELCOME_MSG: 'ようこそ。こんにちは、または、ヘルプ、と言ってみてください。どうぞ！',
            HELLO_MSG: 'ハローワールド',
            HELP_MSG: 'こんにちは、と言ってみてください。どうぞ！',
            GOODBYE_MSG: 'さようなら',
            REFLECTOR_MSG: '{{intentName}}がトリガーされました。',
            FALLBACK_MSG: 'ごめんなさい。ちょっとよくわかりませんでした。もう一度言ってみてください。',
            ERROR_MSG: 'ごめんなさい。なんだかうまく行かないようです。もう一度言ってみてください。',
            CANNOT_BUY_RIGHT_NOW: '',
            CANNOT_CANCEL_RIGHT_NOW: '',
            START_QUIZ_MESSAGE: '',
            ERROR_QUESTION_FETCH: '',
            ALL_QUESTIONS_ANSWERED: '',
            QUESTIONS_ANSWERED_CORRECTLY: '',
            NEXT_QUESTION: '',
            CURRENT_SCORE: ''
        }
    },
    fr: {
        translation: {
            WELCOME_MSG: 'Bienvenue sur le génie des salutations, dites-moi bonjour et je vous répondrai',
            HELLO_MSG: 'Bonjour à tous!',
            HELP_MSG: 'Dites-moi bonjour et je vous répondrai!',
            GOODBYE_MSG: 'Au revoir!',
            REFLECTOR_MSG: 'Vous avez invoqué l\'intention {{intentName}}',
            FALLBACK_MSG: 'Désolé, je ne sais pas. Pouvez-vous reformuler?',
            ERROR_MSG: 'Désolé, je n\'ai pas compris. Pouvez-vous reformuler?',
            CANNOT_BUY_RIGHT_NOW: '',
            CANNOT_CANCEL_RIGHT_NOW: '',
            START_QUIZ_MESSAGE: '',
            ERROR_QUESTION_FETCH: '',
            ALL_QUESTIONS_ANSWERED: '',
            QUESTIONS_ANSWERED_CORRECTLY: '',
            NEXT_QUESTION: '',
            CURRENT_SCORE: ''
        }
    },
    it: {
        translation: {
            WELCOME_MSG: 'Buongiorno! Puoi salutarmi con un ciao, o chiedermi aiuto. Cosa preferisci fare?',
            HELLO_MSG: 'Ciao!',
            HELP_MSG: 'Dimmi ciao e io ti risponderò! Come posso aiutarti?',
            GOODBYE_MSG: 'A presto!',
            REFLECTOR_MSG: 'Hai invocato l\'intento {{intentName}}',
            FALLBACK_MSG: 'Perdonami, penso di non aver capito bene. Riprova.',
            ERROR_MSG: 'Scusa, c\'è stato un errore. Riprova.',
            CANNOT_BUY_RIGHT_NOW: '',
            CANNOT_CANCEL_RIGHT_NOW: '',
            START_QUIZ_MESSAGE: '',
            ERROR_QUESTION_FETCH: '',
            ALL_QUESTIONS_ANSWERED: '',
            QUESTIONS_ANSWERED_CORRECTLY: '',
            NEXT_QUESTION: '',
            CURRENT_SCORE: ''
        }
    },
    pt: {
        translation: {
            WELCOME_MSG: 'Bem vindo, você pode dizer Olá ou Ajuda. Qual você gostaria de fazer?',
            HELLO_MSG: 'Olá!',
            HELP_MSG: 'Você pode dizer olá para mim. Como posso te ajudar?',
            GOODBYE_MSG: 'Tchau!',
            REFLECTOR_MSG: 'Você acabou de ativar {{intentName}}',
            FALLBACK_MSG: 'Desculpe, não sei o que dizer. Por favor tente novamente.',
            ERROR_MSG: 'Desculpe, não consegui fazer o que você pediu. Por favor tente novamente.',
            CANNOT_BUY_RIGHT_NOW: '',
            CANNOT_CANCEL_RIGHT_NOW: '',
            START_QUIZ_MESSAGE: '',
            ERROR_QUESTION_FETCH: '',
            ALL_QUESTIONS_ANSWERED: '',
            QUESTIONS_ANSWERED_CORRECTLY: '',
            NEXT_QUESTION: '',
            CURRENT_SCORE: ''
        }
    },
    hi: {
        translation: {
            WELCOME_MSG: 'नमस्ते, आप hello या help कह सकते हैं. आप क्या करना चाहेंगे?',
            HELLO_MSG: 'नमस्ते दुनिया ',
            HELP_MSG: 'आप मुझसे hello बोल सकते हो.',
            GOODBYE_MSG: 'अलविदा ',
            REFLECTOR_MSG: 'आपने {{intentName}} trigger किया हैं ',
            FALLBACK_MSG: 'Sorry, मैं वो समझ नहीं पायी. क्या आप दोहरा सकते हैं ',
            ERROR_MSG: 'Sorry, मैं वो समझ नहीं पायी. क्या आप दोहरा सकते हैं ',
            CANNOT_BUY_RIGHT_NOW: '',
            CANNOT_CANCEL_RIGHT_NOW: '',
            START_QUIZ_MESSAGE: '',
            ERROR_QUESTION_FETCH: '',
            ALL_QUESTIONS_ANSWERED: '',
            QUESTIONS_ANSWERED_CORRECTLY: '',
            NEXT_QUESTION: '',
            CURRENT_SCORE: ''
        }
    }
}