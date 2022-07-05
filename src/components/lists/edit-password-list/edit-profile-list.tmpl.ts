import Handlebars from "handlebars";

export const template = Handlebars.compile(`
    <ul class="list {{class}}">
        <li class="list__element">
            <span class="list__key">{{oldPasswordName}}</span> 
            <span class="list__value">{{{oldPasswordInput}}}</span>
        </li>

        <li class="list__element">
            <span class="list__key">{{newPasswordName}}</span> 
            <span class="list__value">{{{newPasswordInput}}}</span>
        </li>

        <li class="list__element">
            <span class="list__key">{{repeatPasswordName}}</span> 
            <span class="list__value">{{{repeatPasswordInput}}}</span>
        </li>
    </ul>
`);
