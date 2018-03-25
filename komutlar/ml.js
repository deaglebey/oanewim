const ballAnswers = require('../mlbb.json');
var Discord =  require("discord.js");
exports.run = function(client, message, args){
  const Enes =new  Discord.RichEmbed()
	.setColor("f9dd02")
  .setImage(ballAnswers[Math.floor(Math.random() * 20) +1])
  return message.channel.send(Enes);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ml',
  description: 'Rastgele Mobile Legends Bang Bang Karekterlerinin Resmini Gösterir Size.',
  usage: 'ml'
};
