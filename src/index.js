import dotenv from "dotenv";
dotenv.config();

import {
  Client,
  IntentsBitField,
  ActivityType,
  EmbedBuilder,
} from "discord.js";
import mongoose from "mongoose";
import fetch from "node-fetch";

import Count from "./schemas/global.js";
import User from "./schemas/users.js";

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

import { OpenAI } from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

import { Ollama } from "ollama";
const ollama = new Ollama({
  baseURL: "http://localhost:11434/api/generate",
});

import yahooFinance from "yahoo-finance2";

//Update this line every time a new embed is added
import {
  MojaveDesertImage1,
  MojaveDesertImage2,
  MojaveDesertImage3,
  MojaveDesertImage4,
  MojaveDesertImage5,
  MojaveDesertImage6,
  MojaveDesertImage7,
  MojaveDesertImage8,
  MojaveDesertImage9,
  MojaveDesertImage10,
} from "./constants.js";

//Update this line every time a new class meme is added
import {
  ClassMeme1,
  ClassMeme2,
  ClassMeme3,
  ClassMeme4,
  ClassMeme5,
  ClassMeme6,
  ClassMeme7,
  ClassMeme8,
  ClassMeme9,
  ClassMeme10,
  ClassMeme11,
  ClassMeme12,
  ClassMeme13,
  ClassMeme14,
  ClassMeme15,
  ClassMeme16,
  ClassMeme17,
  ClassMeme18,
  ClassMeme19,
  ClassMeme20,
  ClassMeme21,
  ClassMeme22,
  ClassMeme23,
  ClassMeme24,
  ClassMeme25,
  ClassMeme26,
  ClassMeme27,
  ClassMeme28,
  ClassMeme29,
  ClassMeme30,
  ClassMeme31,
  ClassMeme32,
  ClassMeme33,
  ClassMeme34,
  ClassMeme35,
  ClassMeme36,
  ClassMeme37,
  ClassMeme38,
  ClassMeme39,
  ClassMeme40,
} from "./constants.js";

//Update this line every time a new list is added
import {
  randomJokeList,
  randomLongJokeList,
  randomFactList,
  randomAriQuoteList,
} from "./constants.js";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildEmojisAndStickers,
    IntentsBitField.Flags.GuildModeration,
    IntentsBitField.Flags.GuildIntegrations,
    IntentsBitField.Flags.GuildWebhooks,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.GuildMessageTyping,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.DirectMessageTyping,
    IntentsBitField.Flags.AutoModerationConfiguration,
    IntentsBitField.Flags.AutoModerationExecution,
    IntentsBitField.Flags.GuildMessagePolls,
    IntentsBitField.Flags.DirectMessagePolls,
  ],
});

client.setMaxListeners(Infinity);

client.on("ready", async (c) => {
  const guilds = client.guilds.cache;
  const promiseArr = [];

  guilds.forEach((guild) => {
    promiseArr.push(
      new Promise(async (resolve, _reject) => {
        let members = await guild.members.fetch();
        members = members.filter((m) => !m.user.bot);
        resolve(members.size);
      })
    );
  });

  let results = await Promise.all(promiseArr);
  let totalUsers = results.reduce((prevVal, currVal) => prevVal + currVal);

  let status = [
    {
      name: "$help",
      type: ActivityType.Playing,
    },

    {
      name: `${totalUsers} users!`,
      type: ActivityType.Watching,
    },

    {
      name: "$help",
      type: ActivityType.Playing,
    },

    {
      name: `${totalUsers} users!`,
      type: ActivityType.Watching,
    },

    {
      name: `${client.guilds.cache.size} servers!`,
      type: ActivityType.Watching,
    },
  ];

  console.log(`${c.user.tag} is Online!`);

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
});

//Information/Management

client.on("messageCreate", (message) => {
  if (message.content === "$help") {
    message.reply(
      "**List of commands:** \n\n**Information/Management** \n($)help = List of Commands \n($)kingbot = Bot Information \n($)ping = Bot Latency \n($)uptime = Bot Uptime \n($)version = Bot Version \n($)links = Bot Links \n($)topgg = Check out the bot's top.gg page \n\n**Entertainment** \n($)joke = Responds with a Random Joke \n($)longjoke = Responds with a Random Long Joke \n($)fact = Responds with a Random Fact \n($)ari = Responds with a Random Ari Quote \n\n**Economy** \n($)start = Create a KingBot account \n($)bal = Check the balance of yourself or another user \n($)daily = Claim your daily salary \n($)claim = Claim your hourly salary \n($)vote = Claim your top.gg upvote reward \n($)coinflip = Bet money on a coin flip \n($)pay = Transfer funds to another user \n($)leaderboard = View the global leaderboard \n\n**Stocks** \n($)buy = Purchase a stock at its market price (24/7) \n($)sell = Sell a stock at its market price (24/7) \n($)portfolio = View your stock portfolio \n($)stock = View information on a stock \n\n**Media** \n($)img = Sends an image in the server \n($)movie = Watch a movie in the server \n($)classmeme = Sends a class meme in the server \n\n**Miscellaneous** \n($)topgg = Check out the bot's top.gg page \n($)count = Adds 1 to the Count"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$kingbot") {
      message.reply(
        `Hello. My name is KingBot, and I was a multipurpose Discord Bot created by Ari Khan. My main features are currently entertainment and media sharing. I am currently in active development. If you want information about the bot or have suggestions, please contact our lead developer, Ari Khan (<@786745378212282368>). \n\n **Creation Date:** October 29, 2023 \n**Made Public:** November 25, 2023** \n\n**Servers:** ${client.guilds.cache.size}`
      );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$ping") {
    message.reply(
      `Server Latency is **${Date.now() - message.createdTimestamp}ms**.`
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$uptime") {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    message.reply(
      `The bot has been online for ${days} ${
        days === 1 ? "day" : "days"
      }, ${hours} ${hours === 1 ? "hour" : "hours"}, ${minutes} ${
        minutes === 1 ? "minute" : "minutes"
      } and ${seconds} ${seconds === 1 ? "second" : "seconds"}`
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$version") {
    message.reply(
      "**Bot Version** \nThe following are all the versions of KingBot and its dependencies. \n\n**KingBot Version** \n1.4.10.8.5 \n\n**Discord.js Version** \n14.15.3 \n\n**NPM Version** \n10.8.1 \n\n**Node.js Version** \n20.10.0 \n\n**Node_Fetch Version** \n2.7.0 \n\n**DOTENV Version** \n16.4.5 \n\n**Nodemon Version** \n3.1.4 \n\n**Mongoose Version** \n8.4.4 \n\n**Yahoo Finance (2)** \n2.11.3"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$links") {
    message.reply(
      "**Top.gg:** \nhttps://top.gg/bot/1168240045510107308 \n**GitHub Repository:** \nhttps://github.com/Proking4444/KingBot"
    );
  }
});

//Entertainment

client.on("messageCreate", (message) => {
  if (message.content === "$joke") {
    const random = Math.floor(Math.random() * randomJokeList.length);
    message.reply(randomJokeList[random]);
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$longjoke") {
    const random = Math.floor(Math.random() * randomLongJokeList.length);
    message.reply(randomLongJokeList[random]);
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$fact") {
    const random = Math.floor(Math.random() * randomFactList.length);
    message.reply(randomFactList[random]);
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$ari") {
    const random = Math.floor(Math.random() * randomAriQuoteList.length);
    message.reply(randomAriQuoteList[random]);
  }
});

//Economy

client.on("messageCreate", async (message) => {
  if (message.content === "$start") {
    let user = await User.findOne({ discordId: message.author.id });

    if (user) {
      message.reply("You already have an account.");
    } else {
      user = await User.create({
        discordId: message.author.id,
        username: message.author.username,
        balance: 0,
        lastDailyCollected: null,
      });

      message.reply("Your account has been created.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "$daily") {
    let user = await User.findOne({ discordId: message.author.id });

    if (!user) {
      message.reply("You need to create an account first with `$start`.");
      return;
    }

    const now = new Date();
    const nextDaily = new Date(user.lastDailyCollected);
    nextDaily.setHours(nextDaily.getHours() + 12);

    if (user.lastDailyCollected && now < nextDaily) {
      const timeUntilNextDaily = nextDaily - now;
      const hours = Math.floor((timeUntilNextDaily / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeUntilNextDaily / (1000 * 60)) % 60);
      const seconds = Math.floor((timeUntilNextDaily / 1000) % 60);

      message.reply(
        `You have already collected your daily salary. Next daily available in ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
      );
    } else {
      user.balance += 100;
      user.lastDailyCollected = now;
      await user.save();

      message.reply("You have collected your daily salary of $100.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "$claim") {
    let user = await User.findOne({ discordId: message.author.id });

    if (!user) {
      message.reply("You need to create an account first with `$start`.");
      return;
    }

    const now = new Date();
    const nextClaim = new Date(user.lastClaimCollected);
    nextClaim.setHours(nextClaim.getHours() + 1);

    if (user.lastClaimCollected && now < nextClaim) {
      const timeUntilNextClaim = nextClaim - now;
      const minutes = Math.floor((timeUntilNextClaim / (1000 * 60)) % 60);
      const seconds = Math.floor((timeUntilNextClaim / 1000) % 60);

      message.reply(
        `You have already collected your hourly wage. Next claim available in ${minutes} minutes and ${seconds} seconds.`
      );
    } else {
      user.balance += 10;
      user.lastClaimCollected = now;
      await user.save();

      message.reply("You have collected your hourly salary of $10.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (
    message.content.startsWith("$bal") ||
    message.content.startsWith("$balance")
  ) {
    let args = message.content.split(" ");

    if (args.length < 2) {
      await checkSelfBalance(message);
    } else {
      let userId = resolveUser(args[1], message);
      if (userId) {
        await checkBalance(userId, message);
      } else {
        message.reply("That user was not found.");
      }
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$coinflip")) {
    let args = message.content.split(" ");

    if (args.length < 3) {
      message.reply(
        "Please use `$coinflip (bet amount) (choice)` (heads or tails) to place a bet."
      );
      return;
    }

    let betAmount = parseInt(args[1], 10);
    let choice = args[2].toLowerCase();

    if (isNaN(betAmount) || betAmount <= 0) {
      message.reply("Please enter a valid bet amount.");
      return;
    }

    if (!["heads", "tails"].includes(choice)) {
      message.reply("Please choose either heads or tails.");
      return;
    }

    let user = await User.findOne({ discordId: message.author.id });

    if (!user) {
      message.reply("You need to create an account first with $start.");
      return;
    }

    if (user.balance < betAmount) {
      message.reply("You do not have enough balance to place this bet.");
      return;
    }

    let coinFlip = Math.random() < 0.5;

    if ((coinFlip && choice === "heads") || (!coinFlip && choice === "tails")) {
      user.balance += betAmount;
      const coinflipWinEmbed = new EmbedBuilder()
        .setColor("#00FF00")
        .setTitle("Coinflip Result")
        .setDescription(
          `**You won!** \nThe coin landed on ${
            coinFlip ? "heads" : "tails"
          }. Your new balance is $${user.balance.toFixed(2)}.`
        )
        .setImage(
          coinFlip
            ? "https://i.postimg.cc/Hs41KL0M/heads.png"
            : "https://i.postimg.cc/Mp6J88tF/tails.png"
        );

      message.reply({ embeds: [coinflipWinEmbed] });
    } else {
      user.balance -= betAmount;
      const coinflipLossEmbed = new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("Coinflip Result")
        .setDescription(
          `**You lost!** \nThe coin landed on ${
            coinFlip ? "heads" : "tails"
          }. Your new balance is $${user.balance.toFixed(2)}.`
        )
        .setImage(
          coinFlip
            ? "https://i.postimg.cc/Hs41KL0M/heads.png"
            : "https://i.postimg.cc/Mp6J88tF/tails.png"
        );

      message.reply({ embeds: [coinflipLossEmbed] });
    }

    await user.save();
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "$vote") {
    let user = await User.findOne({ discordId: message.author.id });

    if (!user) {
      message.reply("You need to create an account first with `$start`.");
      return;
    }

    const apiKey = process.env.TOPGG_API_KEY;
    const botId = process.env.CLIENT_ID;

    const response = await fetch(
      `https://top.gg/api/bots/${botId}/check?userId=${message.author.id}`,
      {
        headers: { Authorization: apiKey },
      }
    );

    const data = await response.json();

    if (data.voted === 1) {
      const cooldownDuration = 12 * 60 * 60 * 1000;
      const now = new Date();

      if (
        !user.lastVoteTimestamp ||
        now - user.lastVoteTimestamp >= cooldownDuration
      ) {
        user.balance += 500;
        user.lastVoteTimestamp = now;
        await user.save();

        message.reply(
          `Thank you for voting! A $500 reward has been added to your account.`
        );
      } else {
        const remainingTime = new Date(
          user.lastVoteTimestamp.getTime() + cooldownDuration - now.getTime()
        );
        const hours = remainingTime.getUTCHours();
        const minutes = remainingTime.getUTCMinutes();
        const seconds = remainingTime.getUTCSeconds();

        message.reply(
          `You have already voted recently. Next reward available in ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
        );
      }
    } else if (data.voted === 0) {
      message.reply(
        "You haven't voted yet. Please vote for the bot at https://top.gg/bot/1168240045510107308/vote."
      );
    } else {
      message.reply("Unexpected response from Top.gg. Please try again later.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$pay")) {
    const args = message.content.split(" ").slice(1);

    handlePayCommand(message, args);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "$leaderboard") {
    const leaderboard = await getBalanceLeaderboard();
    message.reply("**Global Leaderboard:** \n" + leaderboard);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$net")) {
    let args = message.content.split(" ");

    if (args.length < 2) {
      await checkSelfNetWorth(message);
    } else {
      let userId = resolveUser(args[1], message);
      if (userId) {
        await checkUserNetWorth(userId, message);
      } else {
        message.reply("That user was not found.");
      }
    }
  }
});

//Stocks
client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$buy")) {
    const args = message.content.slice(4).trim().split(/ +/);

    if (args.length < 2) {
      return message.reply(
        "Please use `$buy (symbol) (amount)` to purchase stocks."
      );
    }

    const symbol = args[0].toUpperCase();
    const amount = parseInt(args[1], 10);

    if (isNaN(amount) || amount <= 0 || !Number.isInteger(amount)) {
      return message.reply("Please enter a valid whole number for the amount.");
    }

    if (symbol.endsWith("=X")) {
      return message.reply("Please use `$exchange` to exchange currencies.");
    }

    try {
      const price = await fetchStockPrice(symbol);
      const currency = await fetchStockCurrency(symbol);

      if (!price || !currency) {
        return message.reply("Invalid symbol or error fetching data.");
      }

      const user = await User.findOne({ discordId: message.author.id });

      if (!user) {
        return message.reply(
          "You need to create an account first with `$start`."
        );
      }

      let currencyBalance = 0;

      if (currency !== "USD") {
        currencyBalance = user.currencies.get(currency) || 0;
        if (currencyBalance < price * amount) {
          return message.reply(`Insufficient balance in ${currency}.`);
        }
        user.currencies.set(currency, currencyBalance - price * amount);
      } else {
        if (user.balance < price * amount) {
          return message.reply("Insufficient balance in USD.");
        }
        user.balance -= price * amount;
      }

      const existingStockIndex = user.stocks.findIndex(
        (stock) => stock.symbol === symbol
      );

      if (existingStockIndex >= 0) {
        const existingStock = user.stocks[existingStockIndex];
        existingStock.amount += amount;
        existingStock.currentPrice = price;
        existingStock.currentTotalValue = existingStock.amount * price;

        existingStock.profit =
          (existingStock.currentPrice - existingStock.purchasePrice) *
          existingStock.amount;
      } else {
        user.stocks.push({
          symbol: symbol,
          amount: amount,
          purchasePrice: price,
          purchaseDate: new Date(),
          currentPrice: price,
          currentTotalValue: price * amount,
          profit: 0,
        });
      }

      await user.save();

      message.reply(
        `Successfully bought ${amount} shares of ${symbol} at $${price.toFixed(
          3
        )} (${currency}) each.`
      );
    } catch (error) {
      console.error("Error buying stocks:", error);
      message.reply("Error buying stocks. Please try again later.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$sell")) {
    const args = message.content.slice(5).trim().split(/ +/);

    if (args.length < 2) {
      return message.reply(
        "Please use `$sell (symbol) (amount)` to sell stocks."
      );
    }

    const symbol = args[0].toUpperCase();
    const amount = parseFloat(args[1]);

    try {
      const price = await fetchStockPrice(symbol);
      const currency = await fetchStockCurrency(symbol);

      if (!price || !currency) {
        return message.reply("Invalid symbol or error fetching data.");
      }

      const user = await User.findOne({ discordId: message.author.id });

      if (!user || !user.stocks || user.stocks.length === 0) {
        return message.reply("You do not own any stocks to sell.");
      }

      const stockIndex = user.stocks.findIndex(
        (stock) => stock.symbol === symbol
      );

      if (stockIndex === -1 || user.stocks[stockIndex].amount < amount) {
        return message.reply("You do not own enough shares to sell.");
      }

      const revenue = price * amount;

      if (currency !== "USD") {
        const currencyBalance = user.currencies.get(currency) || 0;
        user.currencies.set(currency, currencyBalance + revenue);
      } else {
        user.balance += revenue;
      }

      user.stocks[stockIndex].amount -= amount;
      user.stocks[stockIndex].currentTotalValue =
        user.stocks[stockIndex].amount * user.stocks[stockIndex].currentPrice;

      if (user.stocks[stockIndex].amount === 0) {
        user.stocks.splice(stockIndex, 1);
      }

      await user.save();

      message.reply(
        `Successfully sold ${amount} shares of ${symbol} at $${price.toFixed(
          3
        )} (${currency}) each.`
      );
    } catch (error) {
      console.error("Error selling stocks:", error);
      message.reply("Error selling stocks. Please try again later.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.trim().toLowerCase() === "$portfolio") {
    try {
      const user = await User.findOne({ discordId: message.author.id });

      if (!user || !user.stocks || user.stocks.length === 0) {
        return message.reply("Your portfolio is empty.");
      }

      let portfolioMessage = "**Your Portfolio:**\n\n";
      let totalPortfolioValue = { USD: 0 };
      let totalProfit = { USD: 0 };

      for (const stock of user.stocks) {
        const purchaseDate = stock.purchaseDate
          ? stock.purchaseDate.toISOString().split("T")[0]
          : "Unknown";

        let currentPrice = 0;
        let value = 0;
        let profit = 0;

        const stockName = await getStockName(stock.symbol);
        const stockCurrency = await fetchStockCurrency(stock.symbol);

        const fetchedPrice = await fetchStockPrice(stock.symbol);
        if (fetchedPrice !== null) {
          currentPrice = fetchedPrice.toFixed(2);
          const currentValue = fetchedPrice * stock.amount;
          value = currentValue.toFixed(2);
          profit = (currentValue - stock.purchasePrice * stock.amount).toFixed(
            2
          );

          if (!totalPortfolioValue[stockCurrency]) {
            totalPortfolioValue[stockCurrency] = 0;
          }
          if (!totalProfit[stockCurrency]) {
            totalProfit[stockCurrency] = 0;
          }

          totalPortfolioValue[stockCurrency] += currentValue;
          totalProfit[stockCurrency] += parseFloat(profit);
        }

        portfolioMessage += `**${stockName} (${stock.symbol}):** \n`;
        portfolioMessage += `**Date:** ${purchaseDate} \n`;
        portfolioMessage += `**Shares:** ${stock.amount} \n`;
        portfolioMessage += `**Currency:** ${stockCurrency} \n`;
        portfolioMessage += `**Purchase Price:** $${stock.purchasePrice.toFixed(
          2
        )} \n`;
        portfolioMessage += `**Current Price:** $${currentPrice} \n`;
        portfolioMessage += `**Value:** $${value} \n`;
        portfolioMessage += `**Profit:** $${profit} \n\n`;
      }

      const netWorthInUSD = user.balance + (totalPortfolioValue["USD"] || 0);

      portfolioMessage += `**Total Portfolio Value:** ${(
        totalPortfolioValue["USD"] || 0
      ).toFixed(2)} USD`;
      for (const currency in totalPortfolioValue) {
        if (currency !== "USD") {
          portfolioMessage += ` + ${totalPortfolioValue[currency].toFixed(
            2
          )} ${currency}`;
        }
      }
      portfolioMessage += `\n`;

      portfolioMessage += `**Total Profit:** ${(
        totalProfit["USD"] || 0
      ).toFixed(2)} USD`;
      for (const currency in totalProfit) {
        if (currency !== "USD") {
          portfolioMessage += ` + ${totalProfit[currency].toFixed(
            2
          )} ${currency}`;
        }
      }
      portfolioMessage += `\n`;

      portfolioMessage += `**Net Worth:** ${netWorthInUSD.toFixed(2)} USD`;
      for (const currency in totalPortfolioValue) {
        if (currency !== "USD") {
          portfolioMessage += ` + ${totalPortfolioValue[currency].toFixed(
            2
          )} ${currency}`;
        }
      }
      portfolioMessage += `\n`;

      portfolioMessage += `**Balance:** ${user.balance.toFixed(2)} USD`;
      user.currencies.forEach((amount, currency) => {
        portfolioMessage += ` + ${amount.toFixed(2)} ${currency}`;
      });

      message.reply(portfolioMessage);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      message.reply("Error fetching portfolio. Please try again later.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$stock")) {
    const args = message.content.slice(7).trim().split(/ +/);

    if (args.length < 1) {
      return message.reply(
        "Please use `$stock (symbol)` to view information on a stock."
      );
    }

    const symbol = args[0].toUpperCase();

    const stockName = await getStockName(symbol);
    const price = await fetchStockPrice(symbol);
    const currency = await fetchStockCurrency(symbol);

    if (!price || !currency) {
      return message.reply("Invalid symbol or error fetching data.");
    }

    message.reply(
      `**${stockName} (${symbol}):** \n**Current Price:** $${price.toFixed(
        3
      )} (${currency})`
    );
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$exchange")) {
    const args = message.content.slice(9).trim().split(/ +/);

    if (args.length < 3) {
      return message.reply(
        "Please use `$exchange (input currency) (input amount) (output currency)`."
      );
    }

    const fromCurrency = args[0].toUpperCase();
    const amount = parseFloat(args[1]);
    const toCurrency = args[2].toUpperCase();

    if (isNaN(amount) || amount <= 0) {
      return message.reply("Please enter a valid amount.");
    }

    try {
      const user = await User.findOne({ discordId: message.author.id });

      if (!user) {
        return message.reply(
          "You need to create an account first with `$start`."
        );
      }

      let fromCurrencyBalance;
      if (fromCurrency === "USD") {
        fromCurrencyBalance = user.balance;
      } else {
        fromCurrencyBalance = user.currencies.get(fromCurrency) || 0;
      }

      if (fromCurrencyBalance < amount) {
        return message.reply(`Insufficient balance in ${fromCurrency}.`);
      }

      const exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);
      if (!exchangeRate) {
        return message.reply("Error fetching exchange rate.");
      }

      const convertedAmount = amount * exchangeRate;

      if (fromCurrency === "USD") {
        user.balance -= amount;
      } else {
        user.currencies.set(fromCurrency, fromCurrencyBalance - amount);
      }

      if (toCurrency === "USD") {
        user.balance += convertedAmount;
      } else {
        const toCurrencyBalance = user.currencies.get(toCurrency) || 0;
        user.currencies.set(toCurrency, toCurrencyBalance + convertedAmount);
      }

      await user.save();

      message.reply(
        `Successfully exchanged ${amount.toFixed(
          3
        )} ${fromCurrency} to ${convertedAmount.toFixed(3)} ${toCurrency}.`
      );
    } catch (error) {
      console.error("Error exchanging currencies:", error);
      message.reply("Error exchanging currencies. Please try again later.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "$currency") {
    try {
      const user = await User.findOne({ discordId: message.author.id });

      if (!user) {
        return message.reply(
          "You need to create an account first with `$start`."
        );
      }

      let replyMessage = "**Your Currencies:**\n";
      replyMessage += `**USD:** $${user.balance.toFixed(2)}\n`;

      user.currencies.forEach((amount, currency) => {
        replyMessage += `**${currency}:** $${amount.toFixed(2)}\n`;
      });

      message.reply(replyMessage);
    } catch (error) {
      console.error("Error fetching currencies:", error);
      message.reply("Error fetching currencies. Please try again later.");
    }
  }
});

//Media

client.on("messageCreate", (message) => {
  if (message.content === "$img") {
    message.reply(
      "**Sending Images** \nPlease use `$img (code) (number)` to send an image. \n\n**Image Codes** \n- Desert (0)"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie") {
    message.reply(
      "**Watching Movies** \nPlease use `$movie (code)` to watch a movie. \n\n**Movie Codes:** \nBoehlke 2024 \n- 2 Guys Who Got Brutally Unalived (2GWGBU) \n- Destined With You (DWY) \n- Fixing Good (FG) \n- Khan Artist (KA) \n- The Circle Of Life (TCOL) \n- The First Victim (TFV) \n\nBoehlke 2023 \n- Happy Little Accidents (HLA) \n- King's Crypt (KC) \n- Monkey Murder (MM) \n- Mount Foreverrest (MF) \n- The Wild Jeffois (TWJ) \n- Thirst For Clout (TFC) \n- Recnac!! (The Miracle Drug) (RTMD) \n\nDeluca 2024 \n- 90 Days of Different (90DOD) \n- Ella vs Sohpie (Gun Version) (EVSGV) \n- Graffiti Day (GD) \n- Paint Ballistic (PB) \n- Sophie and Ella Travel the World (SAETTW) \n- The Mask (TM) \n- Thomas, Baron, Alice (TBA) \n- W Rube Goldberg (WRG) \n- Fire Rube Goldberg (FRG) \n\nGibson 2024 \n- 90 Days of Different: Day 40 (90DODD40) \n- A Ruff Day (ARD) \n- The Horror Movie (THM) \n- Epic Ice Cream Movie (EICM) \n- Every Fast Food Worker's Dream (EFFWD) \n- Slay 49 (S49) \n- Snowy Paintball Fight (SPF)"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme") {
    message.reply(
      "**Sending Class Memes** \nPlease use `$classmeme (number)` to send a meme."
    );
  }
});

//Moderation

client.on("messageCreate", async (message) => {
  if (!message.guild) return;

  if (message.content.startsWith("$kick")) {
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      return message.reply("You don't have permissions to kick members.");
    }

    let args = message.content.split(" ");
    if (args.length < 2) {
      return message.reply(
        "Please use `$kick (user) (reason)` to kick a member."
      );
    }

    let userId = resolveUser(args[1], message);
    if (!userId) {
      return message.reply("User not found.");
    }

    let user = await message.guild.members.fetch(userId).catch(() => null);
    if (!user) {
      return message.reply("User not found in the guild.");
    }

    if (!user.kickable) {
      return message.reply("I cannot kick this user.");
    }

    let reason = args.slice(2).join(" ") || "No reason provided.";

    try {
      await user.kick({ reason });
      message.reply(`Kicked ${user.user.tag} for: ${reason}`);
    } catch (error) {
      console.error("Error kicking user:", error);
      message.reply(
        "Failed to kick the user. Ensure the bot has the appropriate permissions and role hierarchy."
      );
    }
  }
});

client.on("messageCreate", async (message) => {
  if (!message.guild) return;

  if (message.content.startsWith("$ban")) {
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      return message.reply("You don't have permissions to ban members.");
    }

    let args = message.content.split(" ");
    if (args.length < 2) {
      return message.reply(
        "Please use `$ban (user) (reason)` to ban a member."
      );
    }

    let userId = resolveUser(args[1], message);
    if (!userId) {
      return message.reply("User not found.");
    }

    let user;
    try {
      user = await message.guild.members.fetch(userId);
    } catch (error) {
      console.error("Error fetching user:", error);
      return message.reply("User not found in the guild.");
    }

    if (!user) {
      return message.reply("User not found in the guild.");
    }

    // Check if roles exist
    if (!user.roles || !user.roles.cache || user.roles.cache.size === 0) {
      console.error("User roles not properly fetched:", user);
      return message.reply("Cannot determine the user's roles.");
    }

    // Check if the bot has a role higher than the user
    const botMember = message.guild.members.me;
    if (!botMember) {
      return message.reply(
        "I am not fully initialized. Please try again later."
      );
    }

    const botHighestRole = botMember.roles.highest;
    const userHighestRole = user.roles.highest;

    if (botHighestRole.position <= userHighestRole.position) {
      return message.reply(
        "I cannot ban this user because their role is higher or equal to mine."
      );
    }

    let reason = args.slice(2).join(" ") || "No reason provided.";

    try {
      await user.ban({ reason });
      message.reply(`Banned ${user.user.tag} for: ${reason}`);
    } catch (error) {
      console.error("Error banning user:", error);
      message.reply(
        "Failed to ban the user. Ensure the bot has the appropriate permissions and role hierarchy."
      );
    }
  }
});

client.on("messageCreate", async (message) => {
  if (!message.guild) return;

  if (message.content.startsWith("$unban")) {
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      return message.reply("You don't have permissions to unban members.");
    }

    let args = message.content.split(" ");
    if (args.length < 2) {
      return message.reply("Please use `$unban (user)` to unban a user.");
    }

    let userId = resolveUser(args[1], message);
    if (!userId) {
      return message.reply("User not found or invalid ID.");
    }

    let bannedUser = await message.guild.bans.fetch(userId).catch(() => null);
    if (!bannedUser) {
      return message.reply("User not found in the ban list.");
    }

    try {
      await message.guild.bans.remove(userId);
      message.reply(`Unbanned user with ID: ${userId}`);
    } catch (error) {
      console.error("Error unbanning user:", error);
      message.reply(
        "Failed to unban the user. Ensure the bot has the appropriate permissions and role hierarchy."
      );
    }
  }
});

client.on("messageCreate", async (message) => {
  if (!message.guild) return;

  if (message.content.startsWith("$timeout")) {
    if (!message.member.permissions.has("MUTE_MEMBERS")) {
      return message.reply("You don't have permission to timeout members.");
    }

    const args = message.content.trim().split(" ");
    if (args.length < 3) {
      return message.reply(
        "Please use `$timeout (user) (duration in minutes) (reason)` to mute a member."
      );
    }

    const username = args[1].trim();
    const durationInMinutes = parseInt(args[2]);

    if (isNaN(durationInMinutes) || durationInMinutes <= 0) {
      return message.reply("Please provide a valid duration in minutes.");
    }

    const reason = args.slice(3).join(" ").trim() || "No reason provided.";

    const targetUserId = await resolveUser(username, message);
    if (!targetUserId) {
      return message.reply("User not found.");
    }

    const targetMember = await message.guild.members
      .fetch(targetUserId)
      .catch(() => null);
    if (!targetMember) {
      return message.reply("User not found in the guild.");
    }

    try {
      const muteDuration = durationInMinutes * 60 * 1000;
      await targetMember.disableCommunicationUntil(
        Date.now() + muteDuration,
        reason
      );
      message.reply(
        `Timeouted <@${targetUserId}> for ${durationInMinutes} minutes. Reason: ${reason}`
      );
    } catch (error) {
      console.error("Error timeouting user:", error);
      message.reply(
        "Failed to timeout the user. Ensure the bot has the appropriate permissions and role hierarchy."
      );
    }
  }
});

client.on("messageCreate", async (message) => {
  if (!message.guild) return;

  if (message.content.startsWith("$untimeout")) {
    if (!message.member.permissions.has("MUTE_MEMBERS")) {
      return message.reply("You don't have permission to untimeout members.");
    }

    const args = message.content.trim().split(" ");
    if (args.length < 2) {
      return message.reply(
        "Please use `$untimeout (user)` to unmute a member."
      );
    }

    const username = args[1].trim();

    const targetUserId = await resolveUser(username, message);
    if (!targetUserId) {
      return message.reply("User not found.");
    }

    const targetMember = await message.guild.members
      .fetch(targetUserId)
      .catch(() => null);
    if (!targetMember) {
      return message.reply("User not found in the guild.");
    }

    try {
      if (!targetMember.communicationDisabledUntilTimestamp) {
        return message.reply(`<@${targetUserId}> is already unmuted.`);
      }

      await targetMember.disableCommunicationUntil(null);

      message.reply(`Untimeouted <@${targetUserId}>.`);
    } catch (error) {
      console.error("Error untimeouting user:", error);
      message.reply(
        "Failed to untimeout the user. Ensure the bot has the appropriate permissions and role hierarchy."
      );
    }
  }
});

//Miscellaneous

client.on("messageCreate", (message) => {
  if (message.content === "$topgg") {
    message.reply(
      "**If you're enjoying KingBot, please consider upvoting the bot and leaving a positive review on Top.gg!** \nVote: https://top.gg/bot/1168240045510107308/vote \nReview: https://top.gg/bot/1168240045510107308#reviews \nBot Page: https://top.gg/bot/1168240045510107308"
    );
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "$count") {
    let countDoc = await Count.findOne();
    if (!countDoc) {
      countDoc = new Count({ value: 0 });
    }

    countDoc.value += 1;
    await countDoc.save();

    message.reply(`The count is now ${countDoc.value}.`);
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$chatgptdevtool")) {
    const prompt = message.content.slice(9).trim();

    if (!prompt) {
      message.channel.send(
        "Please use `$chatgpt (prompt)` to send ChatGPT a prompt."
      );
      return;
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        max_tokens: 100,
        messages: [
          { role: "system", content: "Chat GPT is an AI Chatbot." },
          { role: "user", content: prompt },
        ],
      });

      message.reply(response.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
      message.channel.send("Failed to generate a response.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$geminidevtool")) {
    const prompt = message.content.slice("$gemini".length).trim();

    if (!prompt) {
      message.channel.send(
        "Please use `$gemini (prompt)` to send Gemini a prompt."
      );
      return;
    }

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      message.reply(text);
    } catch (error) {
      console.error("Error:", error);
      message.channel.send("Failed to generate a response.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$llama")) {
    const query = message.content.slice(6).trim();

    if (!query) {
      message.reply("Please provide a prompt.");
      return;
    }

    try {
      const response = await ollama.chat({
        model: "llama3:8b",
        messages: [{ role: "user", content: query, options: { num_ctx: 100 } }],
      });

      message.reply(response.message.content);
    } catch (error) {
      console.error("Error with Ollama API:", error);
      message.reply("There was an error processing your request.");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.content.startsWith("$zephyr")) {
    const query = message.content.slice(7).trim();

    if (!query) {
      message.reply("Please provide a prompt.");
      return;
    }

    try {
      const response = await ollama.chat({
        model: "stablelm-zephyr",
        messages: [{ role: "user", content: query, num_ctx: 100 }],
      });

      message.reply(response.message.content);
    } catch (error) {
      console.error("Error with Ollama API:", error);
      message.reply("There was an error processing your request.");
    }
  }
});

//Image Embeds

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 1") {
    message.reply({ embeds: [MojaveDesertImage1] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 2") {
    message.reply({ embeds: [MojaveDesertImage2] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 3") {
    message.reply({ embeds: [MojaveDesertImage3] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 4") {
    message.reply({ embeds: [MojaveDesertImage4] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 5") {
    message.reply({ embeds: [MojaveDesertImage5] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 6") {
    message.reply({ embeds: [MojaveDesertImage6] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 7") {
    message.reply({ embeds: [MojaveDesertImage7] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 8") {
    message.reply({ embeds: [MojaveDesertImage8] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 9") {
    message.reply({ embeds: [MojaveDesertImage9] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$img 0 10") {
    message.reply({ embeds: [MojaveDesertImage10] });
  }
});

//Movies

//Boehlke 2024

client.on("messageCreate", (message) => {
  if (message.content === "$movie 2GWGBU") {
    message.reply(
      "https://www.youtube.com/watch?v=mTJGYZonJEs&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie DWY") {
    message.reply(
      "https://www.youtube.com/watch?v=74x8ddmOuGE&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie FG") {
    message.reply(
      "https://www.youtube.com/watch?v=M7T5dUg-tvQ&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie KA") {
    message.reply(
      "https://www.youtube.com/watch?v=mYrNIa0TRdM&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie TCOL") {
    message.reply(
      "https://www.youtube.com/watch?v=FAIEsauYHbQ&t=1s&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie TFV") {
    message.reply(
      "https://www.youtube.com/watch?v=Vx9EVfSy3jE&ab_channel=FilmCampInABox"
    );
  }
});

//Boehlke 2023

client.on("messageCreate", (message) => {
  if (message.content === "$movie HLA") {
    message.reply(
      "https://www.youtube.com/watch?v=sNHxUNFNKPU&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie KC") {
    message.reply(
      "https://www.youtube.com/watch?v=uN7YJglqbH0&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie MM") {
    message.reply(
      "https://www.youtube.com/watch?v=TxGVbjbbqD0&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie MF") {
    message.reply(
      "https://www.youtube.com/watch?v=9OA4DHFvVG4&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie TWJ") {
    message.reply(
      "https://www.youtube.com/watch?v=q2EweIYOk6U&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie TFC") {
    message.reply(
      "https://www.youtube.com/watch?v=pFygb4GjvpY&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie RTMD") {
    message.reply(
      "https://www.youtube.com/watch?v=UGANwHGBJUc&ab_channel=BirbNotBorb"
    );
  }
});

//Deluca 2024

client.on("messageCreate", (message) => {
  if (message.content === "$movie 90DOD") {
    message.reply(
      "https://www.youtube.com/watch?v=IfjO86FaemU&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie EVSGV") {
    message.reply(
      "https://www.youtube.com/watch?v=ClG-puU3A3U&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie GD") {
    message.reply(
      "https://www.youtube.com/watch?v=BBTp862EHOI&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie PB") {
    message.reply(
      "https://www.youtube.com/watch?v=5BFEArg1kR8&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie SAETTW") {
    message.reply(
      "https://www.youtube.com/watch?v=vITmBOt4Xb4&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie TM") {
    message.reply(
      "https://www.youtube.com/watch?v=QJtKll8R32M&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie TBA") {
    message.reply(
      "https://www.youtube.com/watch?v=lAnT1xb1tXY&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie WRG") {
    message.reply(
      "https://www.youtube.com/watch?v=Ny8Tg664pNw&ab_channel=NoFoxHere"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie FRG") {
    message.reply("https://youtube.com/shorts/iLOPZQrw1QE?si=vsl_EQIyUgwaXb4o");
  }
});

//Gibson 2024

client.on("messageCreate", (message) => {
  if (message.content === "$movie 90DODD40") {
    message.reply(
      "https://www.youtube.com/watch?v=h_sJLpkI3qs&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie ARD") {
    message.reply(
      "https://www.youtube.com/watch?v=C7a_9UYLdJQ&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie THM") {
    message.reply(
      "https://www.youtube.com/watch?v=JTZqt1x4YUM&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie EICM") {
    message.reply(
      "https://www.youtube.com/watch?v=YEMSjycMGGw&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie EFFWD") {
    message.reply(
      "https://www.youtube.com/watch?v=hC7u0axQWGE&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie S49") {
    message.reply(
      "https://www.youtube.com/watch?v=S8y2aeTtgqw&ab_channel=FilmCampInABox"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$movie SPF") {
    message.reply(
      "https://www.youtube.com/watch?v=bJFGeV8BiTI&t=1s&ab_channel=FilmCampInABox"
    );
  }
});

//Class Memes

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 1") {
    message.reply({ embeds: [ClassMeme1] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 2") {
    message.reply({ embeds: [ClassMeme2] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 3") {
    message.reply({ embeds: [ClassMeme3] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 4") {
    message.reply({ embeds: [ClassMeme4] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 5") {
    message.reply({ embeds: [ClassMeme5] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 6") {
    message.reply({ embeds: [ClassMeme6] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 7") {
    message.reply({ embeds: [ClassMeme7] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 8") {
    message.reply({ embeds: [ClassMeme8] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 9") {
    message.reply({ embeds: [ClassMeme9] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 10") {
    message.reply({ embeds: [ClassMeme10] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 11") {
    message.reply({ embeds: [ClassMeme11] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 12") {
    message.reply({ embeds: [ClassMeme12] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 13") {
    message.reply({ embeds: [ClassMeme13] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 14") {
    message.reply({ embeds: [ClassMeme14] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 15") {
    message.reply({ embeds: [ClassMeme15] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 16") {
    message.reply({ embeds: [ClassMeme16] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 17") {
    message.reply({ embeds: [ClassMeme17] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 18") {
    message.reply({ embeds: [ClassMeme18] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 19") {
    message.reply({ embeds: [ClassMeme19] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 20") {
    message.reply({ embeds: [ClassMeme20] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 21") {
    message.reply({ embeds: [ClassMeme21] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 22") {
    message.reply({ embeds: [ClassMeme22] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 23") {
    message.reply({ embeds: [ClassMeme23] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 24") {
    message.reply({ embeds: [ClassMeme24] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 25") {
    message.reply({ embeds: [ClassMeme25] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 26") {
    message.reply({ embeds: [ClassMeme26] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 27") {
    message.reply({ embeds: [ClassMeme27] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 28") {
    message.reply({ embeds: [ClassMeme28] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 29") {
    message.reply({ embeds: [ClassMeme29] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 30") {
    message.reply({ embeds: [ClassMeme30] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 31") {
    message.reply({ embeds: [ClassMeme31] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 32") {
    message.reply({ embeds: [ClassMeme32] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 33") {
    message.reply({ embeds: [ClassMeme33] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 34") {
    message.reply({ embeds: [ClassMeme34] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 35") {
    message.reply({ embeds: [ClassMeme35] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 36") {
    message.reply({ embeds: [ClassMeme36] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 37") {
    message.reply({ embeds: [ClassMeme37] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 38") {
    message.reply({ embeds: [ClassMeme38] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 39") {
    message.reply({ embeds: [ClassMeme39] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "$classmeme 40") {
    message.reply({ embeds: [ClassMeme40] });
  }
});

//Informational Slash Commands Listeners

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "help") {
    return interaction.reply(
      "**List of commands:** \n\n**Information/Management** \n($)help = List of Commands \n($)kingbot = Bot Information \n($)ping = Bot Latency \n($)uptime = Bot Uptime \n($)version = Bot Version \n($)links = Bot Links \n($)topgg = Check out the bot's top.gg page \n\n**Entertainment** \n($)joke = Responds with a Random Joke \n($)longjoke = Responds with a Random Long Joke \n($)fact = Responds with a Random Fact \n($)ari = Responds with a Random Ari Quote \n\n**Economy** \n($)start = Create a KingBot account \n($)bal = Check the balance of yourself or another user \n($)daily = Claim your daily salary \n($)claim = Claim your hourly salary \n($)vote = Claim your top.gg upvote reward \n($)coinflip = Bet money on a coin flip \n($)pay = Transfer funds to another user \n($)leaderboard = View the global leaderboard \n\n**Stocks** \n($)buy = Purchase a stock at its market price (24/7) \n($)sell = Sell a stock at its market price (24/7) \n($)portfolio = View your stock portfolio \n($)stock = View information on a stock \n\n**Media** \n($)img = Sends an image in the server \n($)movie = Watch a movie in the server \n($)classmeme = Sends a class meme in the server \n\n**Miscellaneous** \n($)topgg = Check out the bot's top.gg page \n($)count = Adds 1 to the Count"
    );
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "kingbot") {
    return interaction.reply(
      `Hello. My name is KingBot, and I was a multipurpose Discord Bot created by Ari Khan. My main features are currently entertainment and media sharing. I am currently in active development. If you want information about the bot or have suggestions, please contact our lead developer, Ari Khan (<@786745378212282368>). \n\n **Creation Date:** October 29, 2023 \n**Made Public:**November 25, 2023** \n\n**Servers:** ${client.guilds.cache.size} \n**Users:** ${totalUsers}`
    );
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return interaction.reply(
      `Server Latency is **${Date.now() - interaction.createdTimestamp}ms**.`
    );
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "uptime") {
    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    return interaction.reply(
      `The bot has been online for ${days} ${
        days === 1 ? "day" : "days"
      }, ${hours} ${hours === 1 ? "hour" : "hours"}, ${minutes} ${
        minutes === 1 ? "minute" : "minutes"
      } and ${seconds} ${seconds === 1 ? "second" : "seconds"}`
    );
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "version") {
    return interaction.reply(
      "**Bot Version** \nThe following are all the versions of KingBot and its dependencies. \n\n**KingBot Version** \n1.4.10.8.5 \n\n**Discord.js Version** \n14.15.3 \n\n**NPM Version** \n10.8.1 \n\n**Node.js Version** \n20.10.0 \n\n**Node_Fetch Version** \n2.7.0 \n\n**DOTENV Version** \n16.4.5 \n\n**Nodemon Version** \n3.1.4 \n\n**Mongoose Version** \n8.4.4 \n\n**Yahoo Finance (2)** \n2.11.3"
    );
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "links") {
    return interaction.reply(
      "**Top.gg:** \nhttps://top.gg/bot/1168240045510107308 \n**GitHub Repository:** \nhttps://github.com/Proking4444/KingBot"
    );
  }
});

//Entertainment Slash Command Listeners

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "joke") {
    const random = Math.floor(Math.random() * randomJokeList.length);
    return interaction.reply(randomJokeList[random]);
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "longjoke") {
    const random = Math.floor(Math.random() * randomLongJokeList.length);
    return interaction.reply(randomLongJokeList[random]);
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "fact") {
    const random = Math.floor(Math.random() * randomFactList.length);
    return interaction.reply(randomFactList[random]);
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ari") {
    const random = Math.floor(Math.random() * randomAriQuoteList.length);
    return interaction.reply(randomAriQuoteList[random]);
  }
});

//Economy Slash Command Listeners

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "start") {
    let user = await User.findOne({ discordId: interaction.user.id });

    if (user) {
      return interaction.reply("You already have an account.");
    } else {
      user = await User.create({
        discordId: interaction.user.id,
        username: interaction.user.username,
        balance: 0,
        lastDailyCollected: null,
        lastClaimCollected: null,
      });

      return interaction.reply("Your account has been created.");
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "daily") {
    let user = await User.findOne({ discordId: interaction.user.id });

    if (!user) {
      return interaction.reply(
        "You need to create an account first with `/start`."
      );
    }

    const now = new Date();
    const nextDaily = new Date(user.lastDailyCollected);
    nextDaily.setHours(nextDaily.getHours() + 12);

    if (user.lastDailyCollected && now < nextDaily) {
      const timeUntilNextDaily = nextDaily - now;
      const hours = Math.floor((timeUntilNextDaily / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeUntilNextDaily / (1000 * 60)) % 60);
      const seconds = Math.floor((timeUntilNextDaily / 1000) % 60);

      return interaction.reply(
        `You have already collected your daily salary. Next daily available in ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
      );
    } else {
      user.balance += 100;
      user.lastDailyCollected = now;
      await user.save();

      return interaction.reply("You have collected your daily salary of $100.");
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "claim") {
    let user = await User.findOne({ discordId: interaction.user.id });

    if (!user) {
      return interaction.reply(
        "You need to create an account first with `/start`."
      );
    }

    const now = new Date();
    const nextClaim = new Date(user.lastClaimCollected);
    nextClaim.setHours(nextClaim.getHours() + 1);

    if (user.lastClaimCollected && now < nextClaim) {
      const timeUntilNextClaim = nextClaim - now;
      const minutes = Math.floor((timeUntilNextClaim / (1000 * 60)) % 60);
      const seconds = Math.floor((timeUntilNextClaim / 1000) % 60);

      return interaction.reply(
        `You have already collected your hourly wage. Next claim available in ${minutes} minutes and ${seconds} seconds.`
      );
    } else {
      user.balance += 10;
      user.lastClaimCollected = now;
      await user.save();

      return interaction.reply("You have collected your hourly salary of $10.");
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "vote") {
    let user = await User.findOne({ discordId: interaction.user.id });

    if (!user) {
      return interaction.reply(
        "You need to create an account first with `/start`."
      );
    }

    const apiKey = process.env.TOPGG_API_KEY;
    const botId = process.env.CLIENT_ID;

    try {
      const response = await fetch(
        `https://top.gg/api/bots/${botId}/check?userId=${interaction.user.id}`,
        {
          headers: { Authorization: apiKey },
        }
      );

      const data = await response.json();

      if (data.voted === 1) {
        const cooldownDuration = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
        const now = new Date();

        if (
          !user.lastVoteTimestamp ||
          now - user.lastVoteTimestamp >= cooldownDuration
        ) {
          user.balance += 500;
          user.lastVoteTimestamp = now;
          await user.save();

          return interaction.reply(
            `Thank you for voting! A $500 reward has been added to your account.`
          );
        } else {
          const remainingTime = new Date(
            user.lastVoteTimestamp.getTime() + cooldownDuration - now.getTime()
          );
          const hours = remainingTime.getUTCHours();
          const minutes = remainingTime.getUTCMinutes();
          const seconds = remainingTime.getUTCSeconds();

          return interaction.reply(
            `You have already voted recently. Next reward available in ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
          );
        }
      } else if (data.voted === 0) {
        return interaction.reply(
          "You haven't voted yet. Please vote for the bot at https://top.gg/bot/1168240045510107308/vote."
        );
      } else {
        return interaction.reply(
          "Unexpected response from Top.gg. Please try again later."
        );
      }
    } catch (error) {
      console.error(error);
      return interaction.reply(
        "There was an error checking your vote status. Please try again later."
      );
    }
  }
});

//Media Slash Command Listeners

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "img") {
    return interaction.reply(
      "**Sending Images** \nPlease use $img (code) (number) to send an image. \n\n**Image Codes** \n- Desert (0)"
    );
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "movie") {
    return interaction.reply(
      "**Watching Movies** \nPlease use `$movie (code)` to watch a movie. \n\n**Movie Codes:** \nBoehlke 2024 \n- 2 Guys Who Got Brutally Unalived (2GWGBU) \n- Destined With You (DWY) \n- Fixing Good (FG) \n- Khan Artist (KA) \n- The Circle Of Life (TCOL) \n- The First Victim (TFV) \n\nBoehlke 2023 \n- Happy Little Accidents (HLA) \n- King's Crypt (KC) \n- Monkey Murder (MM) \n- Mount Foreverrest (MF) \n- The Wild Jeffois (TWJ) \n- Thirst For Clout (TFC) \n- Recnac!! (The Miracle Drug) (RTMD) \n\nDeluca 2024 \n- 90 Days of Different (90DOD) \n- Ella vs Sohpie (Gun Version) (EVSGV) \n- Graffiti Day (GD) \n- Paint Ballistic (PB) \n- Sophie and Ella Travel the World (SAETTW) \n- The Mask (TM) \n- Thomas, Baron, Alice (TBA) \n- W Rube Goldberg (WRG) \n- Fire Rube Goldberg (FRG) \n\nGibson 2024 \n- 90 Days of Different: Day 40 (90DODD40) \n- A Ruff Day (ARD) \n- The Horror Movie (THM) \n- Epic Ice Cream Movie (EICM) \n- Every Fast Food Worker's Dream (EFFWD) \n- Slay 49 (S49) \n- Snowy Paintball Fight (SPF)"
    );
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "classmeme") {
    return interaction.reply(
      "**Sending Class Memes** \nPlease use $classmeme (number) to send a meme."
    );
  }
});

//Miscellaneous Slash Command Listeners

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "topgg") {
    return interaction.reply(
      "**If you're enjoying KingBot, please consider upvoting the bot and leaving a positive review on Top.gg!** \nVote: https://top.gg/bot/1168240045510107308/vote \nReview: https://top.gg/bot/1168240045510107308#reviews \nBot Page: https://top.gg/bot/1168240045510107308"
    );
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "count") {
    let countDoc = await Count.findOne();
    if (!countDoc) {
      countDoc = new Count({ value: 0 });
    }

    countDoc.value += 1;
    await countDoc.save();

    return interaction.reply(`The count is now ${countDoc.value}.`);
  }
});

//Functions

async function checkSelfBalance(message) {
  let user = await User.findOne({ discordId: message.author.id });

  if (!user) {
    message.reply("You need to create an account first with `$start`.");
  } else {
    message.reply(`Your current balance is $${user.balance.toFixed(2)}.`);
  }
}

async function checkBalance(userId, message) {
  let user = await User.findOne({ discordId: userId });

  if (!user) {
    message.reply("This user has not created an account yet.");
  } else {
    message.reply(
      `<@${userId}> has $${user.balance.toFixed(2)} in their account.`
    );
  }
}

async function handlePayCommand(message, args) {
  if (args.length !== 2) {
    message.reply("Please use `$pay (user) (amount)` to transfer funds.");
    return;
  }

  const targetUserId = resolveUser(args[0], message);
  const payAmount = parseInt(args[1]);

  if (!targetUserId) {
    message.reply("Please enter a valid recipient.");
    return;
  }

  if (isNaN(payAmount) || payAmount <= 0) {
    message.reply("Please enter a valid transfer amount.");
    return;
  }

  const senderId = message.author.id;

  if (senderId === targetUserId) {
    message.reply("You cannot pay yourself.");
    return;
  }

  const sender = await User.findOne({ discordId: senderId });
  const recipient = await User.findOne({ discordId: targetUserId });

  if (!sender) {
    message.reply("You need to create an account first with `$start`.");
    return;
  }
  if (!recipient) {
    message.reply("The recipient has not created an account yet.");
    return;
  }
  if (sender.balance < payAmount) {
    message.reply("Insufficient funds.");
    return;
  }

  sender.balance -= payAmount;
  recipient.balance += payAmount;

  await sender.save();
  await recipient.save();

  message.reply(
    `Successfully transferred $${payAmount} to <@${targetUserId}>.`
  );
}

async function resolveUser(query, message) {
  //Check for a mention
  if (message.mentions.users.size) {
    return message.mentions.users.first().id;
  }

  //Check for a user ID
  if (query.match(/^\d{17,19}$/)) {
    return query;
  }

  //Check for a username
  const guild = message.guild;
  const member = guild.members.cache.find(
    (member) => member.user.username === query
  );
  if (member) {
    return member.user.id;
  }

  return null; //Return if user not found
}

async function getBalanceLeaderboard(message) {
  const leaderboard = await User.find().sort({ balance: -1 }).limit(10);

  let leaderboardString = "";
  leaderboard.forEach((user, index) => {
    const username = user.username;
    const balance = user.balance.toFixed(2);

    leaderboardString += `${index + 1}. **${username}:** $${balance}\n`;
  });

  return leaderboardString;
}

async function fetchStockPrice(symbol) {
  try {
    const quote = await yahooFinance.quote(symbol);
    const price = quote.regularMarketPrice;

    return price;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function getStockName(symbol) {
  try {
    const stockInfo = await yahooFinance.quote(symbol);
    return stockInfo.longName || stockInfo.shortName || symbol;
  } catch (error) {
    console.error("Error fetching stock name:", error);
    return symbol;
  }
}

async function checkSelfNetWorth(message) {
  const userId = message.author.id;

  try {
    const user = await User.findOne({ discordId: userId });

    if (!user) {
      message.reply("You need to create an account first with `$start`.");
      return;
    }

    let netWorth = user.balance;

    if (user.stocks && user.stocks.length > 0) {
      for (const stock of user.stocks) {
        const currentPrice = await fetchStockPrice(stock.symbol);
        if (currentPrice !== null) {
          netWorth += currentPrice * stock.amount;
        }
      }
    }

    message.reply(`Your current net worth is $${netWorth.toFixed(2)}.`);
  } catch (error) {
    console.error("Error fetching net worth:", error);
    message.reply("Error fetching net worth. Please try again later.");
  }
}

async function checkUserNetWorth(userId, message) {
  try {
    let user = await User.findOne({ discordId: userId });

    if (!user) {
      message.reply("This user has not created an account yet.");
      return;
    }

    let netWorth = user.balance;

    if (user.stocks && user.stocks.length > 0) {
      for (const stock of user.stocks) {
        const currentPrice = await fetchStockPrice(stock.symbol);
        if (currentPrice !== null) {
          netWorth += currentPrice * stock.amount;
        }
      }
    }

    message.reply(`<@${userId}> has a net worth of $${netWorth.toFixed(2)}.`);
  } catch (error) {
    console.error("Error fetching net worth:", error);
    message.reply("User not found.");
  }
}

async function fetchStockCurrency(symbol) {
  try {
    const quote = await yahooFinance.quote(symbol);
    if (quote && quote.currency) {
      return quote.currency;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching stock currency:", error);
    return null;
  }
}

async function fetchExchangeRate(fromCurrency, toCurrency) {
  try {
    const result = await yahooFinance.quote(`${fromCurrency}${toCurrency}=X`);
    if (result && result.regularMarketPrice) {
      return result.regularMarketPrice;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return null;
  }
}

//Temporary

client.on("messageCreate", async (message) => {
  const authorizedUserIds = ["786745378212282368", "737353026976612374"];
  const pingInterval = 1100;

  const usersToPing = [
    "961083467469291590",
    "1182066230715224188",
    "1183257700415578174",
    "1249160827777318987",
    "818622068899315762",
    "1233218917078532237",
    "1253105559373353024",
    "1249013591642996890",
  ];

  if (
    message.content.startsWith("$startping") &&
    authorizedUserIds.includes(message.author.id)
  ) {
    let currentIndex = 0;
    let pinging = true;

    const pingIntervalId = setInterval(() => {
      if (!pinging) return;

      const pingedUserId = usersToPing[currentIndex];
      const pingedUser = client.users.cache.get(pingedUserId);
      if (pingedUser) {
        message.channel.send(`${pingedUser} you've been pinged!`);
      }

      //Move to the next user
      currentIndex = (currentIndex + 1) % usersToPing.length;
    }, pingInterval);

    client.on("messageCreate", async (stopMessage) => {
      if (
        stopMessage.content === "$stopping" &&
        authorizedUserIds.includes(stopMessage.author.id)
      ) {
        pinging = false;
        clearInterval(pingIntervalId);
        message.channel.send("Stopped pinging users.");
      }
    });
  }
});

//Keep at bottom.

(async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB.");

    client.login(process.env.TOKEN);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
})();
