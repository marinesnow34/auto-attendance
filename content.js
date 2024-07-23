// content.js
let selector = "#checkIn";
let element = document.querySelector(selector);

if (element) {
  if (element.textContent.includes("입실")) {
    console.log("클릭");
    element.click();
  } else {
    console.log("입실 없음");
  }
} 
else{
  console.log("element 없음");
}
