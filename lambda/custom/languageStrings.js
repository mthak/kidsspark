/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> <audio src="https://kidsspark.s3.amazonaws.com/kbc.mp3"> Welcome to Millionaire Monkeys. This game is about solving questions on various skills. You will get 15 questions and 3 life lines to help you while playing. To start a new game you can say \'start new game\', to start a group or play in an existing group say \'create a new group\' or \'play in existing group\' followed by Group Name  or to hear about the Life Lines in this game, say \'Life Lines\'. For help, say , \'Help me\'... So, What can I help you with?</lang></voice>',
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
            FIFTY_FITY_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Here are the two options for your question </lang></voice>',
            EXPERT_REVIEW_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> This is what expert has to say about your question </lang></voice>',
            LIFE_LINE_ERROR_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, you can only use this life line when your game is in progress. Please resume or start a new game to use your life lines. </lang></voice>',
            LIFE_LINE_MSG: '<voice name="Brian"><lang xml:lang="en-GB"> You have {{lifeLinesLeft}} line lines left. </lang></voice>',
            LIFE_LINE_EXHAUSTED: '<voice name="Brian"><lang xml:lang="en-GB"> Sorry, You have already used {{lifeLineName}} life line. Please use another life line. </lang></voice>',
            LIFE_LINES_SATUS: '<voice name="Brian"><lang xml:lang="en-GB"> To know about other life lines say my life line or life lines status </lang></voice>',
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
            WELCOME_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Willkommen bei Millionaire Monkeys. In diesem Spiel geht es darum, Fragen zu verschiedenen Fähigkeiten zu lösen. Sie erhalten 15 Fragen und 3 Lebenslinien, die Ihnen beim Spielen helfen. Um ein neues Spiel zu starten, können Sie "Neues Spiel starten" sagen, um eine Gruppe zu starten oder um in einer vorhandenen Gruppe zu spielen, sagen Sie "Neue Gruppe erstellen" oder "In vorhandener Gruppe spielen", gefolgt von "Gruppenname" oder "Zu" In diesem Spiel erfährst du mehr über die Lebenslinien, wenn du "Lebenslinien" sagst. Wenn Sie Hilfe benötigen, sagen Sie \ 'Help me \' ... Also, bei was kann ich Ihnen helfen? </ Lang> </ voice> ',
            WELCOME_BACK_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Willkommen zurück bei Millionaire Monkeys. Um das vorherige Spiel fortzusetzen, sagen Sie "Spiel fortsetzen", oder um ein neues Spiel zu starten, sagen Sie "Neues Spiel starten" oder "Neue Gruppe erstellen". Wenn Sie Hilfe benötigen, sagen Sie \ 'Help me \' ... Also, bei was kann ich Ihnen helfen? </ Lang> </ voice> ',
            WELCOME_REPROMPT_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Das habe ich nicht verstanden. Womit kann ich Ihnen helfen? </ Lang> </ voice> ',
            GOODBYE_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Auf Wiedersehen! Vielen Dank, dass Sie Millionaire Monkeys spielen </ lang> </ voice> ',
            REFLECTOR_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sie haben gerade {{intentName}} </ lang> </ voice> ausgelöst',
            FALLBACK_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Entschuldigung, das weiß ich nicht. Bitte versuchen Sie es erneut. </ Lang> </ voice> ',
            ERROR_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Es tut mir leid, ich hatte Probleme, das zu tun, worum Sie gebeten haben. Bitte versuchen Sie es erneut. </ Lang> </ voice> ',
            CANNOT_BUY_RIGHT_NOW: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Ich glaube nicht, dass wir ein Produkt mit diesem Namen haben. Können Sie es erneut versuchen? </ Lang> </ voice> ',
            START_QUIZ_MESSAGE: '<voice name = "Brian"> <lang xml: lang = "en-GB"> OK. Beginnen wir mit "Millionaire Monkeys". </ lang> </ voice> ',
            CANNOT_CANCEL_RIGHT_NOW: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Beim Stornieren dieses Kaufs ist ein Problem aufgetreten. Bitte versuchen Sie es nach einiger Zeit erneut. </ Lang> </ voice> ',
            ERROR_QUESTION_FETCH: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Beim Abrufen der Fragen ist ein Fehler aufgetreten. Sagen Sie bitte "Spiel fortsetzen" oder starten Sie ein neues Spiel, um fortzufahren! Oder Bitte versuchen Sie es nach einiger Zeit erneut. </ Lang> </ voice> ',
            QUESTION_BEGIN: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Um die Frage zu beantworten, sagen Sie \' answer is \ 'und dann Ihre Antwort ..... Hier kommt Ihre Frage jetzt. </ lang> </ voice> ',
            ALL_QUESTIONS_ANSWERED: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Glückwünsche! Sie haben alle Fragen beantwortet. Gut gemacht! </ lang> </ voice> ',
            QUESTIONS_ANSWERED_CORRECTLY: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Dies ist die richtige Antwort. </ lang> </ voice> ',
            QUESTIONS_ANSWERED_WORNG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> OH NEIN! Dies ist die falsche Antwort ...... </ lang> </ voice> ',
            NEXT_QUESTION: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Fahren wir mit Ihrer nächsten Frage fort. </ lang> </ voice> ',
            QUESTIONS_JUMP: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sie können Ihre Gleitleine weiterhin kaufen und verwenden. Wenn Sie über diese Frage hinweggleiten möchten, sagen Sie bitte GLIDE life line kaufen. </ lang> </ voice> ', 
            QUESTIONS_CANNOT_JUMP: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Leider haben Sie Ihre GLIDE-Lebensader bereits verwendet. Dieses Spiel ist beendet ... Bitte starte ein neues Spiel. </ lang> </ voice> ', 
            QUESTIONS_REPROMPT_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Das habe ich nicht verstanden. </ Lang> </ voice>',
            HELP_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sie können die Option Fifty Fifty verwenden, um ein paar der richtigen und ein anderes Worng zu hören. ' 
            + 'Ihre andere Lebensader-Expertenmeinung kann Ihnen Anhaltspunkte für die richtige Antwort geben. '
            + 'Die dritte Lebensader GLIDE kann Sie durch falsche Antworten führen, aber Sie müssen GLIDE PACK kaufen </ lang> </ voice>',
            CURRENT_SCORE: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Ihre aktuelle Punktzahl ist {{score}}. </ lang> </ voice> ',
            CURRENT_SCORE_ERROR: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Bitte setzen Sie das Spiel fort oder starten Sie es, um den Spielstand zu erfahren. </ lang> </ voice> ',
            FIFTY_FITY_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Hier sind die beiden Optionen für Ihre Frage </ lang> </ voice>',
            EXPERT_REVIEW_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Dies ist, was der Experte zu Ihrer Frage zu sagen hat </ lang> </ voice>',
            LIFE_LINE_ERROR_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Entschuldigung, du kannst diese Lebenslinie nur verwenden, wenn dein Spiel läuft. Bitte setze das Spiel fort oder starte ein neues, um deine Lebenslinien zu nutzen. </ lang> </ voice> ',
            LIFE_LINE_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sie haben noch {{lifeLinesLeft}} Leitungen übrig. </ lang> </ voice> ',
            LIFE_LINE_EXHAUSTED: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sie haben die Lebenslinie {{lifeLineName}} bereits verwendet. Bitte verwenden Sie eine andere Lebensader. </ lang> </ voice> ',
            LIFE_LINES_SATUS: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Um Informationen zu anderen Lebenslinien zu erhalten, geben Sie meinen Lebenslinien- oder Lebenslinienstatus an </ lang> </ voice>',
            CURRENT_QUESTION: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Hier ist Ihre aktuelle Frage {{currentQuestion}} </ lang> </ voice>',
            START_GAME_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Um das vorherige Spiel fortzusetzen, sagen Sie "Spiel fortsetzen", oder um ein neues Spiel zu starten, sagen Sie "Neues Spiel starten". '. Wenn Sie Hilfe benötigen, sagen Sie \ 'Help me \' ... Also, bei was kann ich Ihnen helfen? </ Lang> </ voice> ',
            GAME_RULES_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> In diesem Spiel geht es um das Lösen von Fragen zu verschiedenen Fertigkeiten. Sie erhalten 15 Fragen und 3 Lebenslinien, die Ihnen beim Spielen helfen. </ lang> </ voice> ',
            USE_LIFE_LINES: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sie können jederzeit "Fifty Fifty" oder "Expert Review" oder "Buy Glide life line" verwenden. </ Lang> </ voice > ',
            RESUME_ERROR_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Es sind leider keine Spiele zum Fortsetzen vorhanden. Um ein neues Spiel zu starten, sagen Sie \ 'Neues Spiel starten \'. Wenn Sie Hilfe benötigen, sagen Sie \ 'Help me \' ... Also, bei was kann ich Ihnen helfen? </ Lang> </ voice> ',
            CONSUMABLE_NOT_PURCHASED: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Der Gleitflug wurde leider nicht gekauft. </ lang> </ voice> ',
            THANK_YOU_FOR_BUYING: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Vielen Dank für den Kauf von Glide Life Line. {{askQuestion}} </ lang> </ voice> ',
            CAN_NOT_BUY_CONSUMABLE: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Es sieht so aus, als könnten wir derzeit keine Tipps verkaufen. Entschuldigung ..... Bitte versuchen Sie es erneut oder starten Sie ein neues Spiel. </ Lang> </ voice> ',
            DEFAULT_GAME_NAME_MSG: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sagen Sie "Neue Gruppe erstellen", um eine Gruppe zum Spielen zu erstellen. Oder sagen Sie \ 'ein neues Spiel starten \' </ lang> </ voice> ',
            ERROR_CREATING_GROUP: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Beim Erstellen der Gruppe ist ein Fehler aufgetreten. Bitte versuchen Sie es mit einem Einzelmodus-Spiel ... Um im Einzelmodus zu starten, sagen Sie \ 'Einzelmodus-Spiel starten \'. </ lang> </ voice> ',
            ERROR_CREATING_GROUP_REPEAT: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Um im Einzelmodus zu starten, sag \' Einzelmodus-Spiel starten \ '. </ lang> </ voice> ',
            GROUP_ALREADY_EXISTS: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Diese Gruppe existiert leider bereits. Wenn Sie eine Gruppe mit einem anderen Namen erstellen möchten, sagen Sie \' erstelle eine neue Gruppe \ 'gefolgt von einem neuen Gruppennamen .... Um diese spannende Gruppe zu spielen, sage \' konkurriere mit gefolgt von einem Gruppennamen \ '. </ lang> </ voice> ',
            GROUP_ALREADY_EXISTS_REPROMPT: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sagen Sie "Neue Gruppe erstellen", gefolgt von "Neuer Gruppenname </ lang> </ voice>".
            GROUP_NOT_EXISTS: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Vielen Dank, dass Sie eine neue Gruppe für Ihr Spiel erstellt haben. Um das Spiel zu starten, sage bitte \ 'start the game \'. </ lang> </ voice> ',
            GROUP_NOT_EXISTS_REPROMPT: '<voice name = "Brian"> <lang xml: lang = "en-GB"> Sagen Sie \' start the game \ ', um mit dem Spielen zu beginnen. </ lang> </ voice> '

        }

    },
    ja: {
        translation: {
            WELCOME_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP"> Millionaire Monkeysへようこそ。このゲームは、さまざまなスキルに関する質問を解決するものです。プレイ中に役立つ15の質問と3つのライフラインがあります。新しいゲームを開始するには、「新しいゲームを開始」と言ったり、グループを開始したり、既存のグループでプレイしたりするには、「新しいグループを作成」または「既存のグループでプレイ」と言ってからグループ名またはこのゲームのライフラインについて聞いてください。「ライフライン」と言います。ヘルプが必要な場合は、「助けてください」と言ってください。
            WELCOME_BACK_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP"> Millionaire Monkeysへようこそ。前のゲームを再開するには「ゲームを再開」と言うか、新しいゲームを開始するには「新しいゲームを開始」または「新しいグループを作成」と言います。ヘルプが必要な場合は、「助けてください」と言ってください。
            WELCOME_REPROMPT_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">聞き取れませんでした。何ができますか？</ lang> </ voice> '、
            GOODBYE_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">さようなら！ミリオネアモンキーズをプレイしていただきありがとうございます</ lang> </ voice> '、
            REFLECTOR_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP"> {{intentName}} </ lang> </ voice>をトリガーしたばかりです。
            FALLBACK_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">申し訳ありませんが、それについては知りません。もう一度試してください。</ lang> </ voice> '、
            ERROR_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">申し訳ありませんが、ご要望にお応えできませんでした。もう一度試してください。</ lang> </ voice> '、
            CANNOT_BUY_RIGHT_NOW： '<voice name = "Brian"> <lang xml：lang = "en-JP">その名前の製品があるとは思わない。再試行できますか？</ lang> </ voice> '、
            START_QUIZ_MESSAGE： '<voice name = "Brian"> <lang xml：lang = "en-JP"> OK。 \ 'Millionaire Monkeys \'を始めましょう。 </ lang> </ voice> '、
            CANNOT_CANCEL_RIGHT_NOW： '<voice name = "Brian"> <lang xml：lang = "en-JP">この購入のキャンセル中に問題が発生しました。しばらくしてからもう一度お試しください</ lang> </ voice> '、
            ERROR_QUESTION_FETCH： '<voice name = "Brian"> <lang xml：lang = "en-JP">質問の取得中にエラーが発生しました。続行するにはゲームを再開するか、新しいゲームを開始してください！または、しばらくしてからもう一度お試しください</ lang> </ voice> '、
            QUESTION_BEGIN： '<voice name = "Brian"> <lang xml：lang = "en-JP">質問に答えるには、「答えは\」と答えてから答えてください.....ここに質問があります今。 </ lang> </ voice> '、
            ALL_QUESTIONS_ANSWERED： '<voice name = "Brian"> <lang xml：lang = "en-JP">おめでとうございます！すべての質問に答えました。よくやった！ </ lang> </ voice> '、
            QUESTIONS_ANSWERED_CORRECTLY： '<voice name = "Brian"> <lang xml：lang = "en-JP">これは正しい答えです。 </ lang> </ voice> '、
            QUESTIONS_ANSWERED_WORNG： '<voice name = "Brian"> <lang xml：lang = "en-JP"> OH NO！これは間違った答えです...... </ lang> </ voice> '、
            NEXT_QUESTION： '<voice name = "Brian"> <lang xml：lang = "en-JP">次の質問に進みましょう。 </ lang> </ voice> '、
            QUESTIONS_JUMP： '<voice name = "Brian"> <lang xml：lang = "en-JP">グライドライフラインを購入して使用できます。この質問をすり抜けたい場合は、GLIDEライフラインを購入してください。 </ lang> </ voice> '、 
            QUESTIONS_CANNOT_JUMP： '<voice name = "Brian"> <lang xml：lang = "en-JP">残念ながら、すでにGLIDEライフラインを使用しています。このゲームは終了しています...新しいゲームを開始してください。 </ lang> </ voice> '、 
            QUESTIONS_REPROMPT_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">聞き取れませんでした。</ lang> </ voice>'、
            HELP_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP"> Fifty Fiftyオプションを使用して、いくつかの答えを1つずつ聞き、もう1つのweargを聞くことができます。 ' 
            + '別のライフラインエキスパートオピニオンは、正しい答えのガイダンスを提供できます。 '
            + 'GLIDEの3番目のライフラインは間違った答えを導きますが、GLIDE PACKを購入する必要があります</ lang> </ voice>'、
            CURRENT_SCORE： '<voice name = "Brian"> <lang xml：lang = "en-JP">現在のスコアは{{score}}です。 </ lang> </ voice> '、
            CURRENT_SCORE_ERROR： '<voice name = "Brian"> <lang xml：lang = "en-JP">ゲームのスコアを確認するには、ゲームを再開または開始してください。 </ lang> </ voice> '、
            FIFTY_FITY_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">質問の2つのオプション</ lang> </ voice>'、
            EXPERT_REVIEW_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">これはあなたの質問について専門家が言わなければならないものです</ lang> </ voice>'、
            LIFE_LINE_ERROR_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">申し訳ありませんが、このライフラインはゲームの進行中にのみ使用できます。ライフラインを使用するには、新しいゲームを再開または開始してください。 </ lang> </ voice> '、
            LIFE_LINE_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">残り{{lifeLinesLeft}}行の行があります。 </ lang> </ voice> '、
            LIFE_LINE_EXHAUSTED： '<voice name = "Brian"> <lang xml：lang = "en-JP">申し訳ありませんが、{{lifeLineName}}ライフラインを既に使用しています。別のライフラインを使用してください。 </ lang> </ voice> '、
            LIFE_LINES_SATUS： '<voice name = "Brian"> <lang xml：lang = "en-JP">他のライフラインについて知るには、自分のライフラインまたはライフラインのステータスを言ってください</ lang> </ voice>'、
            CURRENT_QUESTION： '<voice name = "Brian"> <lang xml：lang = "en-JP">現在の質問は{{currentQuestion}} </ lang> </ voice>'です。
            START_GAME_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">以前のゲームを再開するには「ゲームを再開」と言い、新しいゲームを開始するには「新しいゲームを開始」と言います。 '。ヘルプが必要な場合は、「助けてください」と言ってください。
            GAME_RULES_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">このゲームは、さまざまなスキルに関する質問を解決するものです。プレイ中に役立つ15の質問と3つのライフラインがあります。 </ lang> </ voice> '、
            USE_LIFE_LINES： '<voice name = "Brian"> <lang xml：lang = "en-JP">いつでも、Fifty Fiftyを使用するか、Expert ReviewまたはBuy Glideライフラインを使用する</ lang> </ voiceと言うことができます> '、
            RESUME_ERROR_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">再開するゲームがありません。新しいゲームを開始するには、「新しいゲームを開始」と言います。ヘルプが必要な場合は、「助けてください」と言ってください。
            CONSUMABLE_NOT_PURCHASED： '<voice name = "Brian"> <lang xml：lang = "en-JP">申し訳ありませんが、グライドは購入されませんでした。 </ lang> </ voice> '、
            THANK_YOU_FOR_BUYING： '<voice name = "Brian"> <lang xml：lang = "en-JP">グライドライフラインをご購入いただきありがとうございます。 {{askQuestion}} </ lang> </ voice> '、
            CAN_NOT_BUY_CONSUMABLE： '<voice name = "Brian"> <lang xml：lang = "en-JP">現在、ヒントを販売できないようです。すみません。....もう一度試すか、新しいゲームを開始してください。</ lang> </ voice> '、
            DEFAULT_GAME_NAME_MSG： '<voice name = "Brian"> <lang xml：lang = "en-JP">「新しいグループを作成」と言って、プレイするグループを作成してください。または、「新しいゲームを開始する」と言ってください</ lang> </ voice>」、
            ERROR_CREATING_GROUP： '<voice name = "Brian"> <lang xml：lang = "en-JP">グループの作成中にエラーが発生しました。シングルモードゲームをお試しください...シングルモードで起動するには、「シングルモードゲームを開始」と言ってください。 </ lang> </ voice> '、
            ERROR_CREATING_GROUP_REPEAT： '<voice name = "Brian"> <lang xml：lang = "en-JP">シングルモードで起動するには、「シングルモードゲームを開始」と発声してください。 </ lang> </ voice> '、
            GROUP_ALREADY_EXISTS： '<voice name = "Brian"> <lang xml：lang = "en-JP">申し訳ありませんが、このグループは既に存在します。...別の名前でグループを作成したい場合... \と言ってください新しいグループを作成し、その後に新しいグループ名を追加します。...または、この既存のグループを再生するには、「グループ名に続く」と言います。 </ lang> </ voice> '、
            GROUP_ALREADY_EXISTS_REPROMPT： '<voice name = "Brian"> <lang xml：lang = "en-JP">「新しいグループの作成」に続いて新しいグループ名</ lang> </ voice>と言ってください。
            GROUP_NOT_EXISTS： '<voice name = "Brian"> <lang xml：lang = "en-JP">ゲーム用の新しいグループを作成していただきありがとうございます。ゲームを開始するには、「ゲームを開始」と言ってください。 </ lang> </ voice> '、
            GROUP_NOT_EXISTS_REPROMPT： '<voice name = "Brian"> <lang xml：lang = "en-JP">「ゲームを開始」と言ってプレイを開始してください。 </ lang> </ voice> '

        }
    }
}
