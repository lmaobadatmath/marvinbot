const Discord = require("discord.js");
module.exports = {
  name: "ping",
  description: "Get the latency of the bot.",
  usage: {},
  examples: {},
  aliases: [ "pong", "latency", "uptime" ],
  checkArgs: (args) => !args.length,
  execute(message, client, args, config, gdb, db, ws) {
   const timeTaken = Date.now() - message.createdTimestamp;
   message.channel.send({ embed: {
    title: " Pong!",
    description: [`*Message returned in* *`+timeTaken + '* *ms*.'    ].join("\n"),
    footer: { text: "Developed by lmaobadatmath, https://github.com/lmaobadatmath/marvinbot"},
    timestamp: new Date()
  }})
}}
