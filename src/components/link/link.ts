import { Component } from "../../core/component/component";

export type LinkProps = {
  href: string;
  text: string;
  rout: string;
};

export class Link extends Component {
  constructor({ href, text, rout }: LinkProps) {
    const events = rout
      ? {
          click: (e: Event) => {
            e.preventDefault();

            window.router.go(rout);
          },
        }
      : null;

    super({
      text,
      href,
      events,
    });
  }

  render() {
    return `<a class="link {{class}}" href="{{href}}">{{text}}</a>`;
  }
}
