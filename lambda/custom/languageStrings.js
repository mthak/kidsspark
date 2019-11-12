/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Welcome to Millionaire Monkeys. This game is about solving questions on various skills. You will get 15 questions and 3 life lines to help you while playing. To start a new game you can say \'start new game\', to start a group or play in an existing group say \'create a new group\' or \'play in existing group\' followed by Group Name  or to hear about the Life Lines in this game, say \'Life Lines\'. For help, say , \'Help me\'... So, What can I help you with?</lang></voice>',
            WELCOME_BACK_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Welcome back to Millionaire Monkeys. To resume your previous game say \'resume game\', or to start a new game, say \'Start new Game\' or Create a New Group.  For help, say , \'Help me\'... So, What can I help you with?</lang></voice>',
            WELCOME_REPROMPT_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> I didn\'t catch that. What can I help you with?</lang></voice>',
            GOODBYE_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Goodbye! Thank you for playing Millionaire Monkeys</lang></voice>',
            REFLECTOR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> You just triggered {{intentName}}</lang></voice>',
            FALLBACK_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, I don\'t know about that. Please try again.</lang></voice>',
            ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, I had trouble doing what you asked. Please try again.</lang></voice>',
            CANNOT_BUY_RIGHT_NOW: '<voice name="Brian"><lang xml:lang="en-GB"> I don\'t think we have a product by that name.  Can you try again?</lang></voice>',
            START_QUIZ_MESSAGE: '<voice name="Brian"><lang xml:lang="en-GB"> OK.  Let\'s begin \'Millionaire Monkeys\' . </lang></voice>',
            CANNOT_CANCEL_RIGHT_NOW: '<voice name="Brian"><lang xml:lang="en-GB"> There was a problem while cancelling this purchase. Please try again after some times</lang></voice>',
            ERROR_QUESTION_FETCH: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry there was an error retrieving the questions. Please say resume game or start a new game to continue! Or Please try again after some times</lang></voice>',
            QUESTION_BEGIN: '<voice name="Brian"><lang xml:lang="en-GB"> To answer the question please say \'answer is \' and then your answer..... Here is your question coming up now. </lang></voice>',
            ALL_QUESTIONS_ANSWERED: '<voice name="Brian"><lang xml:lang="en-GB"> Congratualtions! You have answered all the questions. Well Done! </lang></voice>',
            QUESTIONS_ANSWERED_CORRECTLY: '<voice name="Brian"><lang xml:lang="en-GB"> This is the right answer. </lang></voice>',
            QUESTIONS_ANSWERED_WORNG: '<voice name="Brian"><lang xml:lang="en-GB"> OH NO!    This     is     the      WRONG     answer......  </lang></voice>',
            NEXT_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB"> Let us proceed to your next question. </lang></voice>',
            QUESTIONS_JUMP: '<voice name="Brian"><lang xml:lang="en-GB"> You can still buy and use your glide life line. If you want to glide over this question, please say buy GLIDE  life  line. </lang></voice>', 
            QUESTIONS_CANNOT_JUMP: '<voice name="Brian"><lang xml:lang="en-GB"> Unfortunately you have already used your GLIDE  life  line before. This game is ended ...  Please start a new game. </lang></voice>', 
            QUESTIONS_REPROMPT_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> I didn\'t catch that.</lang></voice>' ,
            HELP_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> You can use Fifty  Fifty option to listen to couple of answers one right and another worng. ' 
            + ' Your another life line Expert Opinion can provide you some guidance for the correct answer. '
            + ' The third life line GLIDE can take you through an incorrect answers, but you need to buy GLIDE PACK </lang></voice>',
            CURRENT_SCORE: '<voice name="Brian"><lang xml:lang="en-GB"> Your current score is {{score}} . </lang></voice>',
            CURRENT_SCORE_ERROR: '<voice name="Brian"><lang xml:lang="en-GB"> Please resume or start a game to know the game score. </lang></voice>',
            FIFTY_FITY_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Here are the two options for your question. </lang></voice>',
            EXPERT_REVIEW_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> This is what expert has to say about your question. </lang></voice>',
            LIFE_LINE_ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, you can only use this life line when your game is in progress. Please resume or start a new game to use your life lines. </lang></voice>',
            LIFE_LINE_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> You have {{lifeLinesLeft}} line lines left. </lang></voice>',
            LIFE_LINE_EXHAUSTED: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, You have already used {{lifeLineName}} life line. Please use another life line. </lang></voice>',
            LIFE_LINES_SATUS: '<voice name="Brian"><lang xml:lang="en-GB"> To know about other life lines say my life line or life lines status. </lang></voice>',
            CURRENT_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB">Here is your current question {{currentQuestion}} </lang></voice>',
            START_GAME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> To resume your previous game say \'resume game\', or to start a new game, say \'Start new Game\'.  For help, say , \'Help me\'... So, What can I help you with?</lang></voice>',
            GAME_RULES_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> This game is about solving questions on various skills. You will get 15 questions and 3 life lines to help you while playing. </lang></voice>',
            USE_LIFE_LINES: '<voice name="Brian"><lang xml:lang="en-GB"> At any point of time you can say use Fifty Fifty or use Expert Review or Buy Glide life line </lang></voice>',
            RESUME_ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry there are no games to resume. To start a new game, say \'Start new Game\'.  For help, say , \'Help me\'... So, What can I help you with?</lang></voice>',
            CONSUMABLE_NOT_PURCHASED: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry glide was not purchased. </lang></voice>',
            THANK_YOU_FOR_BUYING: '<voice name="Brian"><lang xml:lang="en-GB"> Thanks for buying glide life line .  {{askQuestion}}  </lang></voice>',
            CAN_NOT_BUY_CONSUMABLE: '<voice name="Brian"><lang xml:lang="en-GB"> It looks like we are unable to sell hints right now.  Sorry.....  Please try again or start a new game.</lang></voice>',
            DEFAULT_GAME_NAME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Please say  \'create a new group\' to create a group to play. Or say \'start a new game\'</lang></voice>',
            ERROR_CREATING_GROUP: '<voice name="Brian"><lang xml:lang="en-GB"> There was an error creating the group. Please try a single mode game... To start in single mode please say \'Start single mode game\'. </lang></voice>',
            ERROR_CREATING_GROUP_REPEAT: '<voice name="Brian"><lang xml:lang="en-GB"> To start in single mode please say \'Start single mode game\'. </lang></voice>',
            GROUP_ALREADY_EXISTS: '<voice name="Brian"><lang xml:lang="en-GB">  Sorry this group already exists.... If you want to create a group with different name.... Please say  \'create a new group\'  followed by new Group Name ....  Or to play this exsiting group say \'compete with followed by Group Name\' . </lang></voice>',
            GROUP_ALREADY_EXISTS_REPROMPT: '<voice name="Brian"><lang xml:lang="en-GB">Please say  \'create a new group\'  followed by new Group Name </lang></voice>',
            GROUP_NOT_EXISTS: '<voice name="Brian"><lang xml:lang="en-GB"> Thank you for creating a new group for your game. To start the game please say \'start the game\'. </lang></voice>',
            GROUP_NOT_EXISTS_REPROMPT: '<voice name="Brian"><lang xml:lang="en-GB"> please say \'start the game\' to start playing.  </lang></voice>'

        }
    },
    de: {
        translation: {
            WELCOME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Willkommen bei Millionaire Monkeys. In diesem Spiel geht es darum, Fragen zu verschiedenen Fähigkeiten zu lösen. Sie erhalten 15 Fragen und 3 Lebenslinien, die Ihnen beim Spielen helfen. Um ein neues Spiel zu starten, können Sie sagen, dass Sie ein neues Spiel starten, eine Gruppe starten oder in einer vorhandenen Gruppe spielen möchten, z. sagen wir, Lebenslinien. Wenn Sie Hilfe benötigen, sagen Sie: Helfen Sie mir ... Also, bei was kann ich Ihnen helfen?</lang></voice>',
            WELCOME_BACK_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Willkommen zurück bei Millionaire Monkeys. Um das vorherige Spiel fortzusetzen, sagen Sie "Spiel fortsetzen", oder um ein neues Spiel zu starten, sagen Sie "Neues Spiel starten" oder "Neue Gruppe erstellen". Wenn Sie Hilfe benötigen, sagen Sie: Helfen Sie mir ... Also, bei was kann ich Ihnen helfen?</lang></voice>',
            WELCOME_REPROMPT_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Das habe ich nicht verstanden. Womit kann ich dir helfen?</lang></voice>',
            GOODBYE_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Auf Wiedersehen! Danke, dass du Millionaire Monkeys spielst</lang></voice>',
            REFLECTOR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sie haben gerade ausgelöst {{intentName}}</lang></voice>',
            FALLBACK_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Entschuldigung, das weiß ich nicht. Bitte versuche es erneut.</lang></voice>',
            ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Entschuldigung, ich hatte Probleme damit, das zu tun, worum Sie gebeten haben. Bitte versuche es erneut.</lang></voice>',
            CANNOT_BUY_RIGHT_NOW: '<voice name="Brian"><lang xml:lang="en-GB"> Ich glaube nicht, dass wir ein Produkt mit diesem Namen haben. Kannst du es nochmal versuchen?</lang></voice>',
            START_QUIZ_MESSAGE: '<voice name="Brian"><lang xml:lang="en-GB"> OKAY. Beginnen wir mit Millionaire Monkeys. </lang></voice>',
            CANNOT_CANCEL_RIGHT_NOW: '<voice name="Brian"><lang xml:lang="en-GB"> Beim Stornieren dieses Kaufs ist ein Problem aufgetreten. Bitte versuchen Sie es später noch einmal</lang></voice>',
            ERROR_QUESTION_FETCH: '<voice name="Brian"><lang xml:lang="en-GB"> Beim Abrufen der Fragen ist ein Fehler aufgetreten. Sagen Sie bitte "Spiel fortsetzen" oder starten Sie ein neues Spiel, um fortzufahren! Oder Bitte versuchen Sie es später noch einmal</lang></voice>',
            QUESTION_BEGIN: '<voice name="Brian"><lang xml:lang="en-GB"> Um die Frage zu beantworten, sagen Sie bitte Antwort ist und dann Ihre Antwort ..... Hier ist Ihre Frage, die jetzt auftaucht. </lang></voice>',
            ALL_QUESTIONS_ANSWERED: '<voice name="Brian"><lang xml:lang="en-GB"> Glückwunsch! Sie haben alle Fragen beantwortet. Gut gemacht!</lang></voice>',
            QUESTIONS_ANSWERED_CORRECTLY: '<voice name="Brian"><lang xml:lang="en-GB"> Das ist die richtige Antwort. </lang></voice>',
            QUESTIONS_ANSWERED_WORNG: '<voice name="Brian"><lang xml:lang="en-GB"> ACH NEIN! Dies ist die falsche Antwort ...... </lang></voice>',
            NEXT_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB"> Fahren wir mit Ihrer nächsten Frage fort. </lang></voice>',
            QUESTIONS_JUMP: '<voice name="Brian"><lang xml:lang="en-GB"> Sie können Ihre Gleitleine weiterhin kaufen und verwenden. Wenn Sie über diese Frage hinweggleiten möchten, sagen Sie bitte GLIDE life line kaufen. </lang></voice>', 
            QUESTIONS_CANNOT_JUMP: '<voice name="Brian"><lang xml:lang="en-GB"> Leider haben Sie Ihre GLIDE life line schon einmal benutzt. Dieses Spiel ist beendet ... Bitte starte ein neues Spiel. </lang></voice>', 
            QUESTIONS_REPROMPT_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Das habe ich nicht verstanden.</lang></voice>' ,
            HELP_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sie können die Option Fifty Fifty verwenden, um ein paar der richtigen und ein anderes Worng-Antworten anzuhören. ' 
            + ' Ihre andere Lebenslinie Expert Opinion kann Ihnen eine Anleitung für die richtige Antwort geben. '
            + ' Die dritte Lebensader GLIDE kann Sie durch falsche Antworten führen, aber Sie müssen GLIDE PACK kaufen </lang></voice>',
            CURRENT_SCORE: '<voice name="Brian"><lang xml:lang="en-GB"> Ihre aktuelle Punktzahl ist {{score}} . </lang></voice>',
            CURRENT_SCORE_ERROR: '<voice name="Brian"><lang xml:lang="en-GB">Bitte setzen Sie das Spiel fort oder starten Sie es, um den Spielstand zu erfahren.</lang></voice>',
            FIFTY_FITY_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Hier sind die beiden Optionen für Ihre Frage. </lang></voice>',
            EXPERT_REVIEW_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Dies ist, was der Experte zu Ihrer Frage zu sagen hat. </lang></voice>',
            LIFE_LINE_ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Entschuldigung, du kannst diese Lebenslinie nur benutzen, wenn dein Spiel läuft. Bitte setze das Spiel fort oder starte ein neues, um deine Lebenslinien zu nutzen. </lang></voice>',
            LIFE_LINE_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Du hast noch {{lifeLinesLeft}} Linienlinien übrig. </lang></voice>',
            LIFE_LINE_EXHAUSTED: '<voice name="Brian"><lang xml:lang="en-GB"> Entschuldigung, Sie haben die Lebenslinie {{lifeLineName}} bereits verwendet. Bitte verwenden Sie eine andere Lebensader. </lang></voice>',
            LIFE_LINES_SATUS: '<voice name="Brian"><lang xml:lang="en-GB"> Um über andere Lebenslinien Bescheid zu wissen, geben Sie meinen Lebenslinien- oder Lebenslinienstatus an. </lang></voice>',
            CURRENT_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB">Hier ist deine aktuelle Frage {{currentQuestion}} </lang></voice>',
            START_GAME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Um das vorherige Spiel fortzusetzen, sagen Sie "Spiel fortsetzen", oder um ein neues Spiel zu starten, sagen Sie "Neues Spiel starten". Wenn Sie Hilfe benötigen, sagen Sie: Helfen Sie mir ... Also, bei was kann ich Ihnen helfen?</lang></voice>',
            GAME_RULES_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> In diesem Spiel geht es darum, Fragen zu verschiedenen Fähigkeiten zu lösen. Sie erhalten 15 Fragen und 3 Lebenslinien, die Ihnen beim Spielen helfen. </lang></voice>',
            USE_LIFE_LINES: '<voice name="Brian"><lang xml:lang="en-GB"> Sie können jederzeit Fifty Fifty oder Expert Review oder Buy Glide Life Line verwenden. </lang></voice>',
            RESUME_ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Es tut uns leid, aber es gibt keine Spiele zum Fortsetzen. Um ein neues Spiel zu starten, sagen Sie Neues Spiel starten. Wenn Sie Hilfe benötigen, sagen Sie: Helfen Sie mir ... Also, bei was kann ich Ihnen helfen?</lang></voice>',
            CONSUMABLE_NOT_PURCHASED: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry Glide wurde nicht gekauft. </lang></voice>',
            THANK_YOU_FOR_BUYING: '<voice name="Brian"><lang xml:lang="en-GB"> Vielen Dank für den Kauf von glide life line.  {{askQuestion}}  </lang></voice>',
            CAN_NOT_BUY_CONSUMABLE: '<voice name="Brian"><lang xml:lang="en-GB"> Anscheinend können wir derzeit keine Tipps verkaufen. Entschuldigung ..... Bitte versuche es erneut oder starte ein neues Spiel.</lang></voice>',
            DEFAULT_GAME_NAME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Bitte sagen Sie, erstellen Sie eine neue Gruppe, um eine Gruppe zum Spielen zu erstellen. Oder sagen Sie, starten Sie ein neues Spiel</lang></voice>',
            ERROR_CREATING_GROUP: '<voice name="Brian"><lang xml:lang="en-GB"> Beim Erstellen der Gruppe ist ein Fehler aufgetreten. Bitte versuchen Sie es mit einem Einzelmodus-Spiel ... Um im Einzelmodus zu starten, sagen Sie bitte "Einzelmodus-Spiel starten". </lang></voice>',
            ERROR_CREATING_GROUP_REPEAT: '<voice name="Brian"><lang xml:lang="en-GB"> Um im Einzelmodus zu starten, sagen Sie bitte Start single mode game. </lang></voice>',
            GROUP_ALREADY_EXISTS: '<voice name="Brian"><lang xml:lang="en-GB">  Entschuldigung, diese Gruppe existiert bereits. Wenn Sie eine Gruppe mit einem anderen Namen erstellen möchten, sagen Sie, erstellen Sie eine neue Gruppe, gefolgt von einem neuen Gruppennamen nach Gruppenname. </lang></voice>',
            GROUP_ALREADY_EXISTS_REPROMPT: '<voice name="Brian"><lang xml:lang="en-GB"> Bitte sagen Sie, erstellen Sie eine neue Gruppe, gefolgt von einem neuen Gruppennamen </lang></voice>',
            GROUP_NOT_EXISTS: '<voice name="Brian"><lang xml:lang="en-GB"> Vielen Dank, dass Sie eine neue Gruppe für Ihr Spiel erstellt haben. Bitte sagen Sie, um das Spiel zu starten, starten Sie das Spiel. </lang></voice>',
            GROUP_NOT_EXISTS_REPROMPT: '<voice name="Brian"><lang xml:lang="en-GB"> Bitte sagen Sie, starten Sie das Spiel, um zu spielen.  </lang></voice>'
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
    }
}