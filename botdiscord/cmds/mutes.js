const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

let messageArray = message.content.split(" ");
    console.log(messageArray[2]);


  let toMutes = message.guild.member(message.mentions.users.first());
  if (!toMutes) return message.channel.send("Aucun utilisateur valide saisi.");
  toMutes.setMute(true, ["chiant"]);

}


module.exports.help = {
  name: "mute"
}
