import Handlebars from "handlebars";

export const template = Handlebars.compile(`
    <ul class="list {{class}}">
        <li class="list__element">
            {{{editData}}}
        </li>

        <li class="list__element">
            {{{editPassword}}}
        </li>

        <li class="list__element">
            {{{exit}}}
        </li>
    </ul>
`);
