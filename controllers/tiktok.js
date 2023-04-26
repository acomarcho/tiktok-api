const tiktokService = require("../services/tiktok");

const getUserAndFeeds = async (req, res) => {
  try {
    const { username } = req.params;
    let data = await tiktokService.getUserAndFeeds(username);
    res.status(200).json({
      message: `Successfully fetched ${username}'s feeds`,
      data,
    });
  } catch (error) {
    if (error.message === "Not Found") {
      res.status(404).json({
        message: `Username "${req.params.username}" not found`,
      });
    } else {
      await refreshClient();
      res.status(500).json({
        message: error.message,
      });
    }
  }
};
module.exports = {
  getUserAndFeeds,
};
