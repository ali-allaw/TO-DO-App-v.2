// get the input
let myInput = document.querySelector("input");
let mySpanInput = document.querySelector("form span")
let myUl = document.querySelector(".body ul")
let bodyLis = document.querySelectorAll(".body ul li");
let bodyLisSpans = document.querySelectorAll(".body ul li span");
let bodyLisSpansImg = document.querySelector(".body ul li span .check-i");
let bodyLisFalse = document.querySelectorAll(".body ul li .false-i");
let bodyLisP = document.querySelector(".body ul li p");
let bodyLisPAfter = document.querySelector(".body ul li p:after");
let centerLis = document.querySelectorAll(".center ul li");
let bodyActiveLis = document.querySelectorAll(".body ul li.active-body-li");
let footCompleted = document.querySelector(".foot .center .completed-foot")
let footActive = document.querySelector(".foot .center .active-foot")
let footAll = document.querySelector(".foot .center .all-foot")
let footClearCompleted = document.querySelector(".foot .right .clear-completed-foot")
let footLeft = document.querySelector(".foot .left p")
let bodyLisArr = new Array();


mySpanInput.onclick = () => {

    let newLi = document.createElement("li");
    newLi.classList.add("shadow")

    let newLiSpan = document.createElement("span");
    newLiSpan.classList.add("check-li");

    let newLiSpanImg = document.createElement("img")
    newLiSpanImg.src = "/assets/icon-check.svg"
    newLiSpanImg.className = "check-i";

    let newLiP = document.createElement("p");
    let newLiText = document.createTextNode(myInput.value);

    let newLiImg = document.createElement("img");
    newLiImg.src = "/assets/icon-cross.svg";
    newLiImg.className = "fasle-i";

    newLiSpan.appendChild(newLiSpanImg);

    newLiP.appendChild(newLiText);

    newLi.appendChild(newLiSpan);
    newLi.appendChild(newLiP);
    newLi.appendChild(newLiImg)

    myUl.appendChild(newLi)

    bodyLisArr.push(newLi)

    myInput.value = "";
    
};

let bodyLisActiveArr = new Array(bodyLis.classList = "active-body-li")

bodyLisSpans.forEach(span => {
    span.onclick = () => {
        if (span.parentElement.classList.contains("active-body-li")) {
            span.style.background = "transparent";
            span.firstChild.style.display = "none";
            span.parentElement.classList.remove("active-body-li");
            bodyLisActiveArr.shift();
        } else {
            span.style.background = "var(--Check-Background)";
            span.firstChild.style.display = "block";
            span.parentElement.classList.add("active-body-li");
            span.parentElement.classList.remove("normal-li")
            bodyLisActiveArr.push(bodyLis.classList = "active-body-li")
        }
        console.log(bodyLisActiveArr.length)
        console.log(bodyLisActiveArr)
    }

})

footCompleted.addEventListener("click", () => {
    bodyLis.forEach(li => {
        if (li.classList.contains("active-body-li")) {
            li.style.display = "flex";
        } else {
            li.style.display = 'none'
        }
    })
})
footActive.addEventListener("click", () => {
    bodyLis.forEach(li => {
        if (li.classList.contains("active-body-li")) {
            li.style.display = 'none'
        } else {
            li.style.display = 'flex';
        }
    })
})
footAll.addEventListener("click", () => {
    bodyLis.forEach(li => {
        li.style.display = 'flex';
    })
})
footClearCompleted.onclick = () => {
    bodyLis.forEach(li => {
        if (li.classList.contains("active-body-li")) {
            li.remove();
        }
    })
    
}


bodyLisFalse.forEach(img => {
    img.onclick = () => {
        img.parentElement.remove()
        bodyLisActiveArr.pop()
    }
});

centerLis.forEach((li) => {
    li.onclick = function (e) {
        centerLis.forEach(li => {
            li.classList.remove("active-li-center")
        })
        e.currentTarget.classList.add("active-li-center")
    }
});

document.body.onclick = () => {    
    footLeft.innerHTML = `${bodyLisArr.length} items left`
    console.log(bodyLisArr.length)
}
