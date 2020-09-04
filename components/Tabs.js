// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(stuff =>{
   const arrArray = stuff.data
  console.log(arrArray.topics);
  for(let i=0; i<arrArray.topics.length; i++){
      makeTopic(arrArray.topics[i]);
  }
}
    )
    .catch(stuff =>{
      console.log("Jolly Good error")
    }
        )




function makeTopic(politics){
   const divMaker = document.createElement("div");
   divMaker.classList.add("tab")
   divMaker.textContent = politics;
   const letDoIt = document.querySelector(".topics")
    letDoIt.append(divMaker);
    return letDoIt;

}