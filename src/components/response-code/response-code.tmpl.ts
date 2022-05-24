import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<div class="error-page">
  <h2 class="error-page__code">{{code}}</h2>

  <p class="error-page__text">{{text}}</p>

  {{{link}}}
  </div>`
);
