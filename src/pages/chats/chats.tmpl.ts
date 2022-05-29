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
        <div>message</div>
        <div class="chatter__typing">
            {{{typing}}}
            {{{sendMessage}}}
        </div>
    </div>
      
</div>`);
