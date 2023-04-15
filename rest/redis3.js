const redis = require("redis");

const client = redis.createClient({
  url: 'redis://redis3:6379',
  legacyMode : true
});

async function run() {
  await client.connect();
}

run();

module.exports = client;