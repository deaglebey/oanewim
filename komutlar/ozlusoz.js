const ballAnswers = require('../ozlu.json');

exports.run = function(client, message, args){
  
  
  message.channel.send (ballAnswers[Math.floor(Math.random() * 20) +1])
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'özlü',
  description: 'Rastgele size özlü sözler söyler.!',
  usage: 'özlü'
};
