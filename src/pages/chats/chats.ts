import { Component } from "../../core/component/component";

export class ChatsPage extends Component {
  public render() {
    return `
        <div class="chatter">
            <div class="chatter__menu">
                {{{Link text="Профиль" rout="/profile"}}}

                <input class="chatter__search  placeholder="search"/>
        
                <ul class="chatter__list">
                    {{{Chat}}}
                    {{{Chat}}}
                    {{{Chat}}}
                    {{{Chat}}}
                </ul>
            </div>
        
            <div class="chatter__main">
                <div>
                 <div class="chatter__message">message</div>
                </div>
                <div class="chatter__typing">
                    {{{Input type="text" placeholder="Введите сообщение" required=true }}}
                {{{Button type="button" text="send" }}}
                </div>
            </div>
        </div>
        `;
  }
}
