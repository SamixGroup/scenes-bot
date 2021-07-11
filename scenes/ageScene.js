const Scene = require('telegraf/scenes/base')

const ageScene = new Scene('ageScene')

ageScene.enter(ctx => ctx.reply('Yoshingizni kiriting:'))

ageScene.on('text', ctx => {
    ctx.session.age = ctx.message.text
    return ctx.scene.leave()
})

ageScene.leave(ctx => ctx.reply("Yoshingiz saqlab qolindi"))

module.exports = ageScene