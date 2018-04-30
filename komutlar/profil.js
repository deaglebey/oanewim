const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();

exports.run = (client, message, params,dateformat) => {

    var user;
    let member = message.mentions.users.first();
        let author = message.author;
        if(member) {
             user = member;
        } else {
             user = author;
        }
    member = message.guild.member(user);
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
       if (roles.length < 1) roles = ['Bu Kullanıcının Rolü Yok!'];
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    if(user.presence.status === "dnd"){
      var durum = "Rahatsız Etmeyin"
    }
    else if(user.presence.status === "online"){
      var durum = "Çevrimiçi"
    }
    else if(user.presence.status === "idle"){
      var durum = "Boşta"
    }
      else {
      var durum = "Görünmez"
    }
     const embed5 = new Discord.RichEmbed()
         .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
         .setTimestamp()
         .setThumbnail(`${user.displayAvatarURL}`)
         .addField("Kullanıcı", `${user}`, true)
         .addField("Şu anda oynadığı oyun", user.presence.game ? user.presence.game.name : 'Oynadığı bir oyun yok', true)
         .addField("Durum", `${durum}` , true)
         .addField('Katılım tarihi (Sunucu)', `${userJoined}`, true)
         .addField('Katılım Tarihi (Discord)', `${daysCreated}`, true)
         //.addField("Hesabın Kuruluş Tarihi", `${dateformat(user.createdAt)}`)
         .addField('Bu sunucudaki rolleri', `${roles.join(', ')}`, true)
         .setFooter(`OA Premium`);
         message.channel.send({embed: embed5})





  };

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
