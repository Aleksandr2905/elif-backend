import express from "express";
import eventsController from "../../controllers/events-controller.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsController.getAllEvents);

eventsRouter.get("/:id", eventsController.getEventById);

export default eventsRouter;
