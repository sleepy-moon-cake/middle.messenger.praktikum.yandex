import Handlebars from "handlebars";

export const template = Handlebars.compile(`
    <ul class="list {{class}}">
        {{#each items}}
            <li class="list__element">
                <span class="list__key">{{key}}</span> 
                <span class="list__value">{{value}}</span>
            </li>
        {{/each}}
    </ul>
`);
