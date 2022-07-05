import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<form class="profile">
        {{{avatar}}}
    
        {{{editList}}}
    
        {{{button}}}
    </form>`
);
