const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let proprio = message.guild.owner

    let embed = new Discord.RichEmbed()
      .setAuthor(`informations sur ${message.guild.name} : `)
      .setColor("#AD0725")
      .addField("créé par:", proprio )
      .addField("le:", message.guild.createdAt)
      .addField("ID du serveur:", message.guild.id)
      .addField("nombres d'utilisateurs:", message.guild.memberCount)
      ;
      //à ajouter: affichage de rep, de niveau, d'xp et de roles.
    message.channel.send(embed);
}


module.exports.help = {
  name: "serverinfo"
}
