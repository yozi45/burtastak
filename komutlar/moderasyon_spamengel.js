const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const alfa = require("../ayarlar.json");
let prefix = alfa.prefix 
  
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed()
                                           .setTitle("LordMadisus AntiSpam Menüsü")
                                           .setDescription("Antispam açmak için `?antispam aç` kapatmak için  `?antispam kapat` yazabilirsin")
                                           .addField("Eğer birisi spam yaptığında susturulsun istiyorsanız;", "  **MUTED** adında bir rol oluşturup mesaj yazma yetkisini alabilirsiniz"))
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':hypesquad1: **Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!**')
 
  if (args[0] === 'aç') {
    
    db.set(`spam_${message.guild.id}`, 'acik')
    message.channel.send(`Spam engeli açıldı`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`spam_${message.guild.id}`, 'kapali')
    message.channel.send(`Spam engeli kapandı!`)

  }
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["spam-engel"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "antispam",
  description: "saas-ayarla",
  usage: "saas-ayarla"
}; 