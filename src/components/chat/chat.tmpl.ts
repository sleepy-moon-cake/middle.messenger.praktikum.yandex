import Handlebars from "handlebars";

export const template = Handlebars.compile(
  `
<div class='chat'>
    <div class='chat__avatar'>
    </div>

    <div class='chat__info'>
        <p  class='chat__name'> Andrei </p>
        <p  class='chat__last-message'> some text </p>
    </div>

    <div class='chat__message-info'>
        <p class='chat__time'> 10:30 </p>
    </div>
</div>`
);
