var SecretStack = require('secret-stack')

var SSB = require('ssb-db')
var caps = require('ssb-caps')

//create a sbot with default caps. these can be overridden again when you call create.
function createSsbServer () {
  return SecretStack({ caps: { shs: Buffer.from(caps.shs, 'base64') } }).use(SSB)
}
module.exports = createSsbServer()

//this isn't really needed anymore.
module.exports.createSsbServer = createSsbServer




