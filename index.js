const NameNotify = 'CTX Webhook';
const DiscordLink = 'https://discord.gg/QA78JCJEKW';
const token = 'MTA5NjY2MzI2MTk3OTYyMzQ5NA.GdxR61.RaFjFCIL9x9YC6AXChn0zlroswPsJg6M9QupM0';
DebugReady()
const themeFullMoon = {
  use: true,
  name: "Full Moon Server",
  color: '14808320',
  url: 'https://discord.com/api/webhooks/1226147188934049852/92n0X8ino1UcarsyT1P2nVIAzod7k-4rGdXkoo5xhOWplIfTtXPAK3Cp-L9fZ2AsMnM8'
};

const themeMirage = {
  use: true,
  name: "Mirage Server",
  color: '62877',
  url: 'https://discord.com/api/webhooks/1226147190678753321/Cx5vnJcHeHjJc69BJxWvttj_KjTKYQxYoxv7q-u93IsgW5SIT70V3gff2E7jFnEQUGPO'
};

const themehaki = {
  use: true,
  name: "Haki Legendary Server",
  color: '1310965',
  url: 'https://discord.com/api/webhooks/1226147600319909939/viJV__V8neJYkj6jvJmLbpFZhzMAyhRH5xvcgdn6i8ASDnCqzlNSLhaBhavT0g6I1aeg-'
};

const themeSword = {
  use: true,
  name: "Sword Legendary Server",
  color: '16777215',
  url: 'https://discord.com/api/webhooks/1226147256177135708/jL2Ay9w7Ve7rz8Or4-GeRU1xtIt-ZCcWC5tmM-euYErADY0Oyso7Agy_7kTz24I77e8'
};

const themeboss = {
  use: true,
  name: "Boss Server",
  color: '16777215',
  url: 'https://discord.com/api/webhooks/1226147676781809664/LI9uj8CSVyraYnaCNecYKCSKERwamuN0GomsqdJPE8izksjq1LkvD87zsV3MVVooauWG'
};

const themefruit = {
  use: true,
  name: "Fruit Server",
  color: '16777215',
  url: 'https://discord.com/api/webhooks/1226147788618858609/YFySb0XhMzBxXhnbwtW2Sh4deu3ypb8uQmgdsOOITrZx5VVIq0bTiAx1e7mUcY3F1prJ'
};

const themekitsune = {
  use: true,
  name: "Kistune Island Server",
  color: '16777215',
  url: 'https://discord.com/api/webhooks/1226147873754845214/uLDy3xyfKKXGYmaeGCDxvEaJjmyNzNFM6N2kqCZ5Sp-Ftu0WC7YcgEak01Mk_sWSAKHr'
};

const axios = require('axios');

async function _S(theme, fieldsss) {
  const image = await getWaifuImageUrl();
  const data = {
    content: null,
    embeds: [{
      title: theme.name,
      description: `[Click To Join Discord](${DiscordLink})`,
      color: theme.color,
      fields: fieldsss,
      author: { name: `${NameNotify}` },
      image: { url: image },
      footer: { text: `${NameNotify} | ${DiscordLink}` },
    }],
    attachments: [],
  };
  try {
    const response = await axios.post(theme.url, data);
    if (response.status === 204) {
      log(`Check Speed : ${theme.name}`,`green`);
    } else {}
  } catch (error) {}
}

async function getWaifuImageUrl() {
  try {
    const response = await axios.get('https://api.waifu.pics/sfw/waifu');
    return response.data.url;
  } catch (error) {
    console.error('Error fetching waifu image:', error.message);
    return '';
  }
}

const { Client, Intents } = require('discord.js-selfbot-v13');
const DiscordBot = new Client();

DiscordBot.on('ready', async () => {
  console.log(`${NameNotify} - Logged in as ${DiscordBot.user.tag}!`);
});

DiscordBot.on('messageCreate', async (message) => {
  if (message.channelId == 1222234289303851048) {
    if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeMirage, data);
    }
  } else if (message.channelId == 1222234356852986098) {
    if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeFullMoon, data);
    }
  } else if (message.channelId == 1222234480861778009) {
    if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeSword, data);
    }
  } else if (message.channelId == 1222234420224721036) {
    if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themehaki, data);
    }
  } else if (message.channelId == 1224368306631479337) {
    if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themeboss, data);
    }
  } else if (message.channelId == 1224368717941575742) {
    if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themefruit, data);
    }
  } else if (message.channelId == 1224369144502288445) {
    if (message.embeds) {
      const data = message.embeds[0].fields;
      _S(themekitsune, data);
    }
  }
});
const colors = require("colors");
async function DebugReady() {
const encodedText = "SGVsbG8gWW91ciBDb2RlIEJ5IENUWCBTcHJpY3RlciAtIFZJRVRTIDEuMC4w";
log(Buffer.from(encodedText, 'base64').toString('utf-8'))
}
function log(text, color = 'blue') {
  let d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      ap = "AM"
  if (h > 12) { h -= 12; ap = "PM" }
  if (m < 10) { m = "0" + m }
  time = h + ":" + m + " " + ap

  if (typeof(color) == "undefined") { console.log(colors.grey(time) + " : " + text) }
  if (typeof(color) != "undefined") { console.log(colors.grey(time) + " : " + colors[color](text)) }
}

DiscordBot.login(token);
