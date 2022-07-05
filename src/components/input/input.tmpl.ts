import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<label>
    <input class="input {{class}}" type="{{type}}" value="{{value}}" name={{name}} placeholder="{{placeholder}}"  pattern="{{pattern}}" required={{required}} />
  </label>
  {{{errorMessage}}}
  `
);
