const { GiveawaysManager } = require('discord-giveaways');
const client = require("../../index")


const { MessageEmbed, CommandInteraction } = require('discord.js');
const ms = require('ms')
module.exports ={
    name: 'start',
    description: 'Start a Giveaway!',
    options: [
        {
          name: "duration",
          type: "STRING",
          description: "thời gian diễn ra",
          required: true,
        },
        
        {
            name: "winners",
            type: "INTEGER",
            description: "người được giải",
            required: true,
        },
        {
            name: "prize",
            type: "STRING",
            description: "giải thưởng",
            required: true,
        },
      ],
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run : async(client, interaction, args) => {
        const duration = interaction.options.getString('duration');
        const winnerCount = interaction.options.getInteger('winners');
        const prize = interaction.options.getString('prize');

        client.giveawaysManager.start(interaction.channel, {
            duration: ms(duration),
            winnerCount,
            prize,
        }).then((gData) => {
            console.log(gData); // {...} (messageId, end date and more)
        })
    }
}