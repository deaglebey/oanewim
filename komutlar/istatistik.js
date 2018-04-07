const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

    const istatistik = new Discord.RichEmbed()
		
        
    .setColor('RANDOM')
    
    .addField("Bot Adı","OA Premium")
    .addField("Total Kullanıcı",client.users.size)
	    .addField("Ram Kullanımı",process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2))
    
    
	
    
   
    
        
  
  
          
         
        return message.channel.sendEmbed(istatistik);

  
  }
