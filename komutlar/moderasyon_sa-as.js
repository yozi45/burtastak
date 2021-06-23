const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const alfa = require("../ayarlar.json");
let prefix = alfa.prefix 
  
  if (!args[0]) return message.channel.send(`**SA-AS** Sistemini Açmak için **Aç** veya **Kapat** yazınız! \nÖrnek: **${prefix}sa-as aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':hypesquad1: **Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!**')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`Artık bot **SA** diyince **AS** diyecek!\n Kapatmak için "\`${prefix}sa-as kapat\`" yazmalısın.**`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`Artık biri **SA** diyince cevap vermeyecek!`)

  }
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["saas-ayarla"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "sa-as",
  description: "saas-ayarla",
  usage: "saas-ayarla"
}; 