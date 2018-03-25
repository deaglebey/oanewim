const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
  
  let aciklama = args.slice(0).join(' ');
   
  
    
  
  
  const embed = new Discord.RichEmbed()
    .setColor('00f9f5')
 
    .setAuthor("Anketi Başlatan Yönetici:"+ message.author.username + "",message.author.avatarURL)
	.setThumbnail("https://cdn.discordapp.com/avatars/384342647826808832/b453dbf1833b28342ce837a0024f458c.jpg?size=1024")
    .setTitle("Anket.!")

    
    .addField("Sizce Şöyle yapalımmı ?",aciklama)
    
    
    
    
    
    
    
  return message.channel.send(embed).then(message => { message.react("☑"),message.react("✖"); });
  
  
  
 

  
  

 
   
	

 
    
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'anket',
  description: 'Admin ve yönetici komutudur.!',
  usage: 'anket'
};
