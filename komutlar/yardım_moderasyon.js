const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LordMadisus Moderasyon Komutları')
.addField('?ban', 'Etiketlediğiniz kullanıcıyı sunucudan banlar')
.addField('?kick', 'Etiketlediğiniz kullanıcıyı sunucudan atar')
.addField('?nuke', 'Bulunduğunuz kanalı siler ve aynısından bir tane daha açar')
.addField('?sil', 'Yazdığınız sayıda mesaj siler')
.addField('?hgbb', 'Resimli hg bb sistemini ayarlarsınız')
.addField('?sayaç', 'Sayaç ayarlarsınız')
.addField('?otorol', 'Otorol ayarlarsınız')
.addField('?sa-as', 'Sa deyince as demesini ayarlarsınız')
.addField('?küfür-engel', 'Küfür engeli açıp kapatırsınız')
.addField('?reklam-engel', 'Reklam engeli açıp kapatırsınız')
.addField('?caps-engel', 'Caps-Lock engeli açıp kapatırsınız')
.setTimestamp()
.setFooter('LordMadisus', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["yönetim"], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};