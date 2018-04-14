const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    const yardımlistesi=new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor("OA Premium Tüm Komutlar Yardım Listesi \n\n\n\n")
    .addField("Eğlence Komutları","**çayiç**:Size çay ısmarlar.!\n**yaz**:Bota istediğiniz herhangi şeyi yazdırır.!\n**yazı-tura**:Yazı-tura atarsınız.!\n**özlü**:Bot size rastgele özlü sözler söyler.\n**ml**:Bot rastgele MLBB Resmi gönderir.\n**kalp**:OA ekibinden size kalp gönderir.")
  
  

  .addField("Kullanıcı Komutları","**avatar**:Avatarınızı görüntüler.\n**bildir**:Rahatsız olduğunuz kişiyi adminlere bildirmenize yarar.\n**botbilgi**:Bot hakkında bilgi alırsınız.!\n**davet**:Sunucumuza arkadaşlarınızı davet etmeniz için bot size bir link verir.\n**istatistik**:Bot istatistiklerini gösterir.!\n**profil**:Sunucu içerisindeki durumunuzu gösterir.!\n**sunucubilgi**:Sunucu hakkında bilgi verir.\n**yenilikler**:Bota gelen yenilik ve güncellemeleri gösterir.\n**öner**:Bota eklenmesini istediğiniz tavsiye ve önerilerinizi yöneticilere iletir.\n**ping**:Botun anlık pingini gösterir.\n**yardım**:Botun komutlarını gösterir.")
  .addField("Admin ve Mod Komutları","**anket**:Sunucu içerisinde anket yapar.\n**ban**:Belirlenen kişi sunucudan yasaklar.!\n**temizle**:Belirtilen miktarda mesaj siler.")
    message.author.send(yardımlistesi);
    //message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("Özel mesajlarını kontrol et.!",'Komutları özel mesaj olarak yolladım. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    
  

    
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
