const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 if(message.author.id !=="327050092957794316"){
 message.channel.send(":x: Üzgünüm Bu Komut Yapımcım Tek Kullanabilir.!" + message.author)
 }
  

 
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sahipcmd',
  description: 'Bot sahibinin komutlarını gösterir.!',
  usage: 'sahipcmd'
};
