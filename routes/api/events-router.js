import express from "express";
import eventsController from "../../controllers/events-controller.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsController.getAllEvents);

export default eventsRouter;
