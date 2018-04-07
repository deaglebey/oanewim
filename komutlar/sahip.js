const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 if(message.author.id !=="327050092957794316"){
 message.channel.send(":x: Üzgünüm Bu Komut Yapımcım Tek Kullanabilir.!" + message.author)
 }
 
 else {
 const yardımlistesi=new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor("OA Premium Yetkili Yardım Listesi \n\n\n\n")
    .addField("Eğlence Komutları","**çayiç**:Size çay ısmarlar.!\n**yaz**:Bota istediğiniz herhangi şeyi yazdırır.!\n**yazı-tura**:Yazı-tura atarsınız.!\n**özlü**:Bot size rastgele özlü sözler söyler.\n**ml**:Bot rastgele MLBB Resmi gönderir.\n**kalp**:OA ekibinden size kalp gönderir.")
  
  

  .addField("Kullanıcı Komutları","**bildir**:Rahatsız olduğunuz kişiyi adminlere bildirmenize yarar.\n**botbilgi**:Bot hakkında bilgi alırsınız.!\n**davet**:Sunucumuza arkadaşlarınızı davet etmeniz için bot size bir link verir.\n**profil**:Sunucu içerisindeki durumunuzu gösterir.!\n**sunucubilgi**:Sunucu hakkında bilgi verir.\n**yenilikler**:Bota gelen yenilik ve güncellemeleri gösterir.\n**öner**:Bota eklenmesini istediğiniz tavsiye ve önerilerinizi yöneticilere iletir.\n**ping**:Botun anlık pingini gösterir.\n**yardım**:Botun komutlarını gösterir.")
  .addField("Admin ve Mod Komutları","**anket**:Sunucu içerisinde anket yapar.\n**ban**:Belirlenen kişi sunucudan yasaklar.!\n**temizle**:Bu komut şuan devredışıdır.")
    message.author.send(yardımlistesi);
    //message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("Özel mesajlarını kontrol et.!",'Komutları özel mesaj olarak yolladım. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  }   }
  

 
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sahipcmd',
  description: 'Bot sahibinin komutlarını gösterir.!',
  usage: 'sahipcmd'
};
