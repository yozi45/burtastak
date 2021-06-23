const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/util.js');

exports.run = async (client, message, args) => {
  




  this.fighting = new Set();
  
        let opponent = message.mentions.users.first()
        if (!opponent) return message.reply(":negative_squared_cross_mark: Oynamak istediğin kişiyi etiketlemelisiniz.")
  
  if (opponent.bot) return message.reply(':negative_squared_cross_mark: Botlar ile düello yapamazsın dostum.');
  if (opponent.id === message.author.id) return message.reply(':-": Kendin ile düello atamazsın dostum.');
                if (this.fighting.has(message.channel.id)) return message.reply('Kanal sayısına göre savaş yapabilirsin.');
                this.fighting.add(message.channel.id);
                try {
                        if (!opponent.bot) {
                await message.channel.send(`${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
                                const verification = await verify(message.channel, opponent);
                                if (!verification) {
                                        this.fighting.delete(message.channel.id);
                                        return message.channel.send(`:negative_squared_cross_mark:  Düello kabul edilmedi...`);
                                }
                        }
                        let userHP = 500;
                        let oppoHP = 500;
                        let userTurn = false;
                        let guard = false;
                        const reset = (changeGuard = true) => {
                                userTurn = !userTurn;
                                if (changeGuard && guard) guard = false;
                        };
                        const dealDamage = damage => {
                                if (userTurn) oppoHP -= damage;
                                else userHP -= damage;
                        };
                        const forfeit = () => {
                                if (userTurn) userHP = 0;
                                else oppoHP = 0;
                        };
                        while (userHP > 0 && oppoHP > 0) {
                                const user = userTurn ? message.author : opponent;
                                let choice;
                                if (!opponent.bot || (opponent.bot && userTurn)) {
                                        await message.channel.send(stripIndents`
                                                ${user}, ne yapmak istersin? \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
                                                **${message.author.username}**: ${userHP} :heartpulse:
                                                **${opponent.username}**: ${oppoHP} :heartpulse:
                                        `);
                                        const filter = res =>
                                                res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
                                        const turn = await message.channel.awaitMessages(filter, {
                                                max: 1,
                                                time: 700000
                                        });
                                        if (!turn.size) {
                                                await message.reply(`Üzgünüm ama, süre doldu!`);
                                                reset();
                                                continue;
                                        }
                                        choice = turn.first().content.toLowerCase();
                                } else {
                                        const choices = ['saldır', 'savun', 'ultra güç'];
                                        choice = choices[Math.floor(Math.random() * choices.length)];
                                }
                                if (choice === 'saldır') {
                                        const damage = Math.floor(Math.random() * (guard ? 10 : 100)) + 1;
                                        await message.channel.send(`${user}, yumruğu ile **${damage}** hasar vurdu!`);
                                        dealDamage(damage);
                                        reset();
                                } else if (choice === 'savun') {
                                        await message.channel.send(`${user}, kendisini Aegis Kalkanı ile savundu!`);
                                        guard = true;
                                        reset(false);
                                } else if (choice === 'ultra güç') {
                                        const miss = Math.floor(Math.random() * 4);
                                        if (!miss) {
                                                const damage = randomRange(100, guard ? 150 : 300);
                                                await message.channel.send(`${user}, Bütün **lordların** yardımı ile  **${damage}** hasar vurdun!!`);
                                                dealDamage(damage);
                                        } else {
                                                await message.channel.send(`${user},  ultra güç henüz dolmadığı için ultra atamadı`);
                                        }
                                        reset();
                                } else if (choice === 'kaç') {
                                        await message.channel.send(`${user}, Kaçtı!`);
                                        forfeit();
                                        break;
                                } else {
                                        await message.reply('Ne yapmak istediğini anlamadım.');
                                }
                        }
                        this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
                        return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
                } catch (err) {
                        this.fighting.delete(message.channel.id);
                        throw err;
                }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş'],
	permLevel: 0

};

exports.help = {
  name: 'düello',
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};