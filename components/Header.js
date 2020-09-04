// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const divMaker = document.createElement("div");
    const spanMaker = document.createElement("span");
    const h1Maker = document.createElement("h1")
    const otherSpan = document.createElement("span")

    divMaker.appendChild(spanMaker)
    divMaker.classList.add("header")
    spanMaker.classList.add("date")
    divMaker.appendChild(h1Maker);
    divMaker.appendChild(otherSpan);
    otherSpan.classList.add("temp")
    spanMaker.textContent = "March 28, 2020"
    h1Maker.textContent = "Lambda Times"
    otherSpan.textContent = "98°"

    const letDoIt = document.querySelector(".header-container")
    letDoIt.append(divMaker);
    return letDoIt;
}

Header();