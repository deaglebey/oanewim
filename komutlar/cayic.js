const ballAnswers = require('../cayic.json');
var Discord =  require("discord.js");
exports.run = function(client, message, args){
  const cay =new  Discord.RichEmbed()
	  .setAuthor("Al Bakalım Benden Sana Çay." \n+ message.author.username +   ")
	.setColor("RANDOM")
  .setImage(ballAnswers[Math.floor(Math.random() * 2) +1])
  return message.channel.send(cay);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çayiç',
  description: 'Çay içmenize yarar.!',
  usage: 'çayiç'
};
