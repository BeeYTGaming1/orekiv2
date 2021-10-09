const { Client, Collection } = require("discord.js");
require("dotenv").config();
const UrlsConfig = require("./database/models/UrlsConfig");
const fetchProjects = require("./fetchProjects");
const { timeout, disable_fetching } = require("./config.json");
const { GiveawaysManager } = require('discord-giveaways');
const { MessageEmbed } = require('discord.js');
const config = require("./config.json")
const disbut = require("discord-buttons");

const client = new Client({
    intents: 32767,
    disableEveryone: true
});
module.exports = client;
//


const manager = new GiveawaysManager(client, {
    storage: '../../giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});
client.giveawaysManager = manager;



// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(config.bottoken);
