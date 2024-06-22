require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const mongoose = require('mongoose');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildEmojisAndStickers
    ],
});

exports.client = client;

client.on('ready', async (c) => {

    const guilds = client.guilds.cache;
    const promiseArr = [];
    
    guilds.forEach(guild => {
        promiseArr.push(new Promise(async (resolve, _reject) => {
            var members = await guild.members.fetch();
            members = members.filter(m => !m.user.bot);
            resolve(members.size);
        }));
    });
    
    var results = await Promise.all(promiseArr);
    var totalUsers = results.reduce((prevVal, currVal) => prevVal + currVal);

let status = [
    {
        name: '$help',
        type: ActivityType.Playing
    },

    {
        name: `${totalUsers} users!`,
        type: ActivityType.Watching
    },

    {
        name: '$help',
        type: ActivityType.Playing
    },

    {
        name: `${totalUsers} users!`,
        type: ActivityType.Watching
    },

    {
        name: `${client.guilds.cache.size} servers!`,
        type: ActivityType.Watching
    }
]

    console.log(`${c.user.tag} is Online!`);
    
    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
    }, 10000);
});

//Keep at bottom.

(async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB.");


        client.login(process.env.TOKEN);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();