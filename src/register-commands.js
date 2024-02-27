require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'kingbot',
        description: 'Bot Information',
    },

    {
        name: 'ping',
        description: 'Bot Latency',
    },

    {
        name: 'uptime',
        description: 'Bot Uptime',
    },

    {
        name: 'joke',
        description: 'Responds with a Random Joke',
    },

    {
        name: 'longjoke',
        description: 'Responds with a Random Long Joke',
    },

    {
        name: 'fact',
        description: 'Responds with a Random Fact',
    },

    {
        name: 'ari',
        description: 'Responds with a Random Ari Quote',
    }
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

    await rest.put(
        Routes.applicationCommands(
            process.env.CLIENT_ID
        ),
      { body: commands },
    );

    console.log('Slash commands were registered successfully!');
    } catch (error) {
    console.log(`There was an error: ${error}`);
    }
})();