import { Component } from "../../core/component/component";

export type ResposeCodeData = {
  code: string;
  text: string;
};

export class ResponseCode extends Component<ResposeCodeData> {
  public render() {
    return `<div class="error-page">
      <h2 class="error-page__code">{{code}}</h2>
    
      <p class="error-page__text">{{text}}</p>
    
      {{{Link class="link" text="Назад к чатам" href='#'}}}
      </div>`;
  }
}
