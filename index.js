const superagent = require("superagent");

const getUserData = async (username) => {
  const res = await superagent.get(`https://www.tiktok.com/@${username}`);
  const htmlText = res.text;

  // Get author stats
  const authorRegex = /"authorStats":({[^}]+})/;
  const authorMatch = htmlText.match(authorRegex);
  const authorStats = JSON.parse(authorMatch[1]);

  console.log(authorStats);

  return;
};

(async () => {
  await getUserData("arianagrande");
})();
