import Handlebars from "handlebars";

export const template = Handlebars.compile(`

<div class="chatter">
    <div class="chatter__menu">
        <input class="chatter__search  placeholder="search"/>

        <ul class="chatter__list">
            {{{items}}}
        </ul>
    </div>

    <div class="chatter__main">
        <p class="chatter__message">message</p>
    <div>
<div>
`);
