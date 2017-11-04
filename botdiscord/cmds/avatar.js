const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("generating avatar ...");

  if (!message.author.displayAvatarUrl) return msg.edit("no icon.");

  await message.channel.send({files: [
    {
      attachment: message.author.displayAvatarUrl,
      name: "avatar.png"
    }
  ]})
  msg.delete();
}

module.exports.help = {
  name: "avatar"
}
