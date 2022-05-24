import { Component } from "../../../core/component/component";
import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `<form action="" class="form">
    <h4 class="form__header">{{description}}</h4>

    <ul class="form__inputs">
        <li class="form__input">{{{loginInput}}}</li>
        <li class="form__input">{{{passwordInput}}}</li>
    </ul>

    <div class="form__actions">
        {{{button}}}

        {{{link}}}
    </div>
</form>`
);
