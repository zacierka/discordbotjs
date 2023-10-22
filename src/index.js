const { Client, IntentsBitField } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => console.log('Ready!'));

client.on('message', (msg) => {
    console.log(msg.content);
    if (msg.author.bot) return;
    
    if (msg.content.startsWith('!ping')) {
        msg.channel.send('!gnip');
    }
});

client.login(process.env.TOKEN);

console.log(process.env);