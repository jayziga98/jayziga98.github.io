let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

tg.BackButton.show();

//let selectline = document.getElementById("rectangle");
let dfltTab = document.getElementById("tablink1");

let tabStyles = window.getComputedStyle(dfltTab);

//selectline.style.width = parseFloat(tabStyles.width) + 2 + "px";
//selectline.style.left =  dfltTab.getBoundingClientRect().left + "px";
dfltTab.style.color = "#7A7A7A";
dfltTab.style.borderBottom = "2px solid #000";

curTab = 1;

for (let i = 1; i <= 6; i++) {
    let tablink = document.getElementById("tablink" + i);
    tablink.addEventListener("click", function(){
        for (let j = 1; j <= 6; j++)
            if (j != i) {
                let tablinkOld = document.getElementById("tablink" + j);
                tablinkOld.style.color = "#000";
                tablinkOld.style.borderBottom = "none";
            }

        tablink.style.borderBottom = "2px solid #000";
        //let tabWidth = window.getComputedStyle(tablink).width;
        //selectline.style.width = parseFloat(tabWidth) + 2 + "px";
        //selectline.style.left =  tablink.getBoundingClientRect().left + "px";
        tablink.style.color = "#7A7A7A";
    });
}

function tabOnClickEvent() {

}