const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

    const istatistik = new Discord.RichEmbed()
		
        
    .setColor('RANDOM')
    
    .addField("Bot Adı","OA Premium",true)
    .addField("Total Kullanıcı",client.users.size,true)
	    .addField("Çalışma Süresi",client.uptime,true)
    
    
	
    
   
    
        
  
  
          
         
        return message.channel.sendEmbed(istatistik);

  
  }
