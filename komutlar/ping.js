const Discord = require('discord.js')
exports.run = async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setImage(`https://falsiskremlin.sirv.com/resim_2020-11-28_113400.png?text.0.text=${client.ws.ping}+ms&text.0.position.x=-10%25&text.0.position.y=-25%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Play&watermark.0.image=%2FImages%2F784413323910709288.png&watermark.0.position.x=-35%25&watermark.0.scale.width=200&watermark.0.scale.height=200`)
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["p"],
    permLevel: 0
  }; //yarrrrrrrrrrrrrraaaaaaaaaaa


exports.help = {
    name: 'ping',
    description: '',
    category: ''
} 