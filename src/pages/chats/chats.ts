import { Component } from "../../core/component/component";

export class ChatsPage extends Component {
  public render() {
    return `
        <div class="chatter">
        {{{HistorySwitcher}}}
            <div class="chatter__menu">
               <span class="chatter__profile"> {{{Link text="Профиль" rout="/profile"}}} </span>

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
