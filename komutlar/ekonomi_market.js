const Discord = require('discord.js');
const ms = require('parse-ms');
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
                     .setTitle( "**MARKET**" )
                     .addField("__TÜFEK__", "?avlan komutunu kullanmak için gereklidir  **50000** *TL*")
                    .addField("__OLTA__", "?balıktut komutunu kullanmak için gereklidir  **50000** *TL*")
                     .addField("__BALTA__", "?ağaçkes komutunu kullanmak için gereklidir  **50000** *TL*")
                     .addField("__BODYGUARD__", "sizden para çalmaya çalışanlardan sizi korur  **100000** *TL*")
                       .addField("__ALTIN TOP__", "hiç bir işe yaramaz sadece çok zengin olduğunuzu kanıtlar  **500000** *TL*")
                     .addField("Satın almak için;", "**?marketal** yazabilirsin lütfen eşya adlarını küçük ve bitişik yaz")
                     .addField("Eşyalarınıza bakmak için;", "**?envanter** yazabilirsin")
                     
                    )
}
exports.conf = {
  enabled: true,
  aliases: ["dükkan", "shop"],
};
exports.help = {
  name: 'market'
};