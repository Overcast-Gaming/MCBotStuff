var request = require('request')
var sleep = require('system-sleep')
var index = require('./index.js')
function ipinfo(bot,ip,options) {
try {
    request({
    url: `https://get.geojs.io/v1/ip/geo/${ip}.json`,
    json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            bot.chat("Country: "+body.country + `(${body.country_code}), region: ${body.region}, timezone: ${body.timezone}, ISP: ${body.organization_name}`)
            if (options == 'url') {
                setTimeout(()=>{
                    bot.chat(`URL: https://get.geojs.io/v1/ip/geo/${ip}.json`)
                },1000)
            }
            index.setDe(false)
            return true
          }
    })
    index.setDe(false)
    return true
      }
      catch (exc) {
        index.setDe(false)
        bot.chat("Error while getting JSON data! (See console)")
        console.log(exc.message)
        return true
        //console.log(exc)
      }
}
module.exports.ipinfo = ipinfo