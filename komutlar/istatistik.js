const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

    const istatistik = new Discord.RichEmbed()
		
        
    .setColor('RANDOM')
    
    .addField("Total Kullanıcı",client.users.size,true)
    
    
	
    
   
    
        
  
  
          
         
        return message.channel.sendEmbed(istatistik);

  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Bot istatistik bilgilerini verir.!',
  usage: 'istatistik'
};
