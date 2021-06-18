const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", () => {
    console.log(`${client.user.username}` + " is online");
});

client.on("ready", () => {
    client.user.setActivity(`Muck`, { type: `PLAYING`});
});

client.on("message", message =>{
    if (!message.author.bot) {
        const muck = message.content === "muck" || message.content === "Muck" || message.content === "mUck" || message.content === "muCk" || message.content === "mucK" || message.content === "mUCK" || message.content === "MuCK" || message.content === "MUcK" || message.content === "MUCk" || message.content === "MUck" || message.content === "mUCk" || message.content === "muCK" || message.content === "MucK"
        const MUCK = message.content === "MUCK"
        if (muck) {
            message.channel.send("muck");
        } else if (MUCK) {
            message.channel.send("MUCK");
        }
    }
})



client.login(process.env.token);