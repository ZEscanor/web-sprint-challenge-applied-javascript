// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(stuff =>{
   const arrArray = stuff.data;
  //console.log(arrArray);
   // console.log(arrArray.articles);
   //Right here I used a for in loop so i am able to get all the keys and reference them
    for (var key in arrArray.articles) {
        console.log(arrArray.articles[key]) 
        const ok = arrArray.articles[key]
        //once i get the keys i use the for each loop to pass into my function
        .forEach(item=>{
            plzWork(item)
            
    })

}
 } )
    .catch(stuff =>{
      console.log("Jolly Good error")
    }
        )



function plzWork(objecB) {
    const divMaker = document.createElement("div");
    const divMaker2 = document.createElement("div");
    const divMaker3 = document.createElement("div");
    const divMaker4 = document.createElement("div");
    const imgMaker = document.createElement("img");
    const otherSpan = document.createElement("span")

    divMaker.appendChild(divMaker2)
    divMaker.classList.add("card")
    divMaker2.classList.add("headline")
    divMaker.appendChild(divMaker3);
    divMaker3.appendChild(divMaker4);
    divMaker4.appendChild(imgMaker);
    divMaker.appendChild(otherSpan)
    divMaker3.classList.add("author")
    divMaker4.classList.add("img-container")
    imgMaker.setAttribute('src', objecB.authorPhoto);
      divMaker2.textContent = objecB.headline;
   
       otherSpan.textContent =objecB.authorName;

    const letDoIt = document.querySelector(".cards-container")
    letDoIt.append(divMaker);
    divMaker.addEventListener("click", function(event){
       
        console.log(objecB.headline);
      });
    return letDoIt;
}