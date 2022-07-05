import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<span class="avatar"><img src="{{src}}" alt="{{alt}}"></span>`
);
