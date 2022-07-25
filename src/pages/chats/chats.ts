import { Component } from "../../core/component/component";
import { createChatAction, getChatsAction } from "../../services/api/chats/chats-actions";

export class ChatsPage extends Component {
  protected getStateFromProps(): void {
    window.appStore.dispatch(getChatsAction);
    window.appStore.subscribe("changed", () => {
      const chats = window.appStore.getState("chats") as [];
      if (chats && chats.length) {
        this.setState({ chats });
      }

      const chat: any = window.appStore.getState("chat");

      if (chat?.id) {
        this.setState({ chat });
        window.router.go("/chats/" + chat.id);
      }
    });

    this.state = {
      chat: null,
      chats: null,
      isOpenModal: false,
      openModal: () => {
        this.setState({ isOpenModal: true });
      },
      closeModal: (modalState: any) => {
        if (modalState.title) {
          const payload = { title: modalState.title };
          window.appStore.dispatch(createChatAction, payload);
        }

        this.setState({ isOpenModal: false });
      },
    };
  }

  public render() {
    return `
        <div class="chatter">
        {{{HistorySwitcher}}}
            <div class="chatter__menu">
               <span class="chatter__profile"> {{{Link text="Профиль" rout="/profile"}}} </span>

                <input class="chatter__search  placeholder="search"/>

                {{{Button text="Создать чат" type="text" name="chat" onClick=openModal}}}

                {{#if isOpenModal}}  {{{Modal title="Создать чат" button_text="Создать"  onCloseModal=closeModal}}} {{/if}}

                <ul class="chatter__list">
                    {{#if chats}}
                        {{#each chats}}
                            {{{Chat chat=this}}}
                        {{/each}}
                    {{else}}
                        <p>Загрузка чатов....</p>
                    {{/if}}
                </ul>
            </div>
        
            <div class="chatter__main">
                <div>
                 <div class="chatter__message">message</div>
                </div>
                <div class="chatter__typing">
                    <span class="chatter__input">
                        {{{Input type="text" name="message" placeholder="Введите сообщение" required=true }}}
                    </span>
                    
                    {{{Button type="button" text="send" }}}
                </div>
            </div>
        </div>
        `;
  }
}
