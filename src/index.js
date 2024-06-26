require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

const mongoose = require('mongoose');

const Count = require('./schemas/global');

const User = require('./schemas/users');

const yahooFinance = require('yahoo-finance2').default;

//Update this line every time a new embed is added
const { MojaveDesertImage1, MojaveDesertImage2, MojaveDesertImage3, MojaveDesertImage4, MojaveDesertImage5, MojaveDesertImage6, MojaveDesertImage7, MojaveDesertImage8, MojaveDesertImage9, MojaveDesertImage10 } = require('./constants');

//Update this line every time a new class meme is added
const { ClassMeme1, ClassMeme2, ClassMeme3, ClassMeme4, ClassMeme5, ClassMeme6, ClassMeme7, ClassMeme8, ClassMeme9, ClassMeme10, ClassMeme11, ClassMeme12, ClassMeme13, ClassMeme14, ClassMeme15, ClassMeme16, ClassMeme17, ClassMeme18, ClassMeme19, ClassMeme20, ClassMeme21, ClassMeme22, ClassMeme23, ClassMeme24, ClassMeme25, ClassMeme26, ClassMeme27, ClassMeme28, ClassMeme29, ClassMeme30, ClassMeme31, ClassMeme32, ClassMeme33, ClassMeme34, ClassMeme35, ClassMeme36, ClassMeme37, ClassMeme38, ClassMeme39, ClassMeme40 } = require('./constants');

//Update this line every time a new list is added
const { randomJokeList, randomLongJokeList, randomFactList, randomAriQuoteList } = require('./constants');

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

client.on('ready', async (c) => {
   
    const guilds = client.guilds.cache;
    const promiseArr = [];
    
    guilds.forEach(guild => {
        promiseArr.push(new Promise(async (resolve, _reject) => {
            let members = await guild.members.fetch();
            members = members.filter(m => !m.user.bot);
            resolve(members.size);
        }));
    });
    
    let results = await Promise.all(promiseArr);
    let totalUsers = results.reduce((prevVal, currVal) => prevVal + currVal);

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

//Information/Management

client.on('messageCreate', (message) => {
    if (message.content === '$help') {
        message.reply('**List of commands:** \n\n**Information/Management** \n($)help = List of Commands \n($)kingbot = Bot Information \n($)ping = Bot Latency \n($)uptime = Bot Uptime \n($)version = Bot Version \n($)links = Bot Links \n($)topgg = Check out the bot\'s top.gg page \n\n**Entertainment** \n($)joke = Responds with a Random Joke \n($)longjoke = Responds with a Random Long Joke \n($)fact = Responds with a Random Fact \n($)ari = Responds with a Random Ari Quote \n\n**Economy** \n($)start = Create a KingBot account \n($)bal = Check the balance of yourself or another user \n($)daily = Claim your daily salary \n($)claim = Claim your hourly salary \n($)vote = Claim your top.gg upvote reward \n($)coinflip = Bet money on a coin flip \n($)pay = Transfer funds to another user \n($)leaderboard = View the global leaderboard \n\n**Media** \n($)img = Sends an image in the server \n($)movie = Watch a movie in the server \n($)classmeme = Sends a class meme in the server \n\n**Miscellaneous** \n($)count = Adds 1 to the Count');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$kingbot') {
        message.reply(`Hello. My name is KingBot, and I was a multipurpose Discord Bot created by Ari Khan. My main features are currently entertainment and media sharing. I am currently in active development. If you want information about the bot or have suggestions, please contact our lead developer, Ari Khan (<@786745378212282368>).`);
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$ping') {
        message.reply(`Server Latency is **${Date.now() - message.createdTimestamp}ms**.`);
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$uptime') {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        message.reply(`The bot has been online for ${days} ${days === 1 ? 'day' : 'days'}, ${hours} ${hours === 1 ? 'hour' : 'hours'}, ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} and ${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$version') {
        message.reply('**Bot Version** \nThe following are all the versions of KingBot and its dependencies. \n\n**KingBot Version** \n1.4.9.8.5 \n\n**Discord.js Version** \n14.15.3 \n\n**NPM Version** \n10.8.1 \n\n**Node.js Version** \n20.10.0 \n\n**Node_Fetch Version** \n2.7.0 \n\n**DOTENV Version** \n16.4.5 \n\n**Nodemon Version** \n3.1.4');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$links') {
        message.reply('**Top.gg:** \nhttps://top.gg/bot/1168240045510107308 \n**GitHub Repository:** \nhttps://github.com/Proking4444/KingBot');
    }
});

//Entertainment

client.on('messageCreate', (message) => {
    if (message.content === '$joke') {
        const random = Math.floor(Math.random() * randomJokeList.length);
        message.reply(randomJokeList[random]);
    }
});
    
client.on('messageCreate', (message) => {
    if (message.content === '$longjoke') {
        const random = Math.floor(Math.random() * randomLongJokeList.length);
        message.reply(randomLongJokeList[random]);
    }
});
    
client.on('messageCreate', (message) => {
    if (message.content === '$fact') {
        const random = Math.floor(Math.random() * randomFactList.length);
        message.reply(randomFactList[random]);
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$ari') {
        const random = Math.floor(Math.random() * randomAriQuoteList.length);
        message.reply(randomAriQuoteList[random]);
    }
});

//Economy

client.on('messageCreate', async message => {
    if (message.content === '$start') {
        let user = await User.findOne({ discordId: message.author.id });

        if (user) {
            message.reply('You already have an account.');
        } else {
            user = await User.create({
                discordId: message.author.id,
                username: message.author.username,
                balance: 0,
                lastDailyCollected: null
            });

            message.reply('Your account has been created.');
        }
    }
});

client.on('messageCreate', async message => {
    if (message.content === '$daily') {
        let user = await User.findOne({ discordId: message.author.id });

        if (!user) {
            message.reply('You need to create an account first with `$start`.');
            return;
        }

        const now = new Date();
        const nextDaily = new Date(user.lastDailyCollected);
        nextDaily.setHours(nextDaily.getHours() + 12); // Next daily is 12 hours after last collected time

        if (user.lastDailyCollected && now < nextDaily) {
            const timeUntilNextDaily = nextDaily - now;
            const hours = Math.floor((timeUntilNextDaily / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeUntilNextDaily / (1000 * 60)) % 60);
            const seconds = Math.floor((timeUntilNextDaily / 1000) % 60);

            message.reply(`You have already collected your daily salary. Next daily available in ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);
        } else {
            user.balance += 100; // Example: Add daily reward to balance
            user.lastDailyCollected = now;
            await user.save();

            message.reply('You have collected your daily salary of $100.');
        }
    }
});

client.on('messageCreate', async message => {
    if (message.content === '$claim') {
        let user = await User.findOne({ discordId: message.author.id });

        if (!user) {
            message.reply('You need to create an account first with `$start`.');
            return;
        }

        const now = new Date();
        const nextClaim = new Date(user.lastClaimCollected);
        nextClaim.setHours(nextClaim.getHours() + 1);

        if (user.lastClaimCollected && now < nextClaim) {
            const timeUntilNextClaim = nextClaim - now;
            const minutes = Math.floor((timeUntilNextClaim / (1000 * 60)) % 60);
            const seconds = Math.floor((timeUntilNextClaim / 1000) % 60);

            message.reply(`You have already collected your hourly salary. Next claim available in ${minutes} minutes and ${seconds} seconds.`);
        } else {
            user.balance += 10;
            user.lastClaimCollected = now;
            await user.save();

            message.reply('You have collected your hourly salary of $10.');
        }
    }
});

client.on('messageCreate', async message => {
    if (message.content.startsWith('$bal') || message.content.startsWith('$balance')) {
        let args = message.content.split(' ');

        if (args.length < 2) {
            await checkSelfBalance(message);
        } else {
            let userId = resolveUser(args[1], message);
            if (userId) {
                await checkBalance(userId, message);
            } else {
                message.reply('That user was not found.');
            }
        }
    }
});

client.on('messageCreate', async message => {
    if (message.content.startsWith('$coinflip')) {
        let args = message.content.split(' ');

        if (args.length < 3) {
            message.reply('Please use `$coinflip (bet amount) (choice)` (heads or tails) to place a bet.');
            return;
        }

        let betAmount = parseInt(args[1], 10);
        let choice = args[2].toLowerCase();

        if (isNaN(betAmount) || betAmount <= 0) {
            message.reply('Please enter a valid bet amount.');
            return;
        }

        if (!['heads', 'tails'].includes(choice)) {
            message.reply('Please choose either heads or tails.');
            return;
        }

        let user = await User.findOne({ discordId: message.author.id });

        if (!user) {
            message.reply('You need to create an account first with $start.');
            return;
        }

        if (user.balance < betAmount) {
            message.reply('You do not have enough balance to place this bet.');
            return;
        }

        let coinFlip = Math.random() < 0.5;

        let resultMessage;
        if (coinFlip && choice === 'heads' || !coinFlip && choice === 'tails') {
            user.balance += betAmount;
            resultMessage = `**You won!** \nThe coin landed on ${coinFlip ? 'heads' : 'tails'}. Your new balance is $${user.balance}.\n${coinFlip ? 'https://i.postimg.cc/mgT7F3qb/heads.png' : 'https://i.postimg.cc/bwLk0Dc1/tails.png'}`;
        } else {
            user.balance -= betAmount;
            resultMessage = `**You lost!** \nThe coin landed on ${coinFlip ? 'heads' : 'tails'}. Your new balance is $${user.balance}.\n${coinFlip ? 'https://i.postimg.cc/mgT7F3qb/heads.png' : 'https://i.postimg.cc/bwLk0Dc1/tails.png'}`;
        }

        message.reply(resultMessage);

        await user.save();
    }
});

client.on('messageCreate', async message => {
    if (message.content === '$vote') {
        let user = await User.findOne({ discordId: message.author.id });

        if (!user) {
            message.reply('You need to create an account first with `$start`.');
            return;
        }

        const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjExNjgyNDAwNDU1MTAxMDczMDgiLCJib3QiOnRydWUsImlhdCI6MTcxOTY5Nzk3MX0.TmH_z6isFKD2Oecg5xDliFUnvw_-_D4eAzn_tUobCsY";
        const botId = "1168240045510107308";

        const response = await fetch(`https://top.gg/api/bots/${botId}/check?userId=${message.author.id}`, {
            headers: { Authorization: apiKey }
        });

        const data = await response.json();

        if (data.voted === 1) {
            const cooldownDuration = 12 * 60 * 60 * 1000;
            const now = new Date();
            
            if (!user.lastVoteTimestamp || now - user.lastVoteTimestamp >= cooldownDuration) {
                // Update user's balance
                user.balance += 500;
                user.lastVoteTimestamp = now;
                await user.save();

                message.reply(`Thank you for voting! A $500 reward has been added to your account.`);
            } else {
                const remainingTime = new Date(user.lastVoteTimestamp.getTime() + cooldownDuration - now.getTime());
                const hours = remainingTime.getUTCHours();
                const minutes = remainingTime.getUTCMinutes();
                const seconds = remainingTime.getUTCSeconds();

                message.reply(`You have already voted recently. Please wait ${hours} hours, ${minutes} minutes, and ${seconds} seconds to claim your next reward.`);
            }        } else if (data.voted === 0) {
            message.reply('You haven\'t voted yet. Please vote for the bot at https://top.gg/bot/1168240045510107308/vote.');
        } else {
            message.reply('Unexpected response from Top.gg. Please try again later.');
        }
    }
});

client.on('messageCreate', async message => {
    if (message.content.startsWith('$pay')) {
        const args = message.content.split(' ').slice(1);

        handlePayCommand(message, args);
    }
});

client.on('messageCreate', async message => {
    if (message.content === '$leaderboard') {
        const leaderboard = await getBalanceLeaderboard();
        message.reply('**Global Leaderboard:** \n' + leaderboard);
    }
});

//Stocks
//Handle $buy command
client.on('messageCreate', async message => {
    if (message.content.startsWith('$buy')) {
        const args = message.content.slice(4).trim().split(/ +/);

        if (args.length < 2) {
            return message.reply('Please use `$buy (symbol) (amount)` to purchase stocks.');
        }

        const symbol = args[0].toUpperCase();
        const amount = parseFloat(args[1]);

        const price = await fetchStockPrice(symbol);

        if (!price) {
            return message.reply('Invalid symbol or error fetching data.');
        }

        try {
            const user = await User.findOne({ discordId: message.author.id });

            if (!user) {
                return message.reply('You need to create an account first with `$start`.');
            }

            if (user.balance < price * amount) {
                return message.reply('Insufficient balance.');
            }

            // Update user's balance
            user.balance -= price * amount;

            // Check if stock already exists in user's portfolio
            const existingStockIndex = user.stocks.findIndex(stock => stock.symbol === symbol);

            if (existingStockIndex >= 0) {
                // Update existing stock entry
                const existingStock = user.stocks[existingStockIndex];
                existingStock.amount += amount;
                existingStock.currentPrice = price; // Update current price
                existingStock.currentTotalValue = existingStock.amount * price; // Update current total value

                // Calculate profit (current value - value when bought)
                existingStock.profit = (existingStock.currentPrice - existingStock.purchasePrice) * existingStock.amount;
            } else {
                // Add new stock purchase to user's portfolio
                user.stocks.push({
                    symbol: symbol,
                    amount: amount,
                    purchasePrice: price,
                    purchaseDate: new Date(),
                    currentPrice: price, // Initialize with purchase price
                    currentTotalValue: price * amount,
                    profit: 0 // Initialize profit
                });
            }

            await user.save();

            message.reply(`Successfully bought ${amount} shares of ${symbol} at $${price} each.`);
        } catch (error) {
            console.error('Error buying stocks:', error);
            message.reply('Error buying stocks. Please try again later.');
        }
    }
});

// Handle $sell command
client.on('messageCreate', async message => {
    if (message.content.startsWith('$sell')) {
        const args = message.content.slice(5).trim().split(/ +/);

        if (args.length < 2) {
            return message.reply('Please use `$sell (symbol) (amount)` to sell stocks.');
        }

        const symbol = args[0].toUpperCase();
        const amount = parseFloat(args[1]);

        const price = await fetchStockPrice(symbol);

        if (!price) {
            return message.reply('Invalid symbol or error fetching data.');
        }

        try {
            const user = await User.findOne({ discordId: message.author.id });

            if (!user || !user.stocks || user.stocks.length === 0) {
                return message.reply('You do not own any stocks to sell.');
            }

            // Find the stock in user's portfolio
            const stockIndex = user.stocks.findIndex(stock => stock.symbol === symbol);

            if (stockIndex === -1 || user.stocks[stockIndex].amount < amount) {
                return message.reply('You do not own enough shares to sell.');
            }

            // Calculate revenue from selling stocks
            const revenue = price * amount;

            // Update user's balance and stocks array
            user.balance += revenue;
            user.stocks[stockIndex].amount -= amount;
            user.stocks[stockIndex].currentTotalValue = user.stocks[stockIndex].amount * user.stocks[stockIndex].currentPrice;

            // If no more shares left, remove the stock from portfolio
            if (user.stocks[stockIndex].amount === 0) {
                user.stocks.splice(stockIndex, 1);
            }

            await user.save();

            message.reply(`Successfully sold ${amount} shares of ${symbol} at $${price} each.`);
        } catch (error) {
            console.error('Error selling stocks:', error);
            message.reply('Error selling stocks. Please try again later.');
        }
    }
});

// Handle $portfolio command
client.on('messageCreate', async message => {
    if (message.content.trim().toLowerCase() === '$portfolio') {
        try {
            const user = await User.findOne({ discordId: message.author.id });

            if (!user || !user.stocks || user.stocks.length === 0) {
                return message.reply('Your portfolio is empty.');
            }

            let portfolioMessage = '**Your Portfolio:**\n\n';
            user.stocks.forEach(stock => {
                portfolioMessage += `**${stock.symbol}:** \n`;
                portfolioMessage += `Shares: ${stock.amount}\n`
                portfolioMessage += `Purchase Price: $${stock.purchasePrice.toFixed(2)}\n`;
                portfolioMessage += `Current Price: $${stock.currentPrice.toFixed(2)}\n`;
                portfolioMessage += `Current Total Value: $${stock.currentTotalValue.toFixed(2)}\n`;
                portfolioMessage += `Profit: $${(stock.currentTotalValue - (stock.purchasePrice * stock.amount)).toFixed(2)}\n\n`;
            });

            portfolioMessage += `Balance: $${user.balance.toFixed(2)}`;

            message.reply(portfolioMessage);
        } catch (error) {
            console.error('Error fetching portfolio:', error);
            message.reply('Error fetching portfolio. Please try again later.');
        }
    }
});

//Media

client.on('messageCreate', (message) => {
    if (message.content === '$img') {
        message.reply('**Sending Images** \nPlease use `$img (code) (number)` to send an image. \n\n**Image Codes** \n- Desert (0)');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie') {
        message.reply('**Watching Movies** \nPlease use `$movie (code)` to watch a movie. \n\n**Movie Codes:** \nBoehlke 2024 \n- 2 Guys Who Got Brutally Unalived (2GWGBU) \n- Destined With You (DWY) \n- Fixing Good (FG) \n- Khan Artist (KA) \n- The Circle Of Life (TCOL) \n- The First Victim (TFV) \n\nBoehlke 2023 \n- Happy Little Accidents (HLA) \n- King\'s Crypt (KC) \n- Monkey Murder (MM) \n- Mount Foreverrest (MF) \n- The Wild Jeffois (TWJ) \n- Thirst For Clout (TFC) \n- Recnac!! (The Miracle Drug) (RTMD) \n\nDeluca 2024 \n- 90 Days of Different (90DOD) \n- Ella vs Sohpie (Gun Version) (EVSGV) \n- Graffiti Day (GD) \n- Paint Ballistic (PB) \n- Sophie and Ella Travel the World (SAETTW) \n- The Mask (TM) \n- Thomas, Baron, Alice (TBA) \n- W Rube Goldberg (WRG) \n\nGibson 2024 \n- 90 Days of Different: Day 40 (90DODD40) \n- A Ruff Day (ARD) \n- The Horror Movie (THM) \n- Epic Ice Cream Movie (EICM) \n- Every Fast Food Worker\'s Dream (EFFWD) \n- Slay 49 (S49) \n- Snowy Paintball Fight (SPF)');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme') {
        message.reply('**Sending Class Memes** \nPlease use `$classmeme (number)` to send a meme.');
    }
});

//Miscellaneous

client.on('messageCreate', (message) => {
    if (message.content === '$topgg') {
        message.reply('**If you\'re enjoying KingBot, please consider upvoting the bot and leaving a positive review on Top.gg!** \nVote: https://top.gg/bot/1168240045510107308/vote \nReview: https://top.gg/bot/1168240045510107308#reviews \nBot Page: https://top.gg/bot/1168240045510107308');
    }
});

client.on('messageCreate', async (message) => {
    if (message.content === '$count') {
            // Find the count document, create if it doesn't exist
            let countDoc = await Count.findOne();
            if (!countDoc) {
                countDoc = new Count({ value: 0 });
            }

            // Increment the count and save
            countDoc.value += 1;
            await countDoc.save();

            // Reply with the new count
            message.reply(`The count is now ${countDoc.value}.`);
    }
});

//Image Embeds

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 1') {
        message.reply({ embeds: [MojaveDesertImage1] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 2') {
        message.reply({ embeds: [MojaveDesertImage2] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 3') {
        message.reply({ embeds: [MojaveDesertImage3] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 4') {
        message.reply({ embeds: [MojaveDesertImage4] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 5') {
        message.reply({ embeds: [MojaveDesertImage5] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 6') {
        message.reply({ embeds: [MojaveDesertImage6] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 7') {
        message.reply({ embeds: [MojaveDesertImage7] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 8') {
        message.reply({ embeds: [MojaveDesertImage8] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 9') {
        message.reply({ embeds: [MojaveDesertImage9] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$img 0 10') {
        message.reply({ embeds: [MojaveDesertImage10] });
    }
});

//Movies

//Boehlke 2024

client.on('messageCreate', (message) => {
    if (message.content === '$movie 2GWGBU') {
        message.reply('https://www.youtube.com/watch?v=mTJGYZonJEs&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie DWY') {
        message.reply('https://www.youtube.com/watch?v=74x8ddmOuGE&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie FG') {
        message.reply('https://www.youtube.com/watch?v=M7T5dUg-tvQ&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie KA') {
        message.reply('https://www.youtube.com/watch?v=mYrNIa0TRdM&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie TCOL') {
        message.reply('https://www.youtube.com/watch?v=FAIEsauYHbQ&t=1s&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie TFV') {
        message.reply('https://www.youtube.com/watch?v=Vx9EVfSy3jE&ab_channel=FilmCampInABox');
    }
});

//Boehlke 2023

client.on('messageCreate', (message) => {
    if (message.content === '$movie HLA') {
        message.reply('https://www.youtube.com/watch?v=sNHxUNFNKPU&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie KC') {
        message.reply('https://www.youtube.com/watch?v=uN7YJglqbH0&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie MM') {
        message.reply('https://www.youtube.com/watch?v=TxGVbjbbqD0&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie MF') {
        message.reply('https://www.youtube.com/watch?v=9OA4DHFvVG4&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie TWJ') {
        message.reply('https://www.youtube.com/watch?v=q2EweIYOk6U&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie TFC') {
        message.reply('https://www.youtube.com/watch?v=pFygb4GjvpY&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie RTMD') {
        message.reply('https://www.youtube.com/watch?v=UGANwHGBJUc&ab_channel=BirbNotBorb');
    }
});

//Deluca 2024

client.on('messageCreate', (message) => {
    if (message.content === '$movie 90DOD') {
        message.reply('https://www.youtube.com/watch?v=IfjO86FaemU&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie EVSGV') {
        message.reply('https://www.youtube.com/watch?v=ClG-puU3A3U&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie GD') {
        message.reply('https://www.youtube.com/watch?v=BBTp862EHOI&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie PB') {
        message.reply('https://www.youtube.com/watch?v=5BFEArg1kR8&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie SAETTW') {
        message.reply('https://www.youtube.com/watch?v=vITmBOt4Xb4&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie TM') {
        message.reply('https://www.youtube.com/watch?v=QJtKll8R32M&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie TBA') {
        message.reply('https://www.youtube.com/watch?v=lAnT1xb1tXY&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie WRG') {
        message.reply('https://www.youtube.com/watch?v=Ny8Tg664pNw&ab_channel=NoFoxHere');
    }
});

//Gibson 2024

client.on('messageCreate', (message) => {
    if (message.content === '$movie 90DODD40') {
        message.reply('https://www.youtube.com/watch?v=h_sJLpkI3qs&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie ARD') {
        message.reply('https://www.youtube.com/watch?v=C7a_9UYLdJQ&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie THM') {
        message.reply('https://www.youtube.com/watch?v=JTZqt1x4YUM&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie EICM') {
        message.reply('https://www.youtube.com/watch?v=YEMSjycMGGw&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie EFFWD') {
        message.reply('https://www.youtube.com/watch?v=hC7u0axQWGE&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie S49') {
        message.reply('https://www.youtube.com/watch?v=S8y2aeTtgqw&ab_channel=FilmCampInABox');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$movie SPF') {
        message.reply('https://www.youtube.com/watch?v=bJFGeV8BiTI&t=1s&ab_channel=FilmCampInABox');
    }
});

//Class Memes

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 1') {
        message.reply({ embeds: [ClassMeme1] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 2') {
        message.reply({ embeds: [ClassMeme2] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 3') {
        message.reply({ embeds: [ClassMeme3] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 4') {
        message.reply({ embeds: [ClassMeme4] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 5') {
        message.reply({ embeds: [ClassMeme5] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 6') {
        message.reply({ embeds: [ClassMeme6] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 7') {
        message.reply({ embeds: [ClassMeme7] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 8') {
        message.reply({ embeds: [ClassMeme8] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 9') {
        message.reply({ embeds: [ClassMeme9] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 10') {
        message.reply({ embeds: [ClassMeme10] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 11') {
        message.reply({ embeds: [ClassMeme11] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 12') {
        message.reply({ embeds: [ClassMeme12] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 13') {
        message.reply({ embeds: [ClassMeme13] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 14') {
        message.reply({ embeds: [ClassMeme14] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 15') {
        message.reply({ embeds: [ClassMeme15] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 16') {
        message.reply({ embeds: [ClassMeme16] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 17') {
        message.reply({ embeds: [ClassMeme17] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 18') {
        message.reply({ embeds: [ClassMeme18] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 19') {
        message.reply({ embeds: [ClassMeme19] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 20') {
        message.reply({ embeds: [ClassMeme20] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 21') {
        message.reply({ embeds: [ClassMeme21] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 22') {
        message.reply({ embeds: [ClassMeme22] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 23') {
        message.reply({ embeds: [ClassMeme23] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 24') {
        message.reply({ embeds: [ClassMeme24] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 25') {
        message.reply({ embeds: [ClassMeme25] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 26') {
        message.reply({ embeds: [ClassMeme26] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 27') {
        message.reply({ embeds: [ClassMeme27] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 28') {
        message.reply({ embeds: [ClassMeme28] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 29') {
        message.reply({ embeds: [ClassMeme29] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 30') {
        message.reply({ embeds: [ClassMeme30] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 31') {
        message.reply({ embeds: [ClassMeme31] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 32') {
        message.reply({ embeds: [ClassMeme32] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 33') {
        message.reply({ embeds: [ClassMeme33] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 34') {
        message.reply({ embeds: [ClassMeme34] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 35') {
        message.reply({ embeds: [ClassMeme35] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 36') {
        message.reply({ embeds: [ClassMeme36] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 37') {
        message.reply({ embeds: [ClassMeme37] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 38') {
        message.reply({ embeds: [ClassMeme38] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 39') {
        message.reply({ embeds: [ClassMeme39] });
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$classmeme 40') {
        message.reply({ embeds: [ClassMeme40] });
    }
});

//Informational Slash Commands Listeners

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'help') {
        return interaction.reply('**List of commands:** \n\n**Information/Management** \n($)help = List of Commands \n($)kingbot = Bot Information \n($)ping = Bot Latency \n($)uptime = Bot Uptime \n($)version = Bot Version \n($)links = Bot Links \n($)topgg = Check out the bot\'s top.gg page \n\n**Entertainment** \n($)joke = Responds with a Random Joke \n($)longjoke = Responds with a Random Long Joke \n($)fact = Responds with a Random Fact \n($)ari = Responds with a Random Ari Quote \n\n**Economy** \n($)start = Create a KingBot account \n($)bal = Check the balance of yourself or another user \n($)daily = Claim your daily salary \n($)claim = Claim your hourly salary \n($)vote = Claim your top.gg upvote reward \n($)coinflip = Bet money on a coin flip \n($)pay = Transfer funds to another user \n($)leaderboard = View the global leaderboard \n\n**Media** \n($)img = Sends an image in the server \n($)movie = Watch a movie in the server \n($)classmeme = Sends a class meme in the server \n\n**Miscellaneous** \n($)count = Adds 1 to the Count');
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
        return interaction.reply('**Bot Version** \nThe following are all the versions of KingBot and its dependencies. \n\n**KingBot Version** \n1.4.9.8.5 \n\n**Discord.js Version** \n14.15.3 \n\n**NPM Version** \n10.8.1 \n\n**Node.js Version** \n20.10.0 \n\n**Node_Fetch Version** \n2.7.0 \n\n**DOTENV Version** \n16.4.5');
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

//Media Slash Command Listeners

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'img') {
        return interaction.reply('**Sending Images** \nPlease use $img (code) (number) to send an image. \n\n**Image Codes** \n- Desert (0)');
      }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'movie') {
        return interaction.reply('**Watching Movies** \nPlease use `$movie (code)` to watch a movie. \n\n**Movie Codes:** \nBoehlke 2024 \n- 2 Guys Who Got Brutally Unalived (2GWGBU) \n- Destined With You (DWY) \n- Fixing Good (FG) \n- Khan Artist (KA) \n- The Circle Of Life (TCOL) \n- The First Victim (TFV) \n\nBoehlke 2023 \n- Happy Little Accidents (HLA) \n- King\'s Crypt (KC) \n- Monkey Murder (MM) \n- Mount Foreverrest (MF) \n- The Wild Jeffois (TWJ) \n- Thirst For Clout (TFC) \n- Recnac!! (The Miracle Drug) (RTMD) \n\nDeluca 2024 \n- 90 Days of Different (90DOD) \n- Ella vs Sohpie (Gun Version) (EVSGV) \n- Graffiti Day (GD) \n- Paint Ballistic (PB) \n- Sophie and Ella Travel the World (SAETTW) \n- The Mask (TM) \n- Thomas, Baron, Alice (TBA) \n- W Rube Goldberg (WRG) \n\nGibson 2024 \n- 90 Days of Different: Day 40 (90DODD40) \n- A Ruff Day (ARD) \n- The Horror Movie (THM) \n- Epic Ice Cream Movie (EICM) \n- Every Fast Food Worker\'s Dream (EFFWD) \n- Slay 49 (S49) \n- Snowy Paintball Fight (SPF)');
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
  
    if (interaction.commandName === 'topgg') {
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

//Functions

async function checkSelfBalance(message) {
    let user = await User.findOne({ discordId: message.author.id });

    if (!user) {
        message.reply('This user has not created an account yet.');
    } else {
        message.reply(`Your current balance is $${user.balance}.`);
    }
}

async function checkBalance(userId, message) {
    let user = await User.findOne({ discordId: userId });

    if (!user) {
        message.reply('This user has not created an account yet.');
    } else {
        message.reply(`<@${userId}> has $${user.balance} in their account.`);
    }
}

async function handlePayCommand(message, args) {
    if (args.length !== 2) {
        message.reply('Please use `$pay (user) (amount)` to transfer funds.');
        return;
    }

    const targetUserId = resolveUser(args[0], message);
    const payAmount = parseInt(args[1]);

    if (!targetUserId) {
        message.reply('Please enter a valid recipient.');
        return;
    }

    if (isNaN(payAmount) || payAmount <= 0) {
        message.reply('Please enter a valid transfer amount.');
        return;
    }

    const senderId = message.author.id;

    if (senderId === targetUserId) {
        message.reply('You cannot pay yourself.');
        return;
    }

    const sender = await User.findOne({ discordId: senderId });
    const recipient = await User.findOne({ discordId: targetUserId });

    if (!sender) {
        message.reply('You need to create an account first with `$start`.');
        return;
    }
    if (!recipient) {
        message.reply('The recipient has not created an account yet.');
        return;
    }
    if (sender.balance < payAmount) {
        message.reply('Insufficient funds.');
        return;
    }

    sender.balance -= payAmount;
    recipient.balance += payAmount;

    await sender.save();
    await recipient.save();

    message.reply(`Successfully transferred $${payAmount} to <@${targetUserId}>.`);
}

function resolveUser(query, message) {
    // Check for a mention
    if (message.mentions.users.size) {
        return message.mentions.users.first().id;
    }

    // Check for a user ID
    if (query.match(/^\d{17,19}$/)) {
        return query;
    }

    // Check for a username
    const guild = message.guild;
    const member = guild.members.cache.find(member => member.user.username === query);
    if (member) {
        return member.user.id;
    }

    return null; // Return if user not found
}

async function getBalanceLeaderboard(message) {
    const leaderboard = await User.find().sort({ balance: -1 }).limit(10);

    let leaderboardString = '';
    leaderboard.forEach((user, index) => {
        const username = user.username;

        leaderboardString += `${index + 1}. **${username}:** $${user.balance}\n`;
    });
    
    return leaderboardString;
}

async function fetchStockPrice(symbol) {
    try {
        const quote = await yahooFinance.quote(symbol);
        const price = quote.regularMarketPrice;

        return price;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

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