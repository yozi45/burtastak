const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LordMadisus Destek Komutları')
.setTimestamp()
.addField('?bağış', 'Bağış için IBAN no atar')
.addField('?davet', 'Botun davet linkini atar')
.addField('?sunucu', 'Botun destek sunucusunu atar')
.addField('?öneri', 'Bot için önerilerini bu komutla paylaşabilirsiniz')
.setFooter('LordMadisus', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["support"], 
  permLevel: 0 
};

exports.help = {
  name: 'destek',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};