import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<label>
    <input class="input {{class}}" type="{{type}}" value="{{value}}" placeholder="{{placeholder}}"  pattern="{{pattern}}"/>
  </label>
  {{{errorMessage}}}
  `
);
// Add lable and show it in acceptable form
