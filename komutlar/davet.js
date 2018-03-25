const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

   const davet = new Discord.RichEmbed()
		
        
    .setColor('#5F9EA0')
    .setThumbnail("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
    .setAuthor("OA ON Air Discord Sunucumuza Arkadaşlarını Davet ET")
	.setDescription("-----------------------------------------------------------------")
	.addField("Sunucu Davet Linki","https://bit.ly/oa-davet")
    
        
  
  
          
         
        return message.channel.sendEmbed(davet).then(message => { setTimeout(function(){ message.delete(0); }, 7000); });

  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'OA ON AIR Suncusuna arkadaşlarınızı davet etmeniz için link verir.',
  usage: 'davet'
};
