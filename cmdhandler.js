var ipinfo = require('./ipinfo.js')
var resolve = require('./resolve.js')
var mcinfo = require("./mcinfo.js")
var index = require('./index.js')
var sleep = require('system-sleep')

function handleCmd(bot,cmd) {
    args = cmd.split(" ")
    cmd = args.shift()
    switch (cmd.toLowerCase().slice(1)) {
        case "ipinfo":
            index.setDe(true)
            if (args.length>2) {
                bot.chat("Incorrect usage! -ipinfo IP")
                index.setDe(false)
                break;
              }
              if (args.length==2) {
                options = args[1]
              } else {
                options = null
              }
              ipinfo.ipinfo(bot, args[0], options)
            break;
        case "resolve":
            index.setDe(true)    
            if (args.length!=1) {
                bot.chat("Incorrect usage! -resolve DNS")
                index.setDe(false)
                break;
            } else {
                resolve.resolve(bot,args[0])
            }
            break;
        case "srvinfo":
            index.setDe(true)
            if (args.length!=1) {
                bot.chat("Incorrect usage! -srvinfo IP")
                index.setDe(false)
                break
            } else {
                mcinfo.srvInf(bot,args[0])
            }
            break;
        case "leave":
            index.setDe(false)
            if (args.length==1) {
                console.log(typeof(index.getCode().toString()))
                console.log(index.getCode() == index.getCode().toString())
                if (args[0].toString() == index.getCode().toString()) {
                    bot.quit() 
                    sleep(1500)
                    process.exit()
                }
            }
        default:
            bot.chat("Unknown command.")
            break;
    }
}
exports.handleCmd=handleCmd