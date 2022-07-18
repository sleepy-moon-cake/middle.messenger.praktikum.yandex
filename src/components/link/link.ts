import { Component } from "../../core/component/component";

export type LinkData = {
  class: string;
  href: string;
  text: string;
};

export class Link extends Component<LinkData> {
  render() {
    return `<a class="link {{class}}" href="{{href}}">{{text}}</a>`;
  }
}
