const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setDescription("informations sur l'utilisateur:")
      .setColor("#1b57b7")
      .addField("pseudo entier:", `${message.author.username}#${message.author.discriminator}`)
      .addField("ID:", message.author.id)
      .addField("À rejoint le serveur le :", message.guild.joinedAt);
      //à ajouter: affichage de rep, de niveau, d'xp et de roles.
    message.channel.send(embed);
}


module.exports.help = {
  name: "userinfo"
}
