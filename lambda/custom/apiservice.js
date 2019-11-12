const fetch = require("node-fetch");
const { URLSearchParams } = require('url');
const groupUrl = "http://52.53.126.9:8080/getquestion/group/language";

module.exports = {
    async getKbcQuestions(group, locale) {
        try {
            let languageValue = "english";
            if (locale == "de-DE") {
                languageValue = "german";
            } else if (locale == "en-GB") {
                languageValue = "english";
            } else if(locale == "ja-JP") {
                languageValue = "japnese";
            }
            if (group == null) {
                group = "easy";
            }

            const finalUrl = groupUrl.replace("group", group).replace("language", languageValue);
            return new Promise(async function (resolve, reject) {
                const response = await fetch(finalUrl, {method: 'get', headers: { 'Content-Type': 'application/json' }});
                const json = await response.json();
                // console.log(" Api response from node-fetch js "+ JSON.stringify(json));
                resolve(json);
            });
        } catch (error) {
            console.error(" Error while fetching question from node-fetch js file "+ error);
        }
     }
};