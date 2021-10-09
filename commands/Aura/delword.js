const Discord = require('discord.js');
const db = require('quick.db');
const colors = require('./../../colors.json')

module.exports = {
  name: 'delword',
  cooldown: 5, 
  description: 'Remove a word from the word-list.',
    run: async (client, message, args) => {
        if (!message.member.permissions.has("MANAGE_GUILD")) return;
        const guildicon = message.guild.iconURL();

        let word = args.slice(0).join(' ');
        if (!word) {
            let embed = new Discord.MessageEmbed()
                
                .setDescription(`**Sử dụng\ndelword(word)\nVí dụ:\ndelword fuck**`)
                .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
                return message.channel.send({embeds: [embed]});
        }
        let database = db.get(`anitbadwords_${message.guild.id}`);

        if (database) {
            let data = database.find((x) => x.swearword === word.toLowerCase());
            let unabletofind = new Discord.MessageEmbed()
                
                .setDescription(`**Tôi không thể tìm thấy từ đó trong danh sách đen!*`)
                .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)

            if (!data) return message.channel.send({embeds: [unabletofind]});

            let value = database.indexOf(data);
            delete database[value];

            var filter = database.filter((x) => {
                return x != null && x != '';
            });

            db.set(`anitbadwords_${message.guild.id}`, filter);
            let deleted = new Discord.MessageEmbed()
                
                .setDescription(`**Xóa bỏ ${word} khỏi danh sách đen** `)
                .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)

            return message.channel.send({embeds: [deleted]});
        } else {
            let okelse = new Discord.MessageEmbed()
                
                .setDescription(`**Xin lỗi! Tôi không tìm thấy từ đó!**`)
                .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)

            return message.channel.send({embeds: [okelse]});
        }
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