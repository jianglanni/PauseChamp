'use strict';

let nickname = sessionStorage.getItem("nick");
let nick_area = document.getElementById("var_nick");

nick_area.textContent = '\''+nickname+'\'';

let cont_button = document.getElementById("continue");

cont_button.addEventListener("click", trigger);

function trigger() {
    window.location = "/tiktokpets.html";
}