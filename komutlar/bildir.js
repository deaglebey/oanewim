const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`bildir` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'yonetim-sohbet⚠');
  if (message.mentions.users.size < 1) return message.reply('Kimi bildireceğimi yazmalısın. `oa+yardım bildir`').catch(console.error);

 if(reason.length<1) return message.reply("Bildirmem için bir sebep yazmalısın.! `oa+yardım bildir`")
 
	message.reply(":white_check_mark: Belirlenen kullanıcı Yönetim ekibimize başarıyla bildirildi.!").then(message => { setTimeout(function(){ message.delete(0); }, 7000); })
 
  if (!modlog) return message.reply('`yonetim-sohbet⚠` kanalını bulamıyorum.');
  //if (reason.length < 1) return message.reply('Bildirme sebebini yazmalısın.');
 
  

 
  
  
 
 
  
    
  
 
  
 
  const embed = new Discord.RichEmbed()
    .setColor('f71a02')
    .setTimestamp()
	.setThumbnail("https://cdn.discordapp.com/avatars/422498609972510732/06141e696b30add2a40ad899c49e4a8b.jpg?size=2048")
    .setAuthor("Yeni Bir Bildiri Var.!")
    .addField('Bildirilen Kullanıcı:', `${user.username}`)
    .addField('Bildiren:', `${message.author.username}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed)

  let (embed)= guild.channels.get;
  if(embed) return message.reply("Belirlenen Kişi Başarıyla Bildirildi.!");
  
  

 
   
	

 
    
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bildir',
  description: 'Olumsuz durumlarda istenilen kişiyi bildirmenize yarar.',
  usage: 'bildir [@kullanıcı] [sebep]'
};
