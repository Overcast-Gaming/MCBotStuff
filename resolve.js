var sleep = require('system-sleep')
var dns = require('dns')
var index = require('./index.js')
function resolve(bot,ip){
    try {
        dns.resolve4(ip, null, (err,addresses)=>{
        if (err!=null) {
            bot.chat("DNS error!")
            index.setDe(false)
        } else {
        //things = addresses.split(",")
        Array.from(addresses).forEach(thing=>{
            
            bot.chat(thing)
            sleep(250)
        })
        index.setDe(false)
    }
        })
    } catch (exc) {
        bot.chat("Error.")
        index.setDe(false)
    }

}
exports.resolve=resolve