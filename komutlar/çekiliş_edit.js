const Discord = require('discord.js');
const db = require("quick.db")
const ms = require('ms');
exports.run = async (award, message, args) => {


   
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("Bunu yapmak için yeterli yetkin yok.");
            return;
          }
    
    let gweep = args[0];
    let kazanan = args[1];
    let odul = args[2];
    if(!gweep) return message.channel.send("Lütfen bir çekiliş İD si gir")
    if(!kazanan) return message.channel.send("Lütfen bir kazanan sayısı gir")
    if(!odul) return message.channel.send("Lütfen bir ödül belirt")
            award.giveawaysManager.edit(gweep, {
                newWinnerCount: kazanan,
                newPrize: odul,
            }).then(() => {
                message.channel.send("Çekiliş düzenlendi!");
            })
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'gedit',
  description: '',
  usage: ''
};