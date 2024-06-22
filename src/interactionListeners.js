const Count = require('./schemas/global');
const { randomJokeList, randomLongJokeList, randomFactList, randomAriQuoteList } = require('./constants');
const { client } = require('.');

//Informational Slash Commands Listeners
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'help') {
        return interaction.reply('**List of commands:** \n\n**Information/Management** \n($)help = List of Commands \n($)kingbot = Bot Information \n($)ping = Bot Latency \n($)uptime = Bot Uptime \n($)version = Bot Version \n($)links = Bot Links \n\n**Entertainment** \n($)joke = Responds with a Random Joke \n($)longjoke = Responds with a Random Long Joke \n($)fact = Responds with a Random Fact \n($)ari = Responds with a Random Ari Quote \n\n**Media** \n($)img = Sends an image in the server \n($)movie = Watch a movie in the server \n($)classmeme = Sends a class meme in the server \n\n**Miscellaneous** \n($)vote = Upvote the bot on Top.gg \n($)count = Adds 1 to the Count');
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'kingbot') {
        return interaction.reply(`Hello. My name is KingBot, and I was a multipurpose Discord Bot created by Ari Khan. My main features are currently entertainment and media sharing. I am currently in active development. If you want information about the bot or have suggestions, please contact our lead developer, Ari Khan (<@786745378212282368>).`);
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        return interaction.reply(`Server Latency is **${Date.now() - interaction.createdTimestamp}ms**.`);
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'uptime') {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        return interaction.reply(`The bot has been online for ${days} ${days === 1 ? 'day' : 'days'}, ${hours} ${hours === 1 ? 'hour' : 'hours'}, ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} and ${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'version') {
        return interaction.reply('**Bot Version** \nThe following are all the versions of KingBot and its dependencies. \n\n**KingBot Version** \n1.3.8.7.5 \n\n**Discord.js Version** \n14.15.3 \n\n**NPM Version** \n10.8.1 \n\n**Node.js Version** \n20.10.0 \n\n**Node_Fetch Version** \n2.7.0 \n\n**DOTENV Version** \n16.4.5');
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'links') {
        return interaction.reply('**Top.gg:** \nhttps://top.gg/bot/1168240045510107308 \n**GitHub Repository:** \nhttps://github.com/Proking4444/KingBot');
    }
});
//Entertainment Slash Command Listeners
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'joke') {
        const random = Math.floor(Math.random() * randomJokeList.length);
        return interaction.reply(randomJokeList[random]);
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'longjoke') {
        const random = Math.floor(Math.random() * randomLongJokeList.length);
        return interaction.reply(randomLongJokeList[random]);
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'fact') {
        const random = Math.floor(Math.random() * randomFactList.length);
        return interaction.reply(randomFactList[random]);
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ari') {
        const random = Math.floor(Math.random() * randomAriQuoteList.length);
        return interaction.reply(randomAriQuoteList[random]);
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'img') {
        return interaction.reply('**Sending Images** \nPlease use $img (code) (number) to send an image. \n\n**Image Codes** \n- Desert (0)');
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'movie') {
        return interaction.reply('**Watching Movies** \nPlease use $movie (code) to watch a movie. \n\n**Movie Codes:** \nBoehlke 2024 \n- 2 Guys Who Got Brutally Unalived (2GWGBU) \n- Destined With You (DWY) \n- Fixing Good (FG) \n- Khan Artist (KA) \n- The Circle Of Life (TCOL) \n- The First Victim (TFV) \n\nBoehlke 2023 \n- Happy Little Accidents (HLA) \n- King\'s Crypt (KC) \n- Monkey Murder (MM) \n- Mount Foreverrest (MF) \n- The Wild Jeffois (TWJ) \n- Thirst For Clout (TFC) \n\nDeluca 2024 \n- 90 Days of Different (90DOD) \n- Ella vs Sohpie (Gun Version) (EVSGV) \n- Graffiti Day (GD) \n- Paint Ballistic (PB) \n- Sophie and Ella Travel the World (SAETTW) \n- The Mask (TM) \n- Thomas, Baron, Alice (TBA) \n\nGibson 2024 \n- 90 Days of Different: Day 40 (90DODD40) \n- A Ruff Day (ARD) \n- The Horror Movie (THM) \n- Epic Ice Cream Movie (EICM) \n- Every Fast Food Worker\'s Dream (EFFWD) \n- Slay 49 (S49) \n- Snowy Paintball Fight (SPF)');
    }
});
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'classmeme') {
        return interaction.reply('**Sending Class Memes** \nPlease use $classmeme (number) to send a meme.');
    }
});
//Miscellaneous Slash Command Listeners
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'vote') {
        return interaction.reply('**If you\'re enjoying KingBot, please consider upvoting the bot and leaving a positive review on Top.gg!** \nVote: https://top.gg/bot/1168240045510107308/vote \nReview: https://top.gg/bot/1168240045510107308#reviews \nBot Page: https://top.gg/bot/1168240045510107308');
    }
});
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'count') {
        // Find the count document, create if it doesn't exist
        let countDoc = await Count.findOne();
        if (!countDoc) {
            countDoc = new Count({ value: 0 });
        }

        // Increment the count and save
        countDoc.value += 1;
        await countDoc.save();

        return interaction.reply(`The count is now ${countDoc.value}.`);
    }
});
