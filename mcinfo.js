var request = require('request')
var sleep = require('system-sleep')
var index = require('./index')

function srvInf(bot,ip) {
    request({
        url: `https://api.mcsrvstat.us/2/${ip}`,
        json: true
        }, function (error, response, body) {
    
            if (!error && response.statusCode === 200) {
                try {
                    bot.chat("Software: " + body.software)
                    sleep(500)
                    bot.chat("Hostname: " + body.hostname)
                    sleep(500)
                    bot.chat("Online: " + body.online)
                    sleep(500)
                    bot.chat("Protocol: " + body.protocol)
                    sleep(500)
                    bot.chat("Version: " + body.version)
                    sleep(500)
                    bot.chat("Online & max plrs: " + body.players.online + " & " + body.players.max)
                    sleep(500)
                    bot.chat("Motd:")
                    sleep(500)
                    Object.keys(body.motd.clean).forEach(obj=>{bot.chat(body.motd.clean[obj]);sleep(500)})
                    bot.chat("Ip:port: " + body.ip + ":" + body.port)
                    sleep(500)
                    index.setDe(false)
                } catch (exc) {
                    bot.chat("Error.")
                    index.setDe(false)
                }
              }
              index.setDe(false)
        })
}
exports.srvInf=srvInf