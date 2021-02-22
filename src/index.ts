import dotenv from "dotenv";

import { createEventAdapter } from "@slack/events-api";
import { onMessage } from "./handler/onMessage";

dotenv.config();
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET || "");
const port = 3000;

slackEvents.on("message", onMessage);

slackEvents.on("error", console.error);

slackEvents.start(port).then(() => {
  console.log(`server listening on port ${port}`);
});
