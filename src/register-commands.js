require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'help',
        description: 'List of Commands',
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

rest.delete(Routes.applicationCommand(1168240045510107308, '1173111370791796737'))
	.then(() => console.log('Successfully deleted application command'))
	.catch(console.error);