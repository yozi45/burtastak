const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
    if(args[0] !== "kapat"){
      var kanal = message.mentions.channels.first();
      if(!kanal) return message.reply("Kanalı ayarla **lütfen** veya kapatmak istiyorsanız `sayaç kapat` yazabilirsin")
      var sayı = args[1]
      if(!sayı) return message.reply("Sayacı kıçımdan mı tutucam sayı belirle")
      if(isNaN(sayı)) return message.reply("Kanka sayı gir dedik sayı **SAYI** HARF DEİL")
      if(sayı < message.guild.memberCount) return message.reply("Sunucun hedef sayaçtan daha büyük")
      qdb.set(`sayackanali_${message.guild.id}`, kanal.id)
      qdb.set(`sayachedef_${message.guild.id}`, sayı)
      return message.reply("Sayaçı ayarladım kanka!")
    }
    if(args[0] === "kapat"){
      qdb.delete(`sayackanali_${message.guild.id}`)
      qdb.delete(`sayachedef_${message.guild.id}`)
      return message.reply("Sıfırladım kanka")
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sayç"],
  permLevel: 0
};

exports.help = {
  name: "sayaç",
  description: "Mesaj Siler",
  usage: "sil <mesajSayısı>"
};