const { ForgeClient } = require("@tryforge/forgescript")

const client = new ForgeClient({
    intents: [
        "GuildMessages",
        "Guilds",
        "MessageContent"
    ],
    events: [
        "messageCreate",
        "clientReady"
    ],
    prefixes:[
        "!"
    ]
})
client.commands.load("src/client")
client.applicationCommands.load("src/slash")
client.events.load("src/events")

client.login("YOUR_BOT_TOKEN")