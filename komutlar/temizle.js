const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('#f23400')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
	
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
	const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
	
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
	
	if(messagecount=NaN){
		message.channel.send("Yanlış kullanım. `oa+temizle silinecek miktar`")
	}
	
	if(messagecount<1){
		message.channel.send("Bir sayı girmelisin değilmi.!")
	}
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField('Yetkili:', message.author.username)
    .addField('Silinen mesaj sayısı:', messagecount)
    .addField('Sonuç:', `Başarılı`)
    return message.channel.sendEmbed(sohbetsilindi).then(message => { setTimeout(function(){ message.delete(0); }, 3000); });
    console.log("Sohbet " + message.member + " tarafından silindi!");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.(Admin Komutudur.!)',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
