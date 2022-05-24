import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<div class="profile">
        {{{avatar}}}
    
        {{{editList}}}
    
        {{{button}}}
    </div>`
);
