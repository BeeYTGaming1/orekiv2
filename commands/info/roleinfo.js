const { MessageEmbed } = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
        name: 'roleinfo',
        description: "Cho bạn thông tin về vai trò",
        usage: "roleinfo <role mention/role id>",
        aliases: ['rinfo', 'rolei'],
    run: async (bot, message, args) => {
        if (!args[0]) return message.channel.send("**Hãy đề cập đến một vai trò**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("**Hãy đề cập đến một vai trò**");

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor(colors.uptime)
            .setTitle(`Role Info: \`[  ${role.name}  ]\``)
            .setThumbnail(message.guild.iconURL())
            .addField("**ID**", `\`${role.id}\``, true)
            .addField("**Tên**", role.name, true)
            .addField("**Màu**", role.hexColor, true)
            .addField("**Thành viên**", role.members.size, true)
            .addField("**Chức vụ**", role.position, true)
            .addField("**Hỗ trợ**", status[role.mentionable], true)
            .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
            .setTimestamp()

        message.channel.send({embeds: [roleembed]});
    }
}


/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */