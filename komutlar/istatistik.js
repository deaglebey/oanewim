const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

    const istatistik = new Discord.RichEmbed()
		
        
    .setColor('RANDOM')
    
    .addField("Bot Adı","OA Premium",true),
    .addField("Total Kullanıcı",client.users.size,true),
	    .addField("Ram Kullanımı",process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)+" MB **Kullanılıyor...**")
    
    
	
    
   
    
        
  
  
          
         
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
