import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<input class="input {{class}}" type="{{type}}" value="{{value}}" placeholder="{{placeholder}}"  pattern="{{pattern}}"/>
  {{{errorMessage}}}
  `
);
