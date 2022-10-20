import { GetChatsController } from "../../controllers/chat-controllers/get-chats-controller";
import { webSocketController } from "../../controllers/websocket-controller/websocket-controller";
import { Block } from "../../core/block";
import { Events } from "../../core/types";
import { compileTemplateToElement } from "../../core/utils/compile-template";
import { CHAT_INITIAL_STATE } from "../../store/initialState/chat-initial-state";
import { mapStateToPropsCallBack } from "../../store/utils";
import { chatEvents } from "./chat-service";
import templatePug from "./chat.pug";
import "./chat.scss";
import { CHAT_PAGE_EVENT_NAME } from "./events";
import { ChatPageProps } from "./types";

export class ChatPage extends Block<ChatPageProps> {
  constructor(
    propsObj: ChatPageProps = CHAT_INITIAL_STATE,
    events: Events = chatEvents,
    rootId?: string
  ) {
    super("main", "chat-page-block", propsObj, events, rootId);

    this.subscribeToStoreEvent(CHAT_PAGE_EVENT_NAME, mapStateToPropsCallBack);

    GetChatsController.get();
  }

  render() {
    return compileTemplateToElement(
      templatePug,
      this.props,
      CHAT_PAGE_EVENT_NAME,
      this._meta.events
    );
  }

  componentDidMount() {
    const root = document.getElementById(this._meta.rootId || "app");

    root?.appendChild(this.getContent());
  }

  destroy(): void {
    if (webSocketController.isStarted) {
      webSocketController.closeConnection();
    }
    super.destroy();
  }
}
