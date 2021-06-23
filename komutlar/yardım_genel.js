const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» LordMadisus Komut Sistemleri')
.setTimestamp()
.addField('⚙️ ?moderasyon', 'Moderasyon komutlarını listeler')
.addField('💰 ?ekonomi', 'Ekonomi komutlarını listeler')
.addField('🤩 ?eğlence', 'Eğlence komutlarını listeler')
.addField('🎵 ?müzik', 'Müzik komutlarını listeler')
.addField('🎁 ?çekiliş', "Çekiliş komutlarını listeler")
.addField('👥 ?davet-sistemi',"Davet sistemi komutlarını listeler")
.addField('📩 ?ticket-tool',"Ticket tool sisteminin komutlarını listeler")
.addField('🌟 ?premium', 'Premium komutlarını listeler')
.addField('💼 ?destek', 'Destek komutlarını listeler')
.addField("🔞 ?nsfw", "Nsfw komutlarını listeler (kanal nsfw kanalı değilse çalışmaz)")
.addField('🕐 ?uptime', 'Uptime komutlarını listeler')
.addField('💫 ?yenilikler', "Bota eklenen yeni şeyleri gösterir")

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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};