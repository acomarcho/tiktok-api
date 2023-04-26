const superagent = require("superagent");

const getUserData = async (username) => {
  const res = await superagent.get(`https://www.tiktok.com/@${username}`);
  const htmlText = res.text;
  ``;
  // Get AppContext
  const pattern =
    /<script id="SIGI_STATE" type="application\/json">(.*?)<\/script>/s;
  const match = htmlText.match(pattern);

  if (match) {
    const jsonData = JSON.parse(match[1]);

    // Posts
    const itemModule = jsonData.ItemModule;
    const postData = [];

    for (const key in itemModule) {
      const item = itemModule[key];

      const id = item.id;
      const comment_count = item.stats.commentCount;
      const like_count = item.stats.diggCount;
      const play_count = item.stats.playCount;
      const caption = item.desc;
      const thumbnail_url = item.video.cover;

      const itemData = {
        id,
        comment_count,
        like_count,
        play_count,
        caption,
        thumbnail_url,
      };

      postData.push(itemData);
    }

    // User data
    const userModule = jsonData.UserModule;
    const follower_count = userModule.stats[username].followerCount;
    const following_count = userModule.stats[username].followingCount;
    const profile_picture_url = userModule.users[username].avatarLarger;

    const userData = {
      username,
      follower_count,
      following_count,
      profile_picture_url,
    };

    console.log(postData);
    console.log(userData);
  }

  return;
};

(async () => {
  await getUserData("arianagrande");
})();
