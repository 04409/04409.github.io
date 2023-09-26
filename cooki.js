const lyd = new Audio("musik.mp3");

// let spilletid = 5000;

// const timeout = setTimeout(stopp, spilletid);

// function stopp() {
//  poengsum = 0;
//  document.getElementById("cookie").removeEventListener("click",klikk);

// }
let tidIgjen = 30;
let tidsTimer = setInterval(tidtaking, 1000);

function tidtaking(){
  if(tidIgjen <= 0){
    clearInterval(tidsTimer);
    document.getElementById("infoskjerm").innerText = "Du roket " + poengsum + " gnager"
    document.getElementById("cookie").removeEventListener("click", klikk);

  }
  else {
    document.getElementById("infoskjerm").innerText = tidIgjen + " segunder igjen.";
  }
  tidIgjen = tidIgjen - 1;
}

document.getElementById("cookie").addEventListener("click", klikk);

let poengsum = 0;
let rokering = 0;

let stor = true;


function klikk () {
  lyd.play();
    console.log("uihiuhiu");

    poengsum = poengsum + 1;

    document.getElementById("poeng").innerText = poengsum;

    //få fingur til og gå oop og ned
    if (stor) {
      document.getElementById("cookie").style.transform = "scale(0.8)";
    stor = false;
    }
    else {
      document.getElementById("cookie").style.transform = "scale(1)";
      stor = true;
    }

    rokering = rokering + 1;

   // få rokering til og bevege
   if (rokering > 1) {
    document.getElementById("cookie").src = "bilde/cookii.3.jpg";
   } 
   if (rokering > 2) {
    document.getElementById("cookie").src = "bilde/cookii.2.jpg";

   }
   if (rokering > 3) {
    document.getElementById("cookie").src = "bilde/cookii.4.jpg";

   }
   if (rokering > 4) {
    document.getElementById("cookie").src = "bilde/cookii.2.jpg";

  }
  if (rokering > 5) {
    document.getElementById("cookie").src = "bilde/cookii.3.jpg";
   } 

   if (rokering > 6) {
    document.getElementById("cookie").src = "bilde/cookii.2.jpg";

   }
   if (rokering > 7) {
    document.getElementById("cookie").src = "bilde/cookii.4.jpg";

   }
   if (rokering > 8) {
    document.getElementById("cookie").src = "bilde/cookii.2.jpg";
    rokering = 0;
   }

  }



document.getElementById("knapp").addEventListener("click", restart);

function restart() {
    rokering = 0;
    poengsum = 0;
    document.getElementById("poeng").innerText = rokering;
    
    document.getElementById("cookie").addEventListener("click", klikk);

    tidIgjen = 30;
    tidsTimer = setInterval(tidtaking,1000);
    
    // const timeout = setTimeout(stopp, spilletid);

}