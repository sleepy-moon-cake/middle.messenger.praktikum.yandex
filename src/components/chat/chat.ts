import { Component } from "../../core/component/component";

export class Chat extends Component {
  public render() {
    return `
    <div class='chat {{class}}'>
        <div class='chat__avatar'>
        </div>
    
        <div class='chat__info'>
            <p  class='chat__name'> Andrei </p>
            <p  class='chat__last-message'> some text </p>
        </div>
    
        <div class='chat__message-info'>
            <p class='chat__time'> 10:30 </p>
        </div>
    </div>`;
  }
}
