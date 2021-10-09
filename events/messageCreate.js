const client = require("../index");
const config = require("../config.json")
const db = require("quick.db")
client.on("messageCreate", async (message) => {
//black list word
let database = db.get(`anitbadwords_${message.guild.id}`);
    database.forEach((m) => {
        // array.push(`**Từ khóa: ${m.swearword} | Thêm bởi: ${m.author} ✅**`);
        if(message.content === m.swearword) return message.delete().then (message.author.send("Từ này vi phạm danh sách đen"))
    });
//set prefix
let blacklist = await db.fetch(`blacklist_${message.guild.id}`);

    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(config.default_prefix) ||
        message.author.id === blacklist
    )
        return;






    const [cmd, ...args] = message.content
        .slice(config.default_prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
});
