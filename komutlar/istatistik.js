const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

    const istatistik = new Discord.RichEmbed()
		
        
    .setColor('RANDOM')
    
    .addField("Bot Adı","OA Premium")
    .addField("Total Kullanıcı",client.users.size,)
	    .addField("Çalışma Süresi",client.uptime)
    
    
	
    
   
    
        
  
  
          
         
        return message.channel.sendEmbed(istatistik);

  
  }
