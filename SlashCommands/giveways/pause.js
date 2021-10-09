const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'unpause',
    description: 'unpause a Giveaway!',
    options: [
        {
          name: "message_id",
          type: "STRING",
          description: "thời gian diễn ra",
          required: true,
        },
      ],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run : async(client, interaction, args) => {
        const messageId = interaction.options.getString('message_id');
        client.giveawaysManager.unpause(messageId).then(() => {
            interaction.channel.send('Hoàn tất | Giveaway đã được tạm ngưng');
        }).catch((err) => {
            interaction.channel.send(`Có một vài lỗi! Hãy thử lại.\n\`${err}\``);
        });
    }
}