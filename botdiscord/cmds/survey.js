const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

let messageArray = message.content.split(" ");
var votes = [];
votes.push(message.author.id);
var voix = [];
voix.push(messageArray[2]);
console.log(votes);
console.log(voix);



}


module.exports.help = {
  name: "survey"
}
