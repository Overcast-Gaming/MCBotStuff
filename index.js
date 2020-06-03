
const sleep = require("system-sleep");
var cmdhandler = require('./cmdhandler.js')

const events = require('events');
events.EventEmitter.setMaxListeners = Infinity;
var mineflayer = require('mineflayer');
var options = {
  host: "server.ip",
  //port: 25565,
	version: "1.15.2",
  username: "Username"
};
var bot = mineflayer.createBot(options);
bindEvents(bot)
//#endregion
var code = 0;

function generateCode() {
    var rndm = Math.round(Math.random() * (999 - 100) + 100) 
    console.log(""+rndm)
    return rndm
  }
generateCode()
var spawned = false
var debounce = false
exports.setDe = function(bool) {
  debounce = bool
}

exports.getCode = function() {
  return code
}

function bindEvents(bot) {
	

	bot.on("error", err => {
		console.log(`bot crashed for reason:\n${err}`)
		process.exit()
	})

  bot.on('spawn',()=>{
    if (!spawned) {
	    if (bot.host === 'kaboom.pw' || bot.host === 'play.kaboom.pw') {
		    bot.end()
		    console.log('Please dont make bots for that server, there are enough of them already!')
		    process.exit(0)
	    }
      spawned=true
      bot.chat("Usage: -ipinfo IP option (e.g -ipinfo 123.123.123.123 (option either nothing, or 'url'))")
      sleep(250)
      bot.chat("-resolve DNS (e.g -resolve google.com)")
      sleep(250)
      bot.chat("-srvinfo IP (minecraft server info)")
      setInterval(()=>{
        bot.chat("Usage: -ipinfo IP option (e.g -ipinfo 123.123.123.123 (option either nothing, or 'url'))")
        sleep(250)
        bot.chat("-resolve DNS (e.g -resolve google.com)")
        sleep(250)
        bot.chat("-srvinfo IP (minecraft server info)")
      },120000)
    }
  })
  var prefix = "-"
  bot.on("chat",(username,message)=>{
    if (username==bot.username) return;
    if (debounce){ return}
    if (message.startsWith(prefix)) {
      cmdhandler.handleCmd(bot,message)
    }

  })
}
