const ballAnswers = require('../cayic.json');
var Discord =  require("discord.js");
exports.run = function(client, message, args){
  const Enes =new  Discord.RichEmbed()
  .setAuthor(message.author.username,"Al reis benden sana çay.")
	.setColor("RANDOM")
  .setImage(ballAnswers[Math.floor(Math.random() * 2) +1])
  return message.channel.send(Enes);
  
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
