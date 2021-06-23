const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
  const sakso = db.fetch(`premod_${message.author.id}`)
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} if(sakso === "aktif"){
let times = await db.fetch(`haftalık_${message.author.id}`)
  let day = (86400000*7)
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Haftalık ödülünü almak için ${time.days ? time.days + " gün,": ""}${time.hours ? time.hours + " saat,": ""} ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))
  return
  }
let moneys = rastgeleMiktar(10000,15000);
      message.channel.send(new Discord.MessageEmbed()
                   .setColor("YELLOW")
                   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                   .setDescription(`Haftalık ödülünü topladın, cüzdanına ${moneys} 💸 eklendi!`))

db.set(`haftalık_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
}
  else{
    message.channel.send("Bu komutu sadece premium üyeler kullanabilir")
  }
 };
exports.conf = {
  enabled: true,
  aliases: ["weekly"],
};

exports.help = {
  name: 'haftalık',
};