const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args ) => {
var yes = Math.floor(Math.random() * (100 - 0)) + 0;
var no = 100 - yes;
var rep = Math.floor(Math.random() * (4 - 0)) + 0;
var oui = ["Oui, tu as raison ", "Exact !", "Je suis sûr que c'est vrai, à", "C'est non, et je mens tout le temps", "https://www.memecenter.com/fun/7196049/oui-oui-oui"];
var non = ["Nein !!", "Huum, Non !", "Tu as tort ", "FAUX !", "https://www.memecenter.com/fun/7196050/aaahh-risistas"];
var jsp = ["https://www.memecenter.com/fun/7196051/balec", "https://www.memecenter.com/fun/7196053/stouc", "je sais pas", "Je te répondrai pas, c'est pour les grands", "M'en fout !!"];
console.log(yes + "    " + no);
if (yes > no) {
  if (rep === 0)
  {
  return  message.channel.send(oui[0] + `${message.author}` + " (à " + yes + "%)");
  }
  else {
  return  message.channel.send(oui[rep] + " (" + yes + "%)");
  }
  //  message.channel.send("oui (" + yes + "%)");
}
else if (yes < no) {
if (rep === 2)
{
return  message.channel.send(non[2] + `${message.author}` + " (" + no + "%)");
}
else{
  return message.channel.send(non[rep] + " (" + no + "%)");
}

//  message.channel.send("non (" + no + "%)" );
}
else{

return  message.channel.send(jsp[rep]);
//  message.channel.send("50-50");
}
}



module.exports.help = {
  name: "yn"
}
