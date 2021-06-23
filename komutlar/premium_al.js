const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => { 
     let user = args[0]
let plasmic = await db.fetch(`premod_${user}`)
if(message.author.id !== "587931040958644235" ) {
  if(message.author.id !== "834335737121210378" ) {
  return message.channel.send(" Bu komutu sadece sahibim kullanabilir.");}}
 const args0 = args[0];
  if(!user) {
    message.channel.send(message.author.username + ", lütfen bir kullanıcı **ID**'si yaz!")
  } else {
db.set(`premod_${user}`, "deaktif")
  message.channel.send(" Başarıyla premium alındı.")
}
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pre-al'],
    permLevel: 0,
}
exports.help = {
    name: 'premiumal',
    description: 'premium verirsiniz.',
    usage: 'premiumver',
}  