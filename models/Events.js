import { Schema, model } from "mongoose";
import { handleSaveError, addUpdateSetting } from "./hooks.js";

const eventsSchema = new Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    // },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    event_date: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

eventsSchema.post("save", handleSaveError);

eventsSchema.pre("findOneAndUpdate", addUpdateSetting);

eventsSchema.post("findOneAndUpdate", handleSaveError);

const Events = model("event", eventsSchema);

export default Events;
