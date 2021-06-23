const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js')
const db = require('quick.db');


const sahip = require 
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
db.set(`premod_${user}`, "aktif")
  message.channel.send(" Başarıyla premium aktif edildi.")
}
  }
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pre-ver'],
    permLevel: 0,
}
exports.help = {
    name: 'premiumver',
    description: 'premium verirsiniz.',
    usage: 'premiumver',
} 
///mantıklı +1  /DC GEL DENEYELİM
//sahipler.jsonu yazmamışsın ben yazsım

