const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, params) => {

    const profilbilgi = new Discord.RichEmbed()
		
        
    .setColor('#5F9EA0')
    .setThumbnail(message.author.avatarURL)
    .setAuthor("Kullanıcı Bilgileriniz")
    
	
    .addField("Kullanıcı Adı:",message.author.username)
	.addField("OA`ya Giriş Tarihiniz:",message.member.joinedAt)
	.addField("Discord Kimliğiniz:",message.member.id)
	.addField("Sahip Olunan Rol:",message.member.hoistRole ? message.member.hoistRole :'\Şuan Sunucudan Dolayı Bu Bilgiyi Görmeye Hakkım Yok')
	.addField('Şu an oynadığı oyun:', message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamıyor')
	.addField('Bot bir kullanıcımı ?:', message.author.bot ? '\n Evet' : 'Hayır')
	
   
    
        
  
  
          
         
        return message.channel.sendEmbed(profilbilgi);

  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'profil',
  description: 'Profiliniz hakkında bilgi verir.',
  usage: 'profil'
};
