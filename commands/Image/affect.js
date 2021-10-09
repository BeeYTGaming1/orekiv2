const Discord = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  aliases: 'minecraft',
  

  run: async (client, message, args) => {
    const text = args.join("+");
    if(!text) return message.channel.send("**Hãy cho một thành tựu nào!**")
  const r = Math.floor(Math.random() * (30 - 0 + 1) + 0);
    const images = [`https://minecraftskinstealer.com/achievement/${r}/Achievement+Unlocked!!%21/${text}`, `https://minecraftskinstealer.com/achievement/${r}/Achievement+Unlocked!!%21/${text}`]

    const randomElement = images[Math.floor(Math.random()*images .length)];

    const a = new Discord.MessageEmbed()
    .setTitle('Chúc mừng bạn đã được thành tựu')
    .setImage(randomElement)
    .setColor("RANDOM")
    message.channel.send({ embeds: [a] })
  },
};