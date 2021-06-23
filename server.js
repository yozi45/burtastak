const Discord = require('discord.js')
const client = new Discord.Client()
const ayarlar = require('./ayarlar.json')
const fs = require('fs')
const { join } = require('path')

var prefix = ayarlar.prefix;
const { Player } = require("discord-music-player")
const player = new Player(client)
client.player = player;
client.commands = new Discord.Collection();



client.on("error", console.error);
const commandFiles = fs.readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command);
}

client.on("error", console.error);
client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/);

      const command = args.shift().toLocaleLowerCase();

      if(!client.commands.has(command)) return;


      try {
          client.commands.get(command).run(client, message, args);

      } catch (error){
          console.error(error);
      }
  }
});

client.on('ready', () => {
  console.log(`${client.user.tag} adlı bot Aktif`)
  const durumlar = [
    "müzik botu altyapısı",
    "Ghost Creative"
  ];
   setInterval(function () {
    let durum = durumlar[Math.floor(Math.random()*durumlar.length)]
    client.user.setActivity(durum)
  }, 10000)
    client.user.setStatus('online');
});

client.on('message', async msg => {
  if (msg.content.toLocaleLowerCase() === prefix + 'yardım'){
    const embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag} Müzik Botu Yardım Menüsü`)
    .addField(`${prefix}play`, 'Müzik Çalar')
    .addField(`${prefix}çal`, 'Müzik Çalar')
    .addField(`${prefix}oynat`, 'Müzik Çalar')
    .addField(`${prefix}p`, 'Müzik Çalar')
    .addField(`${prefix}ses`, 'ses seviyesini ayarlar')
    .addField(`${prefix}ping`, 'Botun Pingini Gösterir')
    .addField(`${prefix}pause`, 'Müziği Durdurur')
    .addField(`${prefix}resume`, 'Müziği İlerletir')
    .addField(`${prefix}geç`, 'Müziği Geçip Sıradaki Şarkıyı Açar')
    .addField(`${prefix}döngü`, 'Müziği Döngüler')
    .addField(`${prefix}kuyruk`, 'Sunucu Şarkı Listesini Gösterir')
    .addField(`${prefix}kuyruğu-temizle`, 'Sunucu Şarkı Listesini Sıfırlar')
    .addField(`${prefix}disconnected`, 'Botu Sesli Kanaldan Çıkarır')
    msg.channel.send(embed)
  }
})





client.login(process.env.TOKEN)