const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args ) => {
var un = Math.random() * (100 - 0) + 0;
var deux = 100 - un;

let messageArray = message.content.split(" ");
    messageArray[2];
    if (messageArray[1] === undefined) return message.channel.send("commande invalide, il faut saisir 2 noms.");
    if (messageArray[2] === undefined) return message.channel.send("commande invalide, il faut saisir 2 noms.");

if (un < deux) {
  message.channel.send(   messageArray[2] + " à raison.");
}
else if (un > deux) {
  message.channel.send( messageArray[2] + " à raison.");
}
else{
  message.channel.send("Aucun de vous deux n'a raison !");
}
}



module.exports.help = {
  name: "qui"
}
