let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thubnails");


nextDom.onclick = function(){
    showSlider("next");
}

prevDom.onclick = function(){
    showSlider("prev")
}

let timeRunning = 3000;
let runtimeOut;
let timeAutonext = 7000;
let runAutoRun = setTimeout(() => {
    nextDom.click();
    console.log("click");
},timeAutonext)

function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .items");
    let thumbnailitems = document.querySelectorAll(".carousel .thubnails .thubnails-items");

    if(type === "next"){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(thumbnailitems[0]);
        carouselDom.classList.add("next");
    }
    else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(thumbnailitems[positionLastItem]);
        carouselDom.classList.add("prev");
    }

    clearTimeout(runtimeOut);
    runtimeOut = setTimeout(() => {
        carouselDom.classList.remove(type)
    },timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutonext);
}