require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'help',
        description: 'List of Commands',
    },

    {
        name: 'kingbot',
        description: 'Bot Information',
    },
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