module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Nope, t'as pas le droit !");

  let toKick = message.guild.member(message.mentions.users.first());
  if (!toKick) return message.channel.send("Aucun utilisateur valide saisi.");

  let role = message.guild.roles.find(r => r.name === "cancer");
  if (!role) {
    try {
      role = await message.guild.createRole({
        SEND_MESSAGES : false,
        ADD_REACTIONS : false
      });
    } catch (e) {
      console.log(e.satck);

    }
}
await toKick.addRole(role);
message.channel.send("Il est maintenant kické !!");
}

module.exports.help = {
  name: "kick"
}
