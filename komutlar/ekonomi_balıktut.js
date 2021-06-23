const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')
function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;}
module.exports.run = async (client, message, args) => {
  var tüfek = await db.fetch(`olta_${message.author.id}`)
  if (tüfek === "yok") return message.channel.send("Senin oltan yok **?market** yazabilisin")
  if (!tüfek) return message.channel.send("Senin oltan yok **?market** yazabilisin")
  let times = await db.fetch(`balıktutma_${message.author.id}`)
  let day = 86400000/72
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Balık tutmak için ${time.hours ? time.hours + " saat": ""} ${time.minutes ? time.minutes + ' dakika,' : ''} ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'komutu tekrar gir!'}`))
  return
  }
   const cümleler = [
       "İstavrit tuttun ve ", "Levrek tuttun ve ", "Hamsi tuttun ve ", "Çipura tuttun ve ", "Balon balığı tuttun yemek istemezsin herhalde ve ", "Morina tuttun ve ", "Kefal tuttun ve "]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
         var kazanç = rastgeleMiktar(3000,4000) 
         db.add(`para_${message.author.id}`, kazanç)
  message.channel.send(cümle + kazanç + " para kazandın")
  db.set(`balıktutma_${message.author.id}`, Date.now());
}
exports.conf = {
  enabled: true,
  aliases: ["balıktut"],
};
exports.help = {
  name: 'balık-tut',
};