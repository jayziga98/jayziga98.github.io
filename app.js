let tg = window.Telegram.WebApp;

tg.expand();

let item = document.getElementById("item");
item.style.background = "blue";

item.addEventListener("click", function(){
    item.style.background = "black";
});