require('dotenv').config()

const { Telegraf, session } = require('telegraf')

const Stage = require('telegraf/stage')

const {
    nameScene,
    ageScene
} = require('./scenes')

const stage = new Stage([nameScene, ageScene])

const bot = new Telegraf(process.env.TOKEN)

bot.use(session())
bot.use(stage.middleware())

bot.start(ctx => ctx.reply("Ismingizni kiritish uchun /name komandasini yuboring. yoshingizni kiritish uchun /age"))

bot.command('name', ctx => ctx.scene.enter('nameScene'))
bot.command('age', ctx => ctx.scene.enter('ageScene'))

bot.help(ctx => ctx.reply(ctx.session.name + " " + ctx.session.age))

bot.launch()
