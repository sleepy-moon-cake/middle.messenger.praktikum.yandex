import Handlebars from "handlebars";

export const template = Handlebars.compile(
  '<button class="button {{{class}}}" type="{{{type}}}">{{{content}}}</button>'
);
