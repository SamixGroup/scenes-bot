const Scene = require('telegraf/scenes/base')

const nameScene = new Scene('nameScene')

nameScene.enter(ctx => ctx.reply('Ismingizni kiriting:'))

nameScene.on('text', ctx => {
    ctx.session.name = ctx.message.text
    ctx.reply("Ismingiz saqlab qolindi")
    return ctx.scene.enter('ageScene')
})


module.exports = nameScene