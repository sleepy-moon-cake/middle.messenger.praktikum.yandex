import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<a class="link {{class}}" href="{{href}}">{{content}}</a>`
);
