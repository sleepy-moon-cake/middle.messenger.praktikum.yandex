import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<div class="authentication">{{{form}}}</div>`
);
