require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

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

client.on('ready', (c) => {
    console.log(`${c.user.tag} is Online!`);
});

//Statements

let count = 0

//Embeds

const mojaveDesertImage1 = new EmbedBuilder()
    .setTitle('Mojave Desert')
    .setImage('https://i.postimg.cc/4xNJ91Q8/Mojave-Desert-4.jpg');

//Lists

const randomJokeList = [
    '**Why don\'t scientists trust atoms?** \nBecause they make up everything.',
    '**Why do we tell actors to \"break a leg?\"** \nBecause every play has a cast!',
    '**Where did the music teacher leave her keys?** \nIn the piano!',
    '**Why was six afraid of seven?** \nBecause seven eight nine.',
    '**What did the pirate say when he turned 80?** \nAye matey.',
    '**Why did the picture go to jail?** \nBecause it was framed.',
    '**How does NASA organize a party?** \nThey planet.',
    '**What do you call a sad cup of coffee?** \nA Depresso.',
    '**Why don\'t eggs tell jokes?** \nThey\'d crack each other up.',
    '**What\'s a ninja\'s favorite type of shoes?** \nSneakers.',
    '**Why did the doctor get mad?** \nHe ran out of patients!',
    '**What do attorneys wear to court?** \nLaw-suits!',
    '**Why did the robber jump in the shower?** \nHe wanted to make a clean getaway.',
    '**What do you call a bear without any teeth?** \nA gummy bear.',
    '**Why shouldn\'t you write with a broken pencil?** \nBecause it\'s pointless.',
    '**What kind of music do planets like?** \nNeptunes.',
    '**How do trees access the internet?** \nThey log in.',
    '**Do you want to hear a construction joke?** \nSorry, I\'m still working on it.',
    '**Why did the bullet end up losing his job?** \nHe got fired.',
    '**Where do young trees go to learn?** \nElementree school.',
    '**What do you give to a sick lemon?** \nLemon aid!',
    '**Why doesn\'t the sun go to college?** \nBecause it has a million degrees!',
    '**What is a computer\'s first sign of old age?** \nLoss of memory.',
    '**Why were the fish\'s grades so bad?** \nIt was below sea level.',
    '**Why did the gym close down?** \nIt just didn\'t work out!'
        // Keep adding!
];

const randomLongJokeList = [
    'A pair of cows were talking in the field. One says, "Have you heard about the mad cow disease that\'s going around?" \n"Yeah," the other cow says. \n"Makes me glad I\'m a penguin."',
    'Two Hollywood stars ran into each other at the door of their psychiatrist\'s office.\n"Hello, there," said one. "Are you coming or going?" \n"If I knew that," said the other, "I wouldn\'t be here."',
    'At a party, a young wife admonished her husband, "That\'s the fourth time you\'ve gone back for ice cream and cake. Doesn\'t it embarrass you?" \n"Why should it?" answered her spouse. "I keep telling them it\'s for you."',
    'A grasshopper walks into a bar. The bartender looks at him and says, "Hey, they named a drink after you!" \n"Really?" replies the grasshopper. "There\'s a drink named Stan?"',
    'A teenager brings her new boyfriend home to meet her parents. They\'re appalled by his haircut, his tattoos, his piercings. \nLater, the girl\'s mom says, "Dear, he doesn\'t seem to be a very nice boy." \n"Oh, please, Mom!" says the daughter. "If he wasn\'t nice, would he be doing 500 hours of community service?"',
    'Every time a little boy went to a playmate\'s house, he found the friend\'s grandmother deeply engrossed in her Bible. Finally his curiosity got the better of him. \n"Why do you suppose your grandmother reads the Bible so much?" he asked. \n"I\'m not sure," said his friend, "but I think she\'s cramming for her finals."',
    'Rushing up to a large airline\'s ticket counter, a man gasped, "Miss, please help me. I have to get to Chicago in the worst way!" \nThe clerk calmly pointed to her left and said, "Sir, that would be the airline next to us."',
    'Two hunters are out in the woods when one of them collapses. He\'s not breathing and his eyes are glazed. The other guy whips out his cell phone and calls 911. \n"I think my friend is dead!" he yells. "What can I do?" \nThe operator says, "Calm down. First, let\'s make sure he\'s dead." \nThere\'s a silence, then a shot. Back on the phone, the guy says, "Okay, now what?"',
    'A young boy enters a barber shop and the barber whispers to his customer, "This is the dumbest kid in the world. Watch while I prove it to you." \nThe barber puts a dollar bill in one hand and two quarters in the other, then calls the boy over and asks, "Which do you want, son?" The boy takes the quarters and leaves. \n"What did I tell you?" said the barber. "That kid never learns!" \nLater, when the customer leaves, he sees the same young boy coming out of the ice cream parlor. \n"Hey, son! May I ask you a question? Why did you take the quarters instead of the dollar bill?" \nThe boy licked his cone and replied, \n"Because the day I take the dollar the game is over!"',
    'A guy said to God, "God, is it true that to you a billion years is like a second?" \nGod said yes. \nThe guy said, "God, is it true that to you a billion dollars is like a penny?" \nGod said yes. \nThe guy said, "God, can I have a penny?" \nGod said, "Sure, just a second."',
    'Putin is held hostage by a terrorist. A Russian truckdriver stops at the back of a long queue on the motorway. He sees a policeman walking down the line of stopped cars to briefly talk to the drivers. \nAs the policeman approaches the truck, the truckdriver rolls down his window and asks, "What\'s going on?" \nPoliceman: "A terrorist is holding Putin hostage in a car. He\'s demanding 10 million rubles, or he\'ll douse Putin in petrol and set him on fire. So we\'re asking drivers for donations." \nDriver: "Oh, ok. How much do people donate on average?" \nPoliceman: "About a gallon."',
    'A taxi passenger tapped the driver on the shoulder to ask him a question. \nThe driver screamed, lost control of the car, nearly hit a bus, went up on the footpath, and stopped inches from a shop window. \nFor a second, everything was quiet in the cab. Then the driver said, "Look, mate, don\'t ever do that again. You scared the living daylights out of me!" \nThe passenger apologized and said, "I didn\'t realize that a little tap would scare you so much." \nThe driver replied, "Sorry, it\'s not really your fault. Today is my first day as a cab driver — I\'ve been driving a funeral van for the last 25 years."'
    // Keep adding!
];

const randomFactList = [
    'The scientific term for brain freeze is "sphenopalatine ganglioneuralgia."',
    'Canadians say "sorry" so much that a law was passed in 2009 declaring that an apology can\'t be used as evidence of admission to guilt.',
    'Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.',
    'The only letter that doesn\'t appear on the periodic table is J.',
    'The ten highest mountain summits in the United States are all located in Alaska.',
    'Daniel Radcliffe was allergic to his Harry Potter glasses.',
    'A single strand of Spaghetti is called a "Spaghetto."',
    'Hershey\'s Kisses are named after the kissing sound the deposited chocolate makes as it falls from the machine on the conveyor belt.',
    'To leave a party without telling anyone is called in English a "French Exit." In French, it\'s called a “partir à l\'anglaise,” to leave like the English.',
    'The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation.',
    'In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt.',
    'The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarfs.',
    'If you point your car keys to your head, it increases the remote\'s signal range.',
    'Fruit stickers are edible, though the same as any fruit; washing prior to eating is recommended. The glue used for them is regulated by the FDA.',
    'The scientific name for Giant Anteater is Myrmecophaga Tridactyla. This means "ant eating with three fingers."',
    'The flashes of colored light you see when you rub your eyes are called "phosphenes."',
    'At birth, a baby panda is smaller than a mouse.',
    'Iceland does not have a railway system.',
    'Forrest Fenn, an art dealer and author hid a treasure chest in the Rocky Mountains worth over 1 million dollars. It was found approximately a decade later, in 2020.',
    'The world\'s largest grand piano was built by a 15-year-old in New Zealand.',
    'The tongue is the only muscle in one\'s body that is attached from one end.',
    'There is a company in Japan that has schools that teach you how to be funny. The first one opened in 1982. About 1,000 students take the course each year.',
    'The Lego Group is the world\'s most powerful brand. There are more Lego Minifigures than there are people on Earth.',
    'The Bagheera kiplingi spider was discovered in the 1800s and is the only species of spider that has been classified as vegetarian.',
    'The Roman-Persian wars are the longest in history, lasting over 680 years. They began in 54 BC and ended in 628 AD.',
    'If you translate “Jesus” from Hebrew to English, the correct translation is "Joshua." The name "Jesus" comes from translating the name from Hebrew to Greek to Latin to English.',
    'The first service animals were established in Germany during World War I. References to service animals date as far back as the mid-16ᵗʰ Century.',
    'The voice actor of SpongeBob and the voice actor of Karen, Plankton\'s computer wife, have been married since 1995.',
    'An estimated 50% of all gold ever mined on Earth came from a single plateau in South Africa: Witwatersrand.',
    '75% of the world\'s diet is produced from just 12 plants and five different animal species.',
    'Apple paid a couple $1.7 million dollars for their plot of land, which was only worth $181,700.',
    'Sour Patch Kids are from the same manufacturer as Swedish Fish. The red Sour Patch Kids are the same candy as Swedish Fish, but with sour sugar.',
    'The largest Japanese population outside of Japan stands at 1.6 million people who live in Brazil.',
    'IKEA is an acronym that stands for Ingvar Kamprad Elmtaryd Agunnaryd, which is the founder\'s name, the farm where he grew up, and his hometown.',
    'In 2009, Stephen Hawking held a reception for time travelers but didn\'t publicize it until after. This way, only those who could time travel would be able to attend. Nobody else attended.',
    'There are less than 30 ships in the Royal Canadian Navy. This is less than most third-world countries.',
    'There is an island called "Just Enough Room," where there\'s just enough room for a tree and a house.',
    'People who post their fitness routine on Facebook are more likely to have psychological problems.',
    'Standing around burns calories. On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.',
    'Although GPS is free for the world to use, it costs $2 million per day to operate. The money comes from American tax revenue.',
    'In World War II, Germany tried to collapse the British economy by dropping millions of counterfeit bills over London.',
    'The human eye is so sensitive that if the Earth were flat and it was a dark night, a candle\'s flame could be seen from 30 miles away.',
    'In 2007, Scotland spent £125,000 devising a new national slogan. The winning entry was: "Welcome to Scotland."',
    'Until 2016, the "Happy Birthday" song was not for public use. Meaning that prior to 2016, the song was copyrighted, and you had to pay a license to use it.',
    'When mice live in the wild, they typically only live for about six months.',
    'There is a punctuation mark used to signify irony or sarcasm that looks like a backward question mark: ⸮',
    'Lettuce is a member of the sunflower family.',
    'Researchers have found that flossing your teeth can help your memory. Flossing prevents gum disease, which prevents stiff blood vessels, which cause memory issues.',
    'A wildlife technician, Richard Thomas, took the famous tongue twister, "how much wood would a woodchuck chuck if a woodchuck could chuck wood" and calculated a rough estimate of what the answer would actually be. It came out to be around 700 pounds.',
    'Swedish meatballs originated from a recipe King Charles XII brought back from Turkey in the early 1800s.',
    'Scientists discovered sharks living in an active underwater volcano. Divers cannot investigate because they would get burns from the acidity and heat.',
    'There is a town in Nebraska called Monowi with a population of one. The only resident is a woman who is the Mayor, Bartender, and Librarian.',
    'The Ethiopian calendar is 7.5 years behind the Gregorian calendar due to the fact that it has 13 months.',
    'In 1994, the company that had a patent on GIFs tried to charge a fee for using GIFS. The PNG was invented as an alternative, and the company backed down.',
    'China is spending $3 billion dollars to build panda-shaped solar farms in order to get more young people interested in renewable energy.',
    'The average American child is given $3.70 per tooth that falls out.',
    'To properly write adjectives in order, you would list them by amount, value, size, temperature, age, shape, color, origin, and material.',
    '"Opposites attract" is a common myth. People are actually attracted to people who look like family members or those with a similar personality type.',
    'The unique smell of rain actually comes from plant oils, bacteria, and ozone.',
    'If you heat up a magnet, it will lose its magnetism.',
    'Cruise ships have morgues that can store up to 10 bodies at once. The average amount of people that die on cruise ships per year is 200.',
    'During WWII, a U.S. naval destroyer won a battle against a Japanese submarine by throwing potatoes at them. The Japanese thought they were grenades.',
    'A man with severe OCD and a phobia of germs attempted to commit suicide with a gun to his head. Instead of killing him, the bullet eliminated his mental illness without any other damage.',
    'Since 1955, 50% of the population of Niger is consistently under 16 years old. The total current population is 21,600,000.',
    'The oldest unopened bottle of wine was found in a Roman tomb that is over 1,650 years old.',
    'More tornadoes occur in the United Kingdom per square mile than in any other country in the world.',
    'Owners of personalized license plates in Uganda are facing a tax increase of over 300%, which will raise the tax from $1,498 to $5,992.',
    'Times Square was originally called Longacre Square until it was renamed in 1904 after The New York Times moved its headquarters to the newly built Times Building.',
    'There is a statue of Tesla in Silicon Valley that radiates free Wi-Fi. It was done as an homage to his vision for wireless communication.',
    'It snows metal on planet Venus! There are two types that have been found, galena and bismuthinite.',
    'Only official members of federally accepted Native American tribes may legally possess or collect eagle feathers. If a normal citizen has one, it is illegal.',
    'By the time they have been retired for 2 years, 78% of former NFL players have gone bankrupt or are under financial stress because of joblessness or divorce.',
    'In order to protest the high tariffs enforced by a U.K. censorship board, a filmmaker sent in a 10-hour "movie" of white paint drying. They had to watch the entire film.',
    '50% of apartments in Los Angeles don\'t come with a fridge. This is legal, as fridges are considered an "amenity," and therefore, landlords are not required to provide one.',
    'Norway has a 25-year statute of limitation on murder. This means if the murder happened more than 25 years ago, they cannot be charged.',
    'There are only two countries in the world that have the color purple in their flags: Nicaragua and Dominica.',
    'There is a village in Russia called Tsovkra where every resident can tightrope walk. It is a tradition that dates back over 100 years, but no one knows how it started.',
    'Brain fibers lose 10% of their total length every decade. They can shrink even more so under acute stress.',
    'Chewing gum boosts mental proficiency and is considered a better test aid than caffeine, but nobody knows why.',
    'Even though Irish is the official language of Ireland, Polish is more widely spoken.',
    'During the 1908 Olympics in London, the Russians showed up 12 days late due to the fact that they were using the Julian calendar instead of the Gregorian calendar.',
    'Non-violent attempts to escape Mexican prisons are not punished because "it\'s human nature to want freedom."',
    'On one slow news day on April 18, 1930, a BBC radio announcer blatantly said, "there is no news."',
    'Sudan has more pyramids than any country in the world.',
    'William Shakespeare had a curse engraved on his tombstone to prevent anyone from moving his bones.',
    'Valentine\'s Day in South Korea is a little different. Only women give gifts, not men.',
    'Russia has the most man-made satellites in orbit, with 1,324. There is a total of 2,271, and the U.S. is in second place at 658.',
    '3 inches of ice can support one person on foot. 4 inches can support a group of people, single file. 36 inches can support up to 110 tons of weight.',
    'The total spend on adult Halloween costumes each year in America is $1.5 billion.',
    'The first world leader to create a YouTube channel was the British Prime Minister, Tony Blair, who made his account in 2007.',
    'Sweden has the most islands in the world, with 221,800 islands.',
    'More than 90% of survivors of the 9/11 terror attacks delayed evacuation to save their work, shut down computers, change shoes, or visit the bathroom.',
    'Approximately 1,000,000 dogs in the U.S. are named as the heirs of their owners\' wills.',
    'It snowed in the Sahara desert for 30 minutes on February 18, 1979.',
    'Cranes are built using cranes.',
    'The smallest thing ever photographed is the shadow of an atom.',
    'If you ate nothing but rabbit meat, you would die from protein poisoning. This would be a mixture of too much protein and an absence of fat in the diet.',
    'There is an uninhabited island in the Bahamas known as Pig Beach, which is populated entirely by swimming pigs.',
    'The highest body count in film history goes to "Lord of the Rings: Return of the King" with 836 on-screen deaths.',
    'The name for the shape of Pringles is called "Hyperbolic Paraboloid."',
    'People who donate blood in Sweden are sent a text message each time their blood saves a life.',
    'Credit card EMV chip technology has been around since 1986. It was first implemented in France, with Germany following shortly after.',
    'Greenland voted to leave the European Union in 1985 and has not rejoined since.',
    'During the first live iPhone presentation, Steve Jobs had to frequently switch phones behind his desk. Otherwise, it would run out of RAM and crash.',
    'In the 1980s, the founder of Pringles, Fredric Baur, requested to be buried in a Pringles can. His children honored the request.',
    'In Svalbard, a remote Norwegian island, it is illegal to die.',
    'During 1943, U.S. officials imposed a short-lived ban on sliced bread as a wartime conservation measure. It lasted less than 3 months.',
    'Dinosaurs would swallow large rocks which stayed in their stomach to help churn and digest food.',
    '1912 saw the last Olympic gold medals made entirely out of gold.',
    'Before Apple bought Siri, it was originally going to be released as an app for Android & Blackberry.'  
];

const randomAriQuoteList = [
    '**"WOW OMG! It\'s a United Arab Emirates Airbus A380, and it has two floors!"** \n(Ari, pointing to the sky. November 2023.)',
    '**"i tryed playing an airplane game \nbut its p2w \nand it suks \nnot even that realistic \ni hit the ground at 50 kmph and my 2 passengers were still intact enought to get off the plane and pay me 10 grand"** \n(Ari, random blurb. September 2022.)',
    '**"is this jade or candice or chloe"** \n(Ari, asking question. September 2022.)',
    '**"What\'s your name again?"** \n(Ari, forgetting Chloe\'s name during a class activity. 2021-2022.)',
    '**"bruh \nthe admission to kindergarten law is 125.9 while the murder ones are all 125.10"** \n(Ari, reading the list of laws in New York State. February 2023.)',
    '**"this ukranian guy wants sympathy in chess \nand keeps asking if i\'m russian"** \n(Ari, playing chess. February 2023.)',
    '**"because lowering the wealth gap is communist"** \n(Ari, being political. January 2023.)',
    '**"should i troll the survey people \nby writing a paragraph"** \n(Ari, proceeding to troll. January 2023.)',
    '**"if i write something anti capitalist will it be censored"** \n(Ari, being cautious. January 2023.)',
    '**"im a hippocrite"** \n(Ari, contradicting himself. December 2022.)',
    '**"im looking at my life \nand \n i\'m realizing \nthat i got much more older in the last 2 months"** \n(Ari, looking back. November 2022.)',
    '**"people who think they are old die faster \napparently"** \n(Ari, realizing he won\'t live very long. November 2022.)',
    '**"don\'t name ur kids marie jeanne \nor aurelie \nor krystel \nor marie berthe \nor paquerrete \nor hormidas \nor alfreda \nor Jeanne \'arc \nor Fabiola \nor they will be failure"** \n(Ari, reading list of poorest names. November 2022.)',
    '**"if you want sucessful child, name them \nRes \nIngo"** \n(Ari, reading list of richest names. November 2022.)',
    '**"Let\'s start a discussion. \nSo, there are some quarks, up quark, down quark, strange quarks, magic quarks, and like two others. \nThey\'re make up protons and neutrons, \nand are made up of strings themselves..."** \n(Ari, talking about quarks. November 2023.)',
    '**"Some people say that the universe is shaped like a brain."** \n(Ari, discussing the shape of the universe. November 2023.)',
    '**"Black Dwarf Stars come from White Dwarfs but haven\'t been proven. \nWhat???"** \n(Ari, discussing dwarf stars. November 2023.)',
    '**"It\'s the "goodest" one."** \n(Ari, speaking fake English. September 2023.)',
    '**"I swear it\'s water bro!"** \n(Ari, speaking to the police. November 2023.)'
    // Keep adding!
];

const randomImageList = [
    mojaveDesertImage1
];

//Information/Management

client.on('messageCreate', (message) => {
    if (message.content === '$help') {
        message.reply('**List of commands:** \n\n**Information/Management** \n($)help = List of Commands \n($)kingbot = Bot Information \n($)ping = Server Latency \n\n**Entertainment** \n($)joke = Responds with a Random Joke \n($)longjoke = Responds with a Random Long Joke \n($)fact = Responds with a Random Fact \n($)ari = Responds with a Random Ari Quote \n\n**Miscellaneous** \n($)count = Adds 1 to the Count');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$kingbot') {
        message.reply('Hi. My name is KingBot, and I was a bot created by Ari for organizational purposes. I am currently in active development. If you want information about the bot or have bot suggestions, please contact Ari (Proking4).');
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$ping') {
        message.reply(`Server Latency is ${Date.now() - message.createdTimestamp}ms.`);
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

//Miscellaneous
    
client.on('messageCreate', (message) => {
    if (message.content === '$ari') {
        const random = Math.floor(Math.random() * randomAriQuoteList.length);
        message.reply(randomAriQuoteList[random]);
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$count') {
        count = count + 1;
        message.reply(`The count is now ${count}.`);
    }
});

client.on('messageCreate', (message) => {
    if (message.content === '$randomimg') {
        const random = Math.floor(Math.random() * randomImageList.length);
        message.reply(randomImageList[random]);
    }
});

//Slash Commands Listeners

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'help') {
        return interaction.reply('**List of commands:** \n\n**Information/Management** \n($)help = List of Commands \n($)kingbot = Bot Information \n($)ping = Server Latency \n\n**Entertainment** \n($)joke = Responds with a Random Joke \n($)longjoke = Responds with a Random Long Joke \n($)fact = Responds with a Random Fact \n($)ari = Responds with a Random Ari Quote \n\n**Miscellaneous** \n($)count = Adds 1 to the Count');
      }
});

//Keep at bottom.

client.login(process.env.TOKEN);