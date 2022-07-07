import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<div class="display-flex justify-content-space-between ">{{{backButton}}} {{{forwardButton}}}</div><div class="authentication">{{{form}}}</div>`
);
