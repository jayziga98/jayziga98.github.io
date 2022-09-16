let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

if (tg.colorScheme == "light") {
    let wrap = document.getElementsByClassName("imgwrapper");
    for (let i = 0; i < wrap.length; i++)
        wrap[i].style.backgroundColor = "rgba(0, 0, 0, 0.05)";
}

function hideItems() {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++)
        items[i].style.display = "none";
}

function viewItems(filter) {
    let items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++)
        if (items[i].id.search(filter) != -1)
            items[i].style.display = '';
}

let curTab = 1;

let dfltTab = document.getElementById("all");
let tabStyles = window.getComputedStyle(dfltTab);

dfltTab.style.color = "var(--tg-theme-hint-color)";
dfltTab.style.borderBottom = "3px solid var(--tg-theme-text-color)";
viewItems("all");

curTab = 0;

let tablinks = document.getElementsByClassName("tablinks");
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function(){
        for (let j = 0; j < tablinks.length; j++)
            if (j != i) {
                tablinks[j].style.color = "var(--tg-theme-text-color)";
                tablinks[j].style.borderBottom = "none";
            }

        tablinks[i].style.borderBottom = "3px solid var(--tg-theme-text-color)";
        tablinks[i].style.color = "var(--tg-theme-hint-color)";
        
        hideItems();
        viewItems(tablinks[i].id);
        
        curTab = i;
    });
}

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

function checkDirection() {
    let tablimHeight = window.getComputedStyle(document.getElementById("tablimiter")).height;
    tablimHeight = tablimHeight.substring(0, tablimHeight.length - 2);
    if (touchendX < touchstartX && touchstartY > tablimHeight && Math.abs(touchendY - touchendX) < 100) return "left";
    if (touchendX > touchstartX && touchstartY > tablimHeight && Math.abs(touchendY - touchendX) < 100) return "right";
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    touchendY = e.changedTouches[0].screenY;
    let side = checkDirection();
    if (side == "left" && curTab < tablinks.length - 1)
        curTab++;
    else if (side == "right" && curTab > 0)
        curTab--;


    for (let j = 0; j < tablinks.length; j++)
        if (j != curTab) {
            tablinks[j].style.color = "var(--tg-theme-text-color)";
            tablinks[j].style.borderBottom = "none";
        }

    tablinks[curTab].style.borderBottom = "2px solid var(--tg-theme-text-color)";
    tablinks[curTab].style.color = "var(--tg-theme-hint-color)";

    hideItems();
    viewItems(tablinks[curTab].id);
});