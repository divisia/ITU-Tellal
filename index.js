require('dotenv').config();

const { Client, Intents, MessageEmbed } = require('discord.js');
const { fetchAnnouncements } = require('./fetcher.js')
const { checkAnnouncements } = require('./interface')
const FLAGS = Intents.FLAGS;
const client = new Client({ intents: [FLAGS.GUILDS, FLAGS.GUILD_MESSAGES, FLAGS.DIRECT_MESSAGES, FLAGS.DIRECT_MESSAGE_TYPING, FLAGS.GUILD_WEBHOOKS, FLAGS.GUILD_INTEGRATIONS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(check, 15 * 60 * 1000); // every 15 mins
});

function check() {
  console.log('Checking for new announcements...')
  checkAnnouncements().then(news => news.forEach(ann => announce(ann)));
}

client.on('messageCreate', msg => {
  const text = msg.content.trim().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  switch (text) {
    case 'ping':
      msg.reply('pong!')
      break;
    case 'slm':
    case 'selam':
    case 'selamlar':
      msg.reply('selam bebek ;)')
      break;
    case 'naber':
    case 'nasılsın':
      msg.reply('iyilik, güzellik... ve hüzün')
      break;
    case 'duyurular':
      msg.reply('şu saatten sonra bölüm sayfasında yayınlanacak duyurular #duyurular kanalında da paylaşılacak')
      break;
    case 'by':
    case 'bay':
    case 'bye':
    case 'good bye':
    case 'görüşürüz':
    case 'hoşçakal':
      msg.reply('ciao bella')
      break;
  }
});

async function announce(announcement = null) {
  if (!announcement) announcement = (await fetchAnnouncements()).pop();
  client.channels.cache.find(i => i.name === 'duyurular').send({
    embeds: [
      {
        title: `${announcement.title} (${announcement.date})\n${announcement.body}`,
        url: announcement.link,
      }
    ]
  })
}
// fetchAnnouncements();
client.login(process.env.TOKEN);