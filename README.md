# MCBotStuff
Have you been learning how to make a minecraft bot, but you don't know what to do with it? Well, check this out!

# How to make a minecraft bot?
I know about 3 libraries which you can use for creating a bot. They're called mineflayer, minecraft-protocol and mcprotocollib. Probably there are more, but these are the most popular ones. Mineflayer and minecraft-protocol are in javascript (node.js), mcprotocollib is in Java. Look them up to get started!

# Why should I make a MC bot?
Well, first of all, for fun. A Minecraft bot can help you with a lot of things, you can count entities around you, blocks, players, etc. It's a fun thing to do, and it's not even that hard, but still a good challenge.

# What is this ,,MCBotStuff'' (and how to use)?
This is a bot which I made with mineflayer. To use it, you have to edit the index.js file, where it says ,,host'', you have to put the IP from IP:Port, and then the port below, if it's not 25565. It has a few things in it which can help you when working with IP addresses and Minecraft servers. What I mean by ,,working with minecraft servers'' is that this bot has a command which you can use to get information about a minecraft server, in-game. All you have to do is type ,-srvinfo IPHERE', and it will type a lot of stuff about that server to the in-game chat.

# Can I help making this better?
Yes, you can. Go to https://github.com/Miniller/MCBotStuff/pulls to add a new pull request. You can request things to be added, fixed, and you can upload your code which I will look into and probably upload it to Github. If you just look at my code and see stuff which just don't seem good, that's because I wasn't aiming at making the cood look nice but to make it actually work.

# How long does it take to make something like this?
I made this in a day, but I wasn't doing it all day long. When something didn't work at all, I tried to fix it myself - didn't work, then I took a break, looked up the question and fixed it. If you learnt a lot about mineflayer the only hard thing should be just to find the nodejs addons you need for your projects. `request`(outdated, you might want to use `bent` instead) to get HTML data (you can get JSON data which will be parsed automatically, which is a great thing), `dns` for something like the resolve command. You just gotta look it up, see the examples and learn. It's really fun, trust me.
