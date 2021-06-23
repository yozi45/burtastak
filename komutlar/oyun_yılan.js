const Discord = require('discord.js')
const GameCord = require('gamecord-fork').djs
const db = require('quick.db')

 exports.run = async (client, message, args) => {
if(!args[0]) return message.channel.send("Lütfen bir oyun belirt `yılan, hedef4, quiz, guessgame` *Değerli kullanıcı quiz ve guessgame oyunları kullandığımız modülden dolayı ingilizcedir*")
   if(args[0] === "yılan"){
    new GameCord.SnakeGame(message)
        .setTitle('Yılan Oyunu')
        .setColor('GOLD')
        .setTime(60000) // Always better to set max time because the default one is just 5s
                .run()}
    if(args[0] === "hedef4"){
   new GameCord.ConnectFour(message)
 // Always better to set max time because the default one is just 5s
    .run()  }
    if(args[0] === "quiz"){
      new GameCord.Quiz(message)
        .setTitle('Quiz')
        .setColor('GOLD')
        .setTime(20000) // Set time
        .on('start', game => console.log(game.item.answers)) // Start event also exists
        .run()
    }
    if(args[0] === "guessgame"){
   new GameCord.GuessGame(message)
 // Always better to set max time because the default one is just 5s
    .run()  }
   

} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['oyna'],
    permLevel: 0
  };
   
  exports.help = {
    name: "oyun",
    description: "Bot i",
    usage: "istatistik"
  };


