/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carousel(){
  const divMaker = document.createElement("div");
    const divMaker2 = document.createElement("div");
    const divMaker3 = document.createElement("div");
    const imgMaker = document.createElement("img");
    const imgMaker2 = document.createElement("img");
    const imgMaker3 = document.createElement("img");
    const imgMaker4 = document.createElement("img");
    divMaker2.textContent = '<';
    divMaker3.textContent = '>';
    divMaker.appendChild(divMaker2)
    divMaker.appendChild(imgMaker)
    divMaker.appendChild(imgMaker2)
    divMaker.appendChild(imgMaker3)
    divMaker.appendChild(imgMaker4)
    divMaker.appendChild(divMaker3)

    divMaker.classList.add("carousel")
    divMaker2.classList.add("left-button")
    divMaker3.classList.add("right-button")
   
    
    imgMaker.setAttribute("src","https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" )
    imgMaker2.setAttribute("src","https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg")
    imgMaker3.setAttribute("src","https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg")
    imgMaker4.setAttribute("src","https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg")


    imgMaker.classList.add("1") 
     imgMaker2.classList.add("2")
     imgMaker3.classList.add("3")
     imgMaker4.classList.add("4")
    const letDoIt = document.querySelector(".carousel-container")
    letDoIt.append(divMaker);
    let currIndex = 1;
    imgMaker.style.display = 'block'
    divMaker.querySelector(".left-button").addEventListener("click", function(event){
       if(currIndex <= 1){
         imgMaker.style.display = "block"
         imgMaker2.style.display =  "none";
      imgMaker3.style.display = "none";
      imgMaker4.style.display =  "none";
         currIndex = 1;
       }
      else if(currIndex === 2){
  
        imgMaker2.style.display = "block"
        imgMaker.style.display =  "none";
        imgMaker3.style.display = "none";
        imgMaker4.style.display =  "none";
        currIndex--;
        
      }
      else if(currIndex === 3){
        imgMaker3.style.display = "block"
        imgMaker2.style.display =  "none";
      imgMaker.style.display = "none";
      imgMaker4.style.display =  "none";
        currIndex--;
      }
       else{
      imgMaker4.style.display = "block"
      imgMaker2.style.display =  "none";
      imgMaker3.style.display = "none";
      imgMaker.style.display =  "none";
      currIndex--;
      
       }
    });
    divMaker.querySelector(".right-button").addEventListener("click", function(event){
      if(currIndex === 4){
        
         imgMaker4.style.display = "block"
         imgMaker2.style.display =  "none";
      imgMaker3.style.display = "none";
      imgMaker.style.display =  "none"; 
      currIndex = 4;
       }
      else if(currIndex === 3){
        
        imgMaker3.style.display = "block"
        imgMaker2.style.display =  "none";
      imgMaker.style.display = "none";
      imgMaker4.style.display =  "none";
        currIndex++;
        
      }
      else if(currIndex === 2){
        
        imgMaker2.style.display = "block"
        imgMaker.style.display =  "none";
      imgMaker3.style.display = "none";
      imgMaker4.style.display =  "none";
        currIndex++;
      }
       else{
      imgMaker.style.display = "block"
      imgMaker2.style.display =  "none";
      imgMaker3.style.display = "none";
      imgMaker4.style.display =  "none";
      currIndex++;
      
       }
    });
    return letDoIt;
  }

  carousel();