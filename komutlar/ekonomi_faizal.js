const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
  const sakso = db.fetch(`premod_${message.author.id}`)
  if(sakso === "aktif"){
let times = await db.fetch(`faiz${message.author.id}`)
  let day = (86400000)
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("GOLD")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Faiz koymak için ${time.hours ? time.hours + " saat,": ""} ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))
  return
  }
db.set(`faiz${message.author.id}`, Date.now())
    var para = await db.fetch(`bankapara_${message.author.id}`)
var sayi=para/4;
sayi=Math.floor(sayi);
var miktar = (sayi); 
    message.channel.send( "faiz koydun ve " + miktar + " para bankana verildi")
    db.add(`bankapara_${message.author.id}`, miktar)
}
  else{
    message.channel.send("Bu komutu sadece premium üyeler kullanabilir")
  }
 };
exports.conf = {
  enabled: true,
  aliases: [],
};

exports.help = {
  name: 'faiz',
};