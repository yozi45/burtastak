const Discord = require("discord.js");
const got = require("got");

module.exports.run = async (bot, message, args) => {
  if (!message.guild) return;
  const embed = new Discord.MessageEmbed();
  got("https://www.reddit.com/r/burdurland/random/.json")
    .then(response => {
      const [list] = JSON.parse(response.body);
      const [post] = list.data.children;

      const permalink = post.data.permalink;
      const memeUrl = `https://reddit.com${permalink}`;
      const memeImage = post.data.url;
      const memeTitle = post.data.title;
      const memeUpvotes = post.data.ups;
      const memeNumComments = post.data.num_comments;
      const ödül = post.data.total_awards_received;
      const votes = "Beğeni ";
      embed.setTitle(`${memeTitle}`);
      embed.setURL(`${memeUrl}`);
      embed.setColor("RANDOM");
      embed.setImage(`${memeImage}`);
      embed.setFooter(
        `👍 ${memeUpvotes} ${votes} 💬 ${memeNumComments} Yorum 🏆 ${ödül} Ödül Var.`
      );

      message.channel.send(embed);
    })
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pls-meme"],
  permLevel: 0
};

exports.help = {
  name: "plsmeme",
  description: "İstediğiniz yaziyi yaz",
  usage: "prefix yaz yazı"
};
