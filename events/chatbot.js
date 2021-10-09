const Discord = require('discord.js');
const db = require("quick.db");
const client = require('../index')
const axios = require('axios')

client.on("messageCreate", async message => {
  const chatchannel = db.get(`chatchannel_${message.guild.id}`)
  if(message.channel.id === `${chatchannel}` &&
   !message.author.bot) { 
    const res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(message.content)}&lc=vn&cf=true`)
    return message.send(res.data.messages[0].response)
   }
  })