/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Welcome to Millionaire Monkeys. This game is about solving questions on various skills. You will get 15 questions and 3 life lines to help you while playing. To start a new game you can say, start new game, to start a group, or, play in a group say, create a new group, followed by group name, or, play in existing group, followed by group name.  To hear about the Life Lines in this game, say, Life Lines. For help, say , Help me. So, What can I help you with?</lang></voice>',
            WELCOME_BACK_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Welcome back to Millionaire Monkeys. To resume your previous game say, resume game. To start a new game, say, Start new Game. To play in a group say, create a new group, followed by group name, or, play in existing group, followed by group name.  For help, say , Help me. So, What can I help you with?</lang></voice>',
            WELCOME_REPROMPT_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> I didn\'t catch that. What can I help you with?</lang></voice>',
            GOODBYE_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Goodbye! Thank you for playing Millionaire Monkeys</lang></voice>',
            REFLECTOR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> You just triggered {{intentName}}</lang></voice>',
            FALLBACK_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, I don\'t know about that. Please try again. If you answering any question say, answer is, and then the answer. To start and resume game please say start new game or resume game to begin playing.</lang></voice>',
            ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, I had trouble doing what you asked. Please try again.</lang></voice>',
            CANNOT_BUY_RIGHT_NOW: '<voice name="Brian"><lang xml:lang="en-GB"> I don\'t think we have a product by that name.  Can you try again, or , go ahead and answer the current question {{currentQuestion}}</lang></voice>',
            START_QUIZ_MESSAGE: '<voice name="Brian"><lang xml:lang="en-GB"> OK.  Let\'s begin \'Millionaire Monkeys\' . </lang></voice>',
            CANNOT_CANCEL_RIGHT_NOW: '<voice name="Brian"><lang xml:lang="en-GB"> There was a problem while cancelling this purchase. Please try again after some times or contact us for help.</lang></voice>',
            CANCEL_SUCCESS: '<voice name="Brian"><lang xml:lang="en-GB"> You have successfully cancelled your glide lifeline. Please continue to answer your question.</lang></voice>',
            NOTHING_TO_CANCEL: '<voice name="Brian"><lang xml:lang="en-GB">You don\'t currently have a subscription to cancel.</lang></voice>',
            ERROR_QUESTION_FETCH: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry there was an error retrieving the questions. Please say resume game or start a new game to continue! Or Please try again after some times</lang></voice>',
            QUESTION_BEGIN: '<voice name="Brian"><lang xml:lang="en-GB"> Starting the game now. You can always say use lifeline to get help. To answer the question please say, answer is, and then your answer. Here is your question coming up now. </lang></voice>',
            ALL_QUESTIONS_ANSWERED: '<voice name="Brian"><lang xml:lang="en-GB"> Congratualtions! You have answered all the questions. You are a Millionaire Monkey. Well Done!  </lang></voice>',
            QUESTIONS_ANSWERED_CORRECTLY: '<voice name="Brian"><lang xml:lang="en-GB"> This is the right answer. </lang></voice>',
            QUESTIONS_ANSWERED_WORNG: '<voice name="Brian"><lang xml:lang="en-GB"> OH NO!    This     is     the      WRONG     answer.  </lang></voice>',
            NEXT_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB"> Let us proceed to your next question. </lang></voice>',
            QUESTIONS_JUMP: '<voice name="Brian"><lang xml:lang="en-GB"> You can still buy and use your glide life line. If you want to glide over this question, please say buy GLIDE  life  line. </lang></voice>', 
            QUESTIONS_CANNOT_JUMP: '<voice name="Brian"><lang xml:lang="en-GB"> Unfortunately you have already used your GLIDE  life  line before. This game is ended . </lang></voice>', 
            QUESTIONS_REPROMPT_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> I didn\'t catch that.</lang></voice>' ,
            HELP_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> You can use Fifty  Fifty option to listen to couple of answers one right and another wrong. ' 
            + ' Your another life line Expert Opinion can provide you some guidance for the correct answer. '
            + ' The third life line GLIDE can take you through an incorrect answers, but you need to buy GLIDE PACK'
            + 'To answer your current questions say, answer is, and followed by your answer. Or to start a new game say, start new game. So, What can I help you with?</lang></voice>',
            CURRENT_SCORE: '<voice name="Brian"><lang xml:lang="en-GB"> Your current score is {{score}} . </lang></voice>',
            CURRENT_SCORE_ERROR: '<voice name="Brian"><lang xml:lang="en-GB"> Please resume or start a game to know the game score. </lang></voice>',
            FIFTY_FITY_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Here are the two options for your question. </lang></voice>',
            EXPERT_REVIEW_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> This is what expert has to say about your question. </lang></voice>',
            REASK_FIFTY_FIFTY_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB">You have heard your two options. Let\'s try and answer your current question. {{currentQuestion}}</lang></voice>',
            REASK_EXPERT_REVIEW_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB">You have heard the expert comments. Let\'s try and answer your current question. {{currentQuestion}}</lang></voice>',
            LIFE_LINE_ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, you can only use this life line when your game is in progress. Please resume or start a new game to use your life lines.</lang></voice>',
            LIFE_LINE_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> You have {{lifeLinesLeft}} life lines left. To get help through your life line, you can say use Fifty Fifty or use Expert Review or Buy Glide life line. Please answer your current question to continue, or use any of your life lines which are left. Your current question is {{currentQuestion}}</lang></voice>',
            LIFE_LINE_EXHAUSTED: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, You have already used {{lifeLineName}} life line. Please use another life line. Or answer your current question. {{currentQuestion}}</lang></voice>',
            LIFE_LINES_SATUS: '<voice name="Brian"><lang xml:lang="en-GB"> To know about other life lines say my life line or life lines status. Or answer your current question.{{currentQuestion}}</lang></voice>',
            CURRENT_QUESTION: '<voice name="Brian"><lang xml:lang="en-GB">Here is your current question {{currentQuestion}} </lang></voice>',
            START_GAME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> To resume your previous game say, \'resume game\', or to start a new game, say, \'Start new Game\'.  For help, say , \'Help me\'. So, What can I help you with?</lang></voice>',
            GAME_RULES_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> This game is about solving questions on various skills. You will get 15 questions and 3 life lines to help you while playing. </lang></voice>',
            USE_LIFE_LINES: '<voice name="Brian"><lang xml:lang="en-GB"> At any point of time you can say use Fifty Fifty or use Expert Review or Buy Glide life line </lang></voice>',
            RESUME_ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry there are no games to resume. To start a new game, say \'Start new Game\'.  For help, say , \'Help me\'. So, What can I help you with?</lang></voice>',
            CONSUMABLE_NOT_PURCHASED: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, glide life line was not purchased at this time. You answered one question incorrectly, you can not move further in this current game. In order to proceed you need a glide life line, otherwise start a new game. To start the game please say, start new game. What can I help you with?</lang></voice>',
            THANK_YOU_FOR_BUYING: '<voice name="Brian"><lang xml:lang="en-GB"> Thanks for buying glide life line . You can now glide over this incorrect answer and get the next question. Using your life line now to jump over the current question. Remember after using this life you can not use your glide life line again. You glide life line is applied and here is your next question.</lang></voice>',
            CAN_NOT_BUY_CONSUMABLE: '<voice name="Brian"><lang xml:lang="en-GB"> It looks like we are unable to sell hints right now.  Sorry.  Since you need this life line to proceed, we won\'t be able to proced any futher in this current game. Please try again or start a new game. To start the game please say, start new game. What can I help you with?</lang></voice>',
            DEFAULT_GAME_NAME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Please say,  create a new group to create a group to play. Or say, start a new game</lang></voice>',
            ERROR_CREATING_GROUP: '<voice name="Brian"><lang xml:lang="en-GB"> There was an error creating the group. Please try a single mode game. To start in single mode please say, Start single mode game. </lang></voice>',
            ERROR_CREATING_GROUP_REPEAT: '<voice name="Brian"><lang xml:lang="en-GB"> To start in single mode please say, Start single mode game. </lang></voice>',
            GROUP_ALREADY_EXISTS: '<voice name="Brian"><lang xml:lang="en-GB">  Found this group. If you want to create a group with different name. Please say create a new group.  followed by the new group name .  Or, to play in this existing group say, compete with followed by Group Name. </lang></voice>',
            GROUP_ALREADY_EXISTS_REPROMPT: '<voice name="Brian"><lang xml:lang="en-GB">Please say, create a new group.  followed by new Group Name </lang></voice>',
            GROUP_NOT_EXISTS: '<voice name="Brian"><lang xml:lang="en-GB"> Thank you for creating a new group for your game. To start the game please say, start the game. </lang></voice>',
            GROUP_NOT_EXISTS_REPROMPT: '<voice name="Brian"><lang xml:lang="en-GB"> please say, start the game, to start playing.  </lang></voice>',
            RESUME_AFTER_CANCEL_PURCHASE: '<voice name="Brian"><lang xml:lang="en-GB">To resume your previous game say, \'resume game\', or to start a new game, say, \'Start new Game\'.</lang></voice>',
            QUESTION: '<voice name="Brian"><lang xml:lang="en-GB">{{question}}</lang></voice>'

        }
    },
    de: {
        translation: {
            WELCOME_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Willkommen bei Millionaire Monkeys. In diesem Spiel geht es darum, Fragen zu verschiedenen Fähigkeiten zu lösen. Sie erhalten 15 Fragen und 3 Lebenslinien, die Ihnen beim Spielen helfen. Um ein neues Spiel zu starten, können Sie sagen, Sie starten ein neues Spiel, Sie starten eine Gruppe oder Sie spielen in einer Gruppe, Sie erstellen eine neue Gruppe, gefolgt von einem Gruppennamen, oder Sie spielen in einer vorhandenen Gruppe, gefolgt von einem Gruppennamen. Um mehr über die Lebenslinien in diesem Spiel zu erfahren, sagen wir, Lebenslinien. Sagen Sie, um Hilfe zu erhalten, Helfen Sie mir. Also, womit kann ich Ihnen helfen?</lang></voice>',
            WELCOME_BACK_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Willkommen zurück bei Millionaire Monkeys. Um das vorherige Spiel fortzusetzen, sagen Sie, setzen Sie das Spiel fort. Um ein neues Spiel zu starten, sagen Sie Neues Spiel starten. Wenn Sie beispielsweise in einer Gruppe spielen möchten, erstellen Sie eine neue Gruppe, gefolgt von einem Gruppennamen, oder spielen Sie in einer vorhandenen Gruppe, gefolgt von einem Gruppennamen. Sagen Sie, um Hilfe zu erhalten, Helfen Sie mir. Also, womit kann ich Ihnen helfen?</lang></voice>',
            WELCOME_REPROMPT_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Das habe ich nicht verstanden. Womit kann ich dir helfen?</lang></voice>',
            GOODBYE_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Auf Wiedersehen! Danke, dass du Millionaire Monkeys spielst</lang></voice>',
            REFLECTOR_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Sie haben gerade ausgelöst {{intentName}}</lang></voice>',
            FALLBACK_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Entschuldigung, das weiß ich nicht. Bitte versuche es erneut. Wenn Sie eine Frage beantworten, sagen Sie, antworten Sie und dann die Antwort. Zum Starten und Fortsetzen des Spiels sagen Sie bitte "Neues Spiel starten" oder "Spiel fortsetzen", um mit dem Spielen zu beginnen.</lang></voice>',
            ERROR_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Entschuldigung, ich hatte Probleme damit, das zu tun, worum Sie gebeten haben. Bitte versuche es erneut.</lang></voice>',
            CANNOT_BUY_RIGHT_NOW: '<voice name="Marlene"><lang xml:lang="de-DE"> Ich glaube nicht, dass wir ein Produkt mit diesem Namen haben. Können Sie es erneut versuchen oder die aktuelle Frage beantworten? {{currentQuestion}}</lang></voice>',
            CANCEL_SUCCESS: '<voice name="Marlene"><lang xml:lang="de-DE"> Sie haben Ihre Gleit-Rettungsleine erfolgreich abgebrochen. Bitte fahren Sie fort, Ihre Frage zu beantworten.</lang></voice>',
            NOTHING_TO_CANCEL: '<voice name="Marlene"><lang xml:lang="de-DE">Sie haben derzeit kein Abonnement zum Kündigen.</lang></voice>',
            START_QUIZ_MESSAGE: '<voice name="Marlene"><lang xml:lang="de-DE"> OKAY. Beginnen wir mit Millionaire Monkeys. </lang></voice>',
            CANNOT_CANCEL_RIGHT_NOW: '<voice name="Marlene"><lang xml:lang="de-DE"> Beim Stornieren dieses Kaufs ist ein Problem aufgetreten. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns, um Hilfe zu erhalten.</lang></voice>',
            ERROR_QUESTION_FETCH: '<voice name="Marlene"><lang xml:lang="de-DE"> Beim Abrufen der Fragen ist ein Fehler aufgetreten. Sagen Sie bitte "Spiel fortsetzen" oder starten Sie ein neues Spiel, um fortzufahren! Oder Bitte versuchen Sie es später noch einmal</lang></voice>',
            QUESTION_BEGIN: '<voice name="Marlene"><lang xml:lang="de-DE"> Starte das Spiel jetzt. Sie können immer sagen, verwenden Sie die Rettungsleine, um Hilfe zu erhalten. Um die Frage zu beantworten, sagen Sie bitte, antworten Sie und dann Ihre Antwort. Hier ist deine Frage, die jetzt auftaucht. </lang></voice>',
            ALL_QUESTIONS_ANSWERED: '<voice name="Marlene"><lang xml:lang="de-DE"> Glückwunsch! Sie haben alle Fragen beantwortet. Gut gemacht!</lang></voice>',
            QUESTIONS_ANSWERED_CORRECTLY: '<voice name="Marlene"><lang xml:lang="de-DE"> Das ist die richtige Antwort. </lang></voice>',
            QUESTIONS_ANSWERED_WORNG: '<voice name="Marlene"><lang xml:lang="de-DE"> ACH NEIN! Dies ist die falsche Antwort . </lang></voice>',
            NEXT_QUESTION: '<voice name="Marlene"><lang xml:lang="de-DE"> Fahren wir mit Ihrer nächsten Frage fort. </lang></voice>',
            QUESTIONS_JUMP: '<voice name="Marlene"><lang xml:lang="de-DE"> Sie können Ihre Gleitleine weiterhin kaufen und verwenden. Wenn Sie über diese Frage hinweggleiten möchten, sagen Sie bitte GLIDE life line kaufen. </lang></voice>', 
            QUESTIONS_CANNOT_JUMP: '<voice name="Marlene"><lang xml:lang="de-DE"> Leider haben Sie Ihre GLIDE life line schon einmal benutzt. Dieses Spiel ist beendet . </lang></voice>', 
            QUESTIONS_REPROMPT_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Das habe ich nicht verstanden.</lang></voice>' ,
            HELP_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Sie können die Option Fifty Fifty verwenden, um ein paar der richtigen und ein anderes Wrong-Antworten anzuhören. ' 
            + ' Ihre andere Lebenslinie Expert Opinion kann Ihnen eine Anleitung für die richtige Antwort geben. '
            + ' Die dritte Lebensader GLIDE kann Sie durch falsche Antworten führen, aber Sie müssen GLIDE PACK kaufen'
            + 'Um Ihre aktuellen Fragen zu beantworten, sagen Sie, antworten Sie mit und geben Sie anschließend Ihre Antwort. Oder, um ein neues Spiel zu starten, sagen wir, starten Sie ein neues Spiel. Also, womit kann ich Ihnen helfen?</lang></voice>',
            CURRENT_SCORE: '<voice name="Marlene"><lang xml:lang="de-DE"> Ihre aktuelle Punktzahl ist {{score}} . </lang></voice>',
            CURRENT_SCORE_ERROR: '<voice name="Marlene"><lang xml:lang="de-DE">Bitte setzen Sie das Spiel fort oder starten Sie es, um den Spielstand zu erfahren.</lang></voice>',
            FIFTY_FITY_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Hier sind die beiden Optionen für Ihre Frage. </lang></voice>',
            EXPERT_REVIEW_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Dies ist, was der Experte zu Ihrer Frage zu sagen hat. </lang></voice>',
            REASK_FIFTY_FIFTY_QUESTION: '<voice name="Marlene"><lang xml:lang="de-DE">Sie haben Ihre beiden Optionen gehört. Lassen Sie uns versuchen, Ihre aktuelle Frage zu beantworten. {{currentQuestion}}</lang></voice>',
            REASK_EXPERT_REVIEW_QUESTION: '<voice name="Marlene"><lang xml:lang="de-DE">Sie haben die Expertenkommentare gehört. Lassen Sie uns versuchen, Ihre aktuelle Frage zu beantworten. {{currentQuestion}}</lang></voice>',
            LIFE_LINE_ERROR_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Entschuldigung, du kannst diese Lebenslinie nur benutzen, wenn dein Spiel läuft. Bitte setze das Spiel fort oder starte ein neues, um deine Lebenslinien zu nutzen. </lang></voice>',
            LIFE_LINE_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Du hast noch {{lifeLinesLeft}} Lebenslinien übrig. Um Hilfe durch Ihre Lebenslinie zu bekommen, können Sie Fifty Fifty oder Expert Review oder Buy Glide Life Line verwenden. Bitte beantworten Sie Ihre aktuelle Frage, um fortzufahren, oder verwenden Sie eine Ihrer verbleibenden Lebenslinien. Ihre aktuelle Frage lautet {{currentQuestion}}</lang></voice>',
            LIFE_LINE_EXHAUSTED: '<voice name="Marlene"><lang xml:lang="de-DE"> Entschuldigung, Sie haben die Lebenslinie {{lifeLineName}} bereits verwendet. Bitte verwenden Sie eine andere Lebensader. Oder beantworten Sie Ihre aktuelle Frage. {{currentQuestion}}</lang></voice>',
            LIFE_LINES_SATUS: '<voice name="Marlene"><lang xml:lang="de-DE"> Um über andere Lebenslinien Bescheid zu wissen, geben Sie meinen Lebenslinien- oder Lebenslinienstatus an. {{currentQuestion}}</lang></voice>',
            CURRENT_QUESTION: '<voice name="Marlene"><lang xml:lang="de-DE">Hier ist deine aktuelle Frage {{currentQuestion}} </lang></voice>',
            START_GAME_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Um das vorherige Spiel fortzusetzen, sagen Sie, "Spiel fortsetzen", oder um ein neues Spiel zu starten, sagen Sie, "Neues Spiel starten". Wenn Sie Hilfe benötigen, sagen Sie: Helfen Sie mir . Also, bei was kann ich Ihnen helfen?</lang></voice>',
            GAME_RULES_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> In diesem Spiel geht es darum, Fragen zu verschiedenen Fähigkeiten zu lösen. Sie erhalten 15 Fragen und 3 Lebenslinien, die Ihnen beim Spielen helfen. </lang></voice>',
            USE_LIFE_LINES: '<voice name="Marlene"><lang xml:lang="de-DE"> Sie können jederzeit Fifty Fifty oder Expert Review oder Buy Glide Life Line verwenden. </lang></voice>',
            RESUME_ERROR_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Es tut uns leid, aber es gibt keine Spiele zum Fortsetzen. Um ein neues Spiel zu starten, sagen Sie Neues Spiel starten. Wenn Sie Hilfe benötigen, sagen Sie: Helfen Sie mir . Also, bei was kann ich Ihnen helfen?</lang></voice>',
            CONSUMABLE_NOT_PURCHASED: '<voice name="Marlene"><lang xml:lang="de-DE"> Entschuldigung, Glide Life Line wurde zu diesem Zeitpunkt nicht gekauft. Sie haben eine Frage falsch beantwortet. Sie können sich in diesem aktuellen Spiel nicht weiter bewegen. Um fortzufahren, benötigen Sie eine Gleit-Lebenslinie, andernfalls starten Sie ein neues Spiel. Um das Spiel zu starten, bitte neues Spiel starten. Womit kann ich dir helfen? </lang></voice>',
            THANK_YOU_FOR_BUYING: '<voice name="Marlene"><lang xml:lang="de-DE"> Vielen Dank für den Kauf von glide life line. Sie können jetzt über diese falsche Antwort gleiten und die nächste Frage erhalten. Verwenden Sie jetzt Ihre Lebenslinie, um über die aktuelle Frage zu springen. Denken Sie daran, dass Sie nach der Verwendung dieses Lebens Ihre Gleitleine nicht mehr verwenden können. Sie gleiten Lebenslinie angewendet und hier ist Ihre nächste Frage.  {{askQuestion}}  </lang></voice>',
            CAN_NOT_BUY_CONSUMABLE: '<voice name="Marlene"><lang xml:lang="de-DE"> Anscheinend können wir derzeit keine Tipps verkaufen. Es tut uns leid. Da Sie diese Lebensader benötigen, um fortzufahren, können wir in diesem aktuellen Spiel keine weiteren Schritte ausführen. Bitte versuchen Sie es erneut oder starten Sie ein neues Spiel. Um das Spiel zu starten, bitte neues Spiel starten. Womit kann ich dir helfen?</lang></voice>',
            DEFAULT_GAME_NAME_MSG: '<voice name="Marlene"><lang xml:lang="de-DE"> Bitte sagen Sie, erstellen Sie eine neue Gruppe, um eine Gruppe zum Spielen zu erstellen. Oder sagen Sie, starten Sie ein neues Spiel</lang></voice>',
            ERROR_CREATING_GROUP: '<voice name="Marlene"><lang xml:lang="de-DE"> Beim Erstellen der Gruppe ist ein Fehler aufgetreten. Bitte versuchen Sie es mit einem Einzelmodus-Spiel . Um im Einzelmodus zu starten, sagen Sie, bitte "Einzelmodus-Spiel starten". </lang></voice>',
            ERROR_CREATING_GROUP_REPEAT: '<voice name="Marlene"><lang xml:lang="de-DE"> Um im Einzelmodus zu starten, sagen Sie, bitte Start single mode game. </lang></voice>',
            GROUP_ALREADY_EXISTS: '<voice name="Marlene"><lang xml:lang="de-DE">  Fand diese Gruppe. Wenn Sie eine Gruppe mit einem anderen Namen erstellen möchten. Bitte sagen Sie eine neue Gruppe erstellen. gefolgt vom neuen Gruppennamen. Oder, um in dieser bestehenden Gruppe zu spielen, konkurrieren Sie mit, gefolgt von Gruppenname. </lang></voice>',
            GROUP_ALREADY_EXISTS_REPROMPT: '<voice name="Marlene"><lang xml:lang="de-DE"> Bitte sagen Sie, erstellen Sie eine neue Gruppe, gefolgt von einem neuen Gruppennamen </lang></voice>',
            GROUP_NOT_EXISTS: '<voice name="Marlene"><lang xml:lang="de-DE"> Vielen Dank, dass Sie eine neue Gruppe für Ihr Spiel erstellt haben. Bitte sagen Sie, um das Spiel zu starten, starten Sie das Spiel. </lang></voice>',
            GROUP_NOT_EXISTS_REPROMPT: '<voice name="Marlene"><lang xml:lang="de-DE"> Bitte sagen Sie, starten Sie, das Spiel, um zu spielen.  </lang></voice>',
            RESUME_AFTER_CANCEL_PURCHASE: '<voice name="Marlene"><lang xml:lang="de-DE">Um das vorherige Spiel fortzusetzen, sagen Sie "Spiel fortsetzen", oder um ein neues Spiel zu starten, sagen Sie "Neues Spiel starten"</lang></voice>',
            QUESTION: '<voice name="Marlene"><lang xml:lang="de-DE">{{question}}</lang></voice>'
        }
    }
}