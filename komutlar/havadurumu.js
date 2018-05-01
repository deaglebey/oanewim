const Discord = require('discord.js');
const moment = require('moment');
const weather = require('weather-js');//weather-js modülünü yükle.<npm install weather-js>
const ayarlar=require('../ayarlar.json');
const prefix=require('../ayarlar.json');
const client = new Discord.Client();


exports.run = (client, message, args) => {

//let args=cont.slice(1);
    //let cont=message.content.slice(prefix.lenght).split(' ');

    weather.find({search: args.join(' '), degreeType: 'C'},function(err,result){
        if(err) message.channel.send(err);



        var current=result[0].current;
        var location=result[0].location;



        const hava = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setAuthor('Hava Durumu Bilgileri')
        .setThumbnail(current.imageUrl)
        .addField('Şehir/Ülke',current.observationpoint,true)
        //.addField('Saat Dilimi',location.timezone,true)
        .addField('Derece Türü',location.degreetype,true)
        .addField('Sıcaklık',current.temperature+' C°',true)
        .addField('Rüzgar',current.winddisplay,true)
        .addField('Nem','%'+current.humidity,true)
        .setFooter('OA Premium')
        message.channel.send(hava);

    });







  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'havadurumu',
  description: 'Belirlenen şehirin hava durumu hakkında bilgi verir.',
  usage: 'havadurumu <sehir>'
};
