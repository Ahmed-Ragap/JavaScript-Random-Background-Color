/* 
    ATTENTION PLES__
    the page not complete yet 
    what i will add in the future 

    [1]______daynamic auto change for backgroundImage on(morning   _   afternoon    _    evening)

   [2]______inline or live editing for the name 
    
    */
let time = document.querySelector("#time");
let name = document.querySelector(".name");
let fucus = document.querySelector(".fucus");
let header = document.querySelector(".header");
let greating = document.querySelector(".greating");

function showTime() {
  let today = new Date(),
    houre = today.getHours(),
    munits = today.getMinutes(),
    sec = today.getSeconds();
 //for change between  AM PM 
  const amPm = houre >= 12 ? " pm" : " am";
  houre = houre % 12 || 12;
  time.innerHTML = `<span> ${houre}</span>:<span> ${munits}</span>:<span> ${sec}</span>  ${amPm}`;

  setTimeout(showTime, 1000);
}
function setBgImage() {
  let amImage = "url('./1.jpeg') no-repeat center center ;"
  let pmImage = "url('./2.jpeg') no-repeat center center  ;"
  let today = new Date(),
    houre = today.getHours();
  if (houre > 12) {
      header.style.backgroundImage = amImage
     
    greating.textContent = "good evening ahmed"
  } else if (houre > 18) {
    greating.textContent = "good afternoon ahmed"
    header.style.backgroundImage = pmImage
  } else {
    greating.textContent = "good morning ahmed"
    header.style.background = amImage

  }
}
showTime();
setBgImage();

