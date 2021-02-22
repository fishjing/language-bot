import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";
import { languageMapper } from "../utils/languageMapper";
dotenv.config();

const web = new WebClient(process.env.SLACK_TOKEN);
async function onMessage(event: any): Promise<void> {
  const messageText = event.text?.toLowerCase();
  if (!messageText) {
    return;
  }
  const sensitiveLanguage = languageMapper.find((language) =>
    messageText.includes(language.key)
  );
  if (sensitiveLanguage) {
    await web.chat.postEphemeral({
      channel: event.channel,
      user: event.user,
      text: sensitiveLanguage.message,
    });
  }
}

export { onMessage };
