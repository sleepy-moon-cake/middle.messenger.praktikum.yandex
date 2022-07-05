import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<form action="" class="form">
    <h4 class="form__header">{{description}}</h4>

    <ul class="form__inputs">
        {{{items}}}
    </ul>

    <div class="form__actions">
        {{{button}}}

        {{{link}}}
    </div>
</form>`
);
