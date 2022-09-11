let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

tg.BackButton.show();

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

dfltTab.style.color = "#7A7A7A";
dfltTab.style.borderBottom = "2px solid #000";
viewItems("all");

curTab = 0;

let tablinks = document.getElementsByClassName("tablinks");
for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function(){
        for (let j = 0; j < tablinks.length; j++)
            if (j != i) {
                tablinks[j].style.color = "#000";
                tablinks[j].style.borderBottom = "none";
            }

        tablinks[i].style.borderBottom = "2px solid #000";
        tablinks[i].style.color = "#7A7A7A";
        
        hideItems();
        viewItems(tablinks[i].id);
        
        curTab = i;
    });
}

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;

function checkDirection() {
    let tablimHeight = window.getComputedStyle(document.getElementById("tablimiter")).height;
    tablimHeight = stablimHeighttr.substring(0, tablimHeight.length - 2);
    if (touchendX < touchstartX && touchstartY > tablimHeight) return "left";
    if (touchendX > touchstartX && touchstartY > tablimHeight) return "right";
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
    touchstartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    let side = checkDirection();
    if (side == "left" && curTab < tablinks.length - 1)
        curTab++;
    else if (side == "right" && curTab > 0)
        curTab--;


    for (let j = 0; j < tablinks.length; j++)
        if (j != curTab) {
            tablinks[j].style.color = "#000";
            tablinks[j].style.borderBottom = "none";
        }

    tablinks[curTab].style.borderBottom = "2px solid #000";
    tablinks[curTab].style.color = "#7A7A7A";

    hideItems();
    viewItems(tablinks[curTab].id);
});