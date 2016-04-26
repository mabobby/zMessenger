'use strict'
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'CAAPH2dC3XJ8BAA35NYIjqgadLnixdOaKsF5Wjfp1TXlncQRMlBXUr1joQm3loZArJEt7ZCPPVc6RP1ZAVWZCwBLT45H9lTZArzZB8sF6Rp0gR7nAX7y2k3DMIRLnmNkdxBJTCzDWBozxJTZC336uz9IDCcb8gfE8msT5N99A1RrYdPKWQZAZC5QnDTc3ZBRDoAFHoZD',
  verify: 'VERIFY_TOKEN'
})

// curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=CAAPH2dC3XJ8BAA35NYIjqgadLnixdOaKsF5Wjfp1TXlncQRMlBXUr1joQm3loZArJEt7ZCPPVc6RP1ZAVWZCwBLT45H9lTZArzZB8sF6Rp0gR7nAX7y2k3DMIRLnmNkdxBJTCzDWBozxJTZC336uz9IDCcb8gfE8msT5N99A1RrYdPKWQZAZC5QnDTc3ZBRDoAFHoZD"

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = 'Julie: ' + payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
