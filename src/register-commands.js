import dotenv from 'dotenv';
import { REST, Routes } from 'discord.js';

dotenv.config();

const commands = [
  {
    name: "kingbot",
    description: "Bot Information",
  },
  
  {
    name: "ping",
    description: "Bot Latency",
  },

  {
    name: "uptime",
    description: "Bot Uptime",
  },

  {
    name: "version",
    description: "Bot Version",
  },

  {
    name: "links",
    description: "Bot Links",
  },

  {
    name: "joke",
    description: "Responds with a Random Joke",
  },

  {
    name: "longjoke",
    description: "Responds with a Random Long Joke",
  },

  {
    name: "fact",
    description: "Responds with a Random Fact",
  },

  {
    name: "ari",
    description: "Responds with a Random Ari Quote",
  },

  {
    name: "img",
    description: "Sends an image in the server",
  },

  {
    name: "movie",
    description: "Watch a movie in the server",
  },

  {
    name: "classmeme",
    description: "Sends a class meme in the server",
  },

  {
    name: "topgg",
    description: "Check out the bot's top.gg page",
  },

  {
    name: "count",
    description: "Adds 1 to the Count",
  },

  {
    name: "start",
    description: "Creates a KingBot Account",
  },

  {
    name: "daily",
    description: "Collect your daily salary",
  },

  {
    name: "claim",
    description: "Collect your hourly wage",
  },

  {
    name: "vote",
    description: "Vote for KingBot on Top.gg",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });

    console.log("Slash commands were registered successfully!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();