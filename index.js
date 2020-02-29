
const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "*";

client.login("NTE4ODQxODU5MjQyNTkwMjA5.DuW1cw.5V1nmmHds8fzAecgSFBxdTRv5ck");

client.on('message' , message => {

    if(message.content === "Bienvenue {user} sur {server} passe un bon moment"){
        message.reply("Bienvenue {user} sur {server} passe un bon moment");
        console.log('Le bot dit Bienvenue');
    }
});