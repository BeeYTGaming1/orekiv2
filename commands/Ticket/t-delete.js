const colors = require('./../../colors.json')
module.exports = {
    name: 'tdelete',
    aliases: ['deltick'],
    description: 'Delete a specified ticket.',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        if (message.channel.name.includes('ticket-')) {
            message.channel.delete();
        }
        else {
            return message.reply('❌ you cannot use this command here. Please use this command when you want to delete a ticket.');
        }

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