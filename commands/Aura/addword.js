const Discord = require('discord.js');
const db = require('quick.db');
const colors = require('./../../colors.json')
module.exports = {
    name: 'addword',
    cooldown: 5,  
    permissions: 'ADMINISTRATOR',
    description: 'Add a word to the word-list.',
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_GUILD")) return;
        const guildicon = message.guild.iconURL();
        let anitswear = db.get(`anitbadwords_${message.guild.id}`);
        let word = args.slice(0).join(' ');
        if (!word) {
            let missingargs = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
                .setDescription(`**Sử dụng\naddword (word)\nVí dụ:\naddword fuck**`)
                .setColor(colors.uptime)
            return message.channel.send({embeds: [missingargs]});
        }
        if (anitswear && anitswear.find((find) => find.swearword == word)) {
            let exist = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
                .setDescription(`**${word} đã có trong danh sách đen**`)
                .setColor(colors.uptime)
            return message.channel.send({embeds: [exist]});
        }
        let data = {
            swearword: word,
            author: message.author.tag,
        };
        db.push(`anitbadwords_${message.guild.id}`, data);
        console.log(data)
        let added = new Discord.MessageEmbed().setColor(colors.uptime).setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`).setDescription(`**${word}** Đã được thêm vô danh sách đen ✅`);
        return message.channel.send({embeds: [added]});
    },
};

/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */