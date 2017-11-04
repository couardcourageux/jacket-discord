
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const mysql = require("mysql");


bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");

const token = "MzM5Njk1NTMxODM4Mjc1NTg0.DJVYfg.uhrOozLgTXp5E7O7QbNslAwZBVk";
var prefix = "j4";//mettre r0 en prefixe
var mention = "<@Jacket#6129>";


fs.readdir("./cmds/", (err, files) =>{
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
      console.log("Aucune commande valide.");
      return;
    }

    console.log(`Loading ${jsfiles.length} commands !`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}: ${f} chargée.`);
        bot.commands.set(props.help.name, props);
    });
});

var con = mysql.createConnection({
  host: "localhost",
  user:"root",
  password:"jesuisdarton",
  database:"sadb"
});

con.connect(err => {
  if(err) console.error(err);
  console.log("Connected to database");
  con.query("SHOW TABLES", console.log);
});


bot.on("ready", async () => { //ici on ouvre l'événement "ready"
  console.log("Le bot est prêt ! ");
  console.log(bot.commands);
  console.log("");
  let link = await bot.generateInvite(["ADMINISTRATOR"]);
  console.log(link);
 bot.user.setGame("Hotline Miami"); //ceci est un petit bonus, cette ligne modifie le statut "Joue à" du bot, dans ce cas-ci, le bot va afficher "Joue à Bloodborne"
});


function generateXp() {
  let min = 15;
  let max = 30;

  return Math.floor(Math.random()*(max - min + 1)) + min;
}


bot.on("message", async (message) => {

  if(message.author.bot) return;



  /*con.query(`SELECT * FROM xp WHERE id = ${message.author.id}`, (err, rows) => {
    if (err) console.error(err);
    let sql;
    if (rows.length < 1) {
      sql = `INSERT INTO xp (id, xp) VALUES (${message.author.id}, ${generateXp()})`;
    }
    else {
      let xp = rows[0].xp;
      sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id = ${message.author.id}`;
    }

    con.query(sql, console.log);

  });*/

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  //console.log(messageArray[2]);

  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args, con);



    return;
  });



  bot.login(token);
