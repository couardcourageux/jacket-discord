const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

  let messageArray = message.content.split(" ");
  var limit = [1];
  if (isNaN(limit) === true)
    {
      return message.channel.send("La limite choisie n'est pas un nombre valide, help pour plus d'informations");
    }

  if (limit === 0){

  }
  else if (limit < 51){

  }else{
    message.channel.send("50 est le nombre limite pour définir une limite d'utilisateurs d'un chn vocal.");
  }

}


module.exports.help = {
  name: "vocal"
}
