const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`);
  console.log(`• Komutlar Başarıyla Yüklendi!`);
  console.log(`• Discorda Başarıyla Bağlandı!`);
  client.user.setStatus("idle"); /// ("") kısmı (online - dnd - idle) gibi değiştirilebilir.
  client.user.setActivity("LordMadisus => ?yardım", { type: "PLAYING" }); //// type kısmı (WATCHING - PLAYING - LISTENING) gibi değiştirilebilir.
  console.log(`• Oynuyor Başarıyla Ayarlandı!`);
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}]`);
};
