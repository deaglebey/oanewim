const Discord = require('discord.js');
const client = new Discord.Client();



exports.run = (client, message, args) => {
  

    message.reply("OA Ekibinden sana bir kalp gönderildi.!").then(message => { setTimeout(function(){ message.delete(0); }, 7000); })
    message.react("♥")

    
    };
  

 
   
	

 
    



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kalp',
  description: 'Ekipten size bir kalp gönderir.!',
  usage: 'kalp'
};
