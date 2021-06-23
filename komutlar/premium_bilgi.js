const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LordMadisus Premium Bilgi')
.setDescription("     __**AYRICALIKLAR**__ \n **Uptime hizmetinden faydalanma** \n **?faiz komutu ile ekstra para alma** \n **?haftalık komutu ile ekstra para alma** \n **?snipe komutu ile sunucuda silinen son mesajı görebilme** \n***Yakında daha fazla eklenecektir.***  ")
.setTimestamp()

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
  name: 'pre-bilgi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};