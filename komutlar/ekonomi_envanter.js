const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first() || message.author
var balta = await db.fetch(`balta_${user.id}`)
var olta = await db.fetch(`olta_${user.id}`)
var tüfek = await db.fetch(`tüfek_${user.id}`)
var altın = await db.fetch(`altın_${user.id}`)
var gard = await db.fetch(`gard_${user.id}`)

message.channel.send(new Discord.MessageEmbed()
                    
                     .setTitle(user.tag + " ENVANTERİ")
                                     .setColor("YELLOW")
                  .setAuthor(user.tag, user.avatarURL({dynamic: true}))     
                  .addField("BALTA", "**"+balta+"**")
                  .addField("OLTA", "**"+olta+"**")
                 .addField("TÜFEK", "**"+tüfek+"**")
                     .addField("**ALTIN TOP**", "**"+altın+"**")
                     .addField("BODYGUARD", "**"+gard+"**")
                     
                    )



}
exports.conf = {
  enabled: true,
  aliases: ["envanter", "env"],
};
exports.help = {
  name: 'inv',
};