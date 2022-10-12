import { Component } from "../../core/component/component";
import { deleteChatAction } from "../../services/api/chats/chats-actions";

export type ChatProps = {
  chat: any;
  text: string;
  content: boolean;
};

export class Chat extends Component {
  constructor({ chat }: ChatProps) {
    super({
      chat,
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLElement;
          if (target.tagName !== "BUTTON") {
            window.router.go("/chats/" + chat.id);
          }
        },
      },
    });
  }

  protected getStateFromProps(): void {
    this.state = {
      deleteChat: () => {
        window.appStore.dispatch(deleteChatAction, { chatId: this.props.chat.id });
      },
    };
  }

  public render() {
    return `
    <div class='chat {{class}}'>
    <span class="chat__delete-btn">{{{Button content=true type="text" text="delete" onClick=deleteChat}}}</span>

        {{#with chat}}
          <div class='chat__avatar'>
          {{avatar}}
          </div>
      
          <div class='chat__info'>
              <p  class='chat__name'> {{title}} </p>
              <p  class='chat__last-message'>{{last_message}}</p>
              <p  class='chat__last-message'>Created by</p>
          </div>
      
          <div class='chat__message-info'>
              <p class='chat__time'> 10:30 </p>
              <p class='chat__time'> {{unread_count}} </p>
          </div>
        {{/with}}
    </div>`;
  }
}
