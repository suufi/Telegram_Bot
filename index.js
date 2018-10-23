
const TelegramBot = require('node-telegram-bot-api')
const github = require('octonode')

const token = 'redact'

const bot = new TelegramBot(token, {polling: true})
const client = github.client();

const jboss = client.user('jbossoutreach')

bot.onText(/\/fetchstars/, async (msg) => {
    const repos = (await jboss.reposAsync())[0]

    bot.sendMessage(msg.chat.id, `${repos.map((repo) => `• ${repo.name} - ${repo.stargazers_count} ⭐️(s)`).join('\n')}`)
})