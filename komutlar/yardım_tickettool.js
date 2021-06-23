const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LordMadisus Komut Sistemleri')
.setTimestamp()
.setDescription("Her gün 1 defa ?ticket-kur komutu kullanılması tavsiye edilir")
.addField('?ticket-kanal', 'Ticket açma mesajının atılacağı kanalı seçer')
.addField('?ticket-kur', 'Ayarlanan kanala ticket mesajını atar')
.addField('?ticket-aç', 'Kapatılan ticketi açar')
.addField('?ticket-kapat', 'Ticketi kapatır')


.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["help",], 
  permLevel: 0 
};

exports.help = {
  name: 'ticket-tool',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};