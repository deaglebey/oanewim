const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');

var prefix = ayarlar.prefix;

module.exports = client => {
	
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı.');

    var Games = [

        "Yeni komut: oa-slot ✨",
    
        "Arkadaşlarını davet et:https://discord.gg/Dg83FZf  ✨",
		
		`${client.users.size} kullanıcı ✨`,
		
		`${prefix}yardım ✨`,
		
		
	    
	    	


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

        client.user.setGame(Games[random], "https://www.twitch.tv/batumurt11");
        }, 2 * 2500);

};
