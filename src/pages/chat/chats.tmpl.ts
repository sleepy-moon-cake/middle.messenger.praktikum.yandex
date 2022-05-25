import Handlebars from "handlebars";

export const template = Handlebars.compile(`

<div class="chatter">

<div class="chatter__menu">
    <input class="chatter__search  placeholder="search"/>

    <ul class="chatter__list">
        <li class="chatter__element">{{{chat1}}}</li>
        <li class="chatter__element">{{{chat2}}}</li>
        <li class="chatter__element">{{{chat3}}}</li>
        <li class="chatter__element">{{{chat4}}}</li>
        <li class="chatter__element">{{{chat5}}}</li>
        <li class="chatter__element">{{{chat6}}}</li>
        <li class="chatter__element">{{{chat7}}}</li>
        <li class="chatter__element">{{{chat8}}}</li>
    </ul>
 </div>
    

    <div class="chatter__main">
        <p class="chatter__message">message</p>
    <div>
<div>
`);
