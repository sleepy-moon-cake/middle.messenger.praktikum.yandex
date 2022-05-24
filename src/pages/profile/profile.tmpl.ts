import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<div class="profile">
    {{{avatar}}}

    <p class="profile__name">{{{name}}}</p>

    {{{list}}}

    {{{interactiveList}}}
   </div>`
);
