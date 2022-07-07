import Handlebars from "handlebars";

export const template = Handlebars.compile(`
<div class="display-flex justify-content-space-between ">{{{backButton}}} {{{forwardButton}}}</div>
<div class="chatter">
    <div class="chatter__menu">
        <input class="chatter__search  placeholder="search"/>

        <ul class="chatter__list">
            {{{items}}}
        </ul>
    

    </div>
  

    <div class="chatter__main">
        <div>
         <div class="chatter__message">message</div>
        </div>
        <div class="chatter__typing">
            {{{typing}}}
            {{{sendMessage}}}
        </div>
    </div>
      
</div>`);
