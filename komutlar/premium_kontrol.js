const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
let plasmic = await db.fetch(`premod_${message.author.id}`)
    let pre = await db.fetch(`premod_${message.author.id}`) 
  let preYazi;
  if (pre == null) preYazi = 'Premiumun aktif değil.'
  if (pre == 'aktif') preYazi = ' Premiumun aktif.'
  if (pre == 'deaktif') preYazi = 'Premiumun aktif değil. '
  const niga = new Discord.MessageEmbed()
  .setTitle('Premium Kontrol')
  .setColor("RANDOM")
  .setDescription(preYazi)
  message.channel.send(niga)
  }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'pre-kontrol',
    description: 'Premium Kontrol Eder.',
    usage: 'premium-kontrol'
}