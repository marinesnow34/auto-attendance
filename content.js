let checkInElement = document.querySelector("#checkIn");
let checkOutElement = document.querySelector("#checkOut");

function nowHour() {
  let now = new Date();
  return now.getHours();
}

function nowMinute(){
  let now = new Date();
  return now.getMinutes();
}

if (checkInElement) {
  if ((nowHour() >= 8 && nowMinute() >= 30) && checkInElement.textContent.includes("입실")) {
    console.log("클릭");
    checkInElement.click();
    setTimeout(function() {
      location.reload(true);
    }, 1000);    
  } else {
    console.log(`현재 시간 ${nowHour()} : ${nowMinute()}은 입실 시간이 아닙니다.` );
  }
} 

if (checkOutElement) {
  if ((nowHour() >= 20 && nowMinute <= 30)&& checkOutElement.textContent.includes("퇴실하기")) {
    console.log("클릭");
    checkOutElement.click();
    setTimeout(function() {
      location.reload(true);
    }, 1000);    
  } else {
    console.log(`현재 시간 ${nowHour()} : ${nowMinute()}은 퇴실 시간이 아닙니다.` );
  }
} 
