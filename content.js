let checkInElement = document.querySelector("#checkIn");
let checkOutElement = document.querySelector("#checkOut");

const CHECK_IN_TEXT = "입실하기"
const CHECK_OUT_TEXT = "퇴실하기"

function nowHour() {
  let now = new Date();
  return now.getHours();
}

function nowMinute(){
  let now = new Date();
  return now.getMinutes();
}

if (checkInElement) {
  if ((nowHour() >= 8 && nowMinute() >= 30) && checkInElement.textContent.includes(CHECK_IN_TEXT)) {
    checkInElement.click();
    setTimeout(function() {
      location.reload(true);
    }, 1000);    
  } else {
    console.log(`현재 시간 ${nowHour()} : ${nowMinute()}은 입실 시간이 아닙니다.` );
  }
} 
else if (checkOutElement) {
  if ((nowHour() == 18 && nowMinute <= 30)&& checkOutElement.textContent.includes(CHECK_OUT_TEXT)) {
    checkOutElement.click();
    setTimeout(function() {
      location.reload(true);
    }, 1000);    
  } else {
    console.log(`현재 시간 ${nowHour()} : ${nowMinute()}은 퇴실 시간이 아닙니다.` );
  }
} 
