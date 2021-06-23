const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
var balta = await db.fetch(`balta_${message.author.id}`)
var olta = await db.fetch(`olta_${message.author.id}`)
var tüfek = await db.fetch(`tüfek_${message.author.id}`)
var altın = await db.fetch(`altın_${message.author.id}`)
var gard = await db.fetch(`gard_${message.author.id}`)
var para = await db.fetch(`para_${message.author.id}`)
var eşya = args[0]
if (!eşya) return message.channel.send("Lütfen satın almak istediğin şeyi yaz \n balta/olta/tüfek/altıntop/bodyguard")
if (eşya === "balta"){
  if (balta === "var") return message.channel.send("Senin zaten baltan var")
  if (para < 50000) return message.channel.send("Senin bu kadar paran yok balta almak için 50000 TL lazım")
  db.set(`balta_${message.author.id}`, "var")
  db.add(`para_${message.author.id}`, -50000)
  message.channel.send("İşlem başarılı artık bir baltan var")
}
  if (eşya === "olta"){
  if (olta === "var") return message.channel.send("Senin zaten oltan var")
  if (para < 50000) return message.channel.send("Senin bu kadar paran yok olta almak için 50000 TL lazım")
  db.set(`olta_${message.author.id}`, "var")
  db.add(`para_${message.author.id}`, -50000)
  message.channel.send("İşlem başarılı artık bir oltan var")
}
  if (eşya === "tüfek"){
  if (tüfek === "var") return message.channel.send("Senin zaten tüfeğin var")
  if (para < 50000) return message.channel.send("Senin bu kadar paran yok tüfek almak için 50000 TL lazım")
  db.set(`tüfek_${message.author.id}`, "var")
  db.add(`para_${message.author.id}`, -50000)
  message.channel.send("İşlem başarılı artık bir tüfeğin var")
}
  if (eşya === "altıntop"){
  if (altın === "var") return message.channel.send("Senin zaten **ALTIN TOP**un var")
  if (para < 500000) return message.channel.send("Senin bu kadar paran yok **ALTIN TOP** almak için 500000TL lazım")
  db.set(`altın_${message.author.id}`, "var")
  db.add(`para_${message.author.id}`, -500000)
  message.channel.send("İşlem başarılı artık **ALTIN TOP**un var")
}
  if (eşya === "bodyguard"){
  if (gard === "var") return message.channel.send("Senin zaten bodygardın var")
  if (para < 100000) return message.channel.send("Senin bu kadar paran yok bodyguard almak için 100000 TL lazım")
  db.set(`gard_${message.author.id}`, "var")
  db.add(`para_${message.author.id}`, -100000)
  message.channel.send("İşlem başarılı artık bir bodyguardın var")
}
}
exports.conf = {
  enabled: true,
  aliases: ["market-al","buy","satınal"],
};
exports.help = {
  name: 'marketal',
};