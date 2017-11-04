const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
      .setTitle("informations sur les commandes:")
      .setDescription("chacune des commandes suivantes doit être précédée du préfixe  j4")
      .setColor("#1b57b7")
      .addField("serverinfo:", "donne des informations sur le serveur.")
      .addField("userinfo:", "donne plusieurs informations sommaires sur vous-même, l'auteur du message.")
      .addField("invite:", "redonne le lien d'invitation du serveur.")
      .addField("yn:", "ne prend pas en compte votre message, mais vous fourni une réponse aléatoire.")
      .addField("qui:", "Vous devez spécifier deux noms, des mentions ou de simples mots, et le bot vous dit qui des 2 a raison.");
      //à ajouter: affichage de rep, de niveau, d'xp et de roles.
    message.channel.send(embed);
}


module.exports.help = {
  name: "help"
}
