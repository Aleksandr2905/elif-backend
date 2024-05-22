import { ctrlWrapper } from "../decorators/index.js";
import HttpError from "../helpers/HttpError.js";
import Events from "../models/Events.js";
import User from "../models/User.js";

const addUser = async (req, res) => {
  const { id } = req.params;
  const newUser = req.body;

  const event = await Events.findById(id);
  if (!event) {
    throw HttpError(404, "Event not found");
  }

  const user = new User(newUser);
  await user.save();

  event.user = user._id;
  await event.save();

  res.status(201).json(user);
};

export default {
  addUser: ctrlWrapper(addUser),
};
