import express from "express";
import userController from "../../controllers/user-controller.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { userRegisterSchema } from "../../models/User.js";

const userRouter = express.Router();

userRouter.post(
  "/register/:id",
  isEmptyBody,
  validateBody(userRegisterSchema),
  userController.addUser
);

export default userRouter;
