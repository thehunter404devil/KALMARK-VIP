module.exports.config = {
name: ".spam",
	version: "",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Dot spam",
	commandCategory: "test",
	usages: "Not recommaded",
	cooldowns: 5,
	dependencies: "",
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*vonglap
	
for (i = 5; i < 200; i++) {
 k(".");
}
	
	}
	