import Friends from "../model/Friends";

const homeController = (req, res) => {
  res.render("screens/home");
};

const friendController = async (req, res) => {
  const friendList = await Friends.find({}, {});

  res.render("screens/friend", { friendList });
};

const globalController = {
  homeController,
  friendController,
};

export default globalController;
