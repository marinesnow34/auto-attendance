let checkInElement = document.querySelector("#checkIn");
let checkOutElement = document.querySelector("#checkOut");

function getCurrentTime() {
  let now = new Date();
  return { hour: now.getHours(), minute: now.getMinutes() };
}

function isAllowCheckIn(hour, minute) {
  return hour === 8 && minute >= 30 && minute <= 59;
}

function isAllowCheckOut(hour, minute) {
  return hour === 18 && minute >= 0 && minute <= 29;
}

function clickElement(element){
  element.click();
  setTimeout(() => location.reload(true), 1000);
}

function handleCheckIn(hour, minute, element) {
  if (isAllowCheckIn(hour, minute)) {
    clickElement(element);
    console.log("출석 완료");
    return true;
  } else {
    console.log(`현재 시간 ${hour} : ${minute}은 입실 시간이 아닙니다.`);
    return false;
  }
}

function handleCheckOut(hour, minute, element) {
  if (isAllowCheckOut(hour, minute)) {
    clickElement(element);
    console.log("퇴실 완료");
    return true;
  } else {
    console.log(`현재 시간 ${hour} : ${minute}은 퇴실 시간이 아닙니다.`);
    return false;
  }
}

let { hour: currentHour, minute: currentMinute } = getCurrentTime();

if (checkInElement) {
  handleCheckIn(currentHour, currentMinute, checkInElement);
} else if (checkOutElement) {
  let checkOutTimeElement = checkOutElement.querySelector("span");
  if (checkOutTimeElement) {
    let [outHour, outMinute] = checkOutTimeElement.textContent.trim().split(':').map(Number);
    if (!isAllowCheckOut(outHour, outMinute)) {
      console.log("퇴실 가능 시간 전에 퇴실을 눌렀습니다.");
      handleCheckOut(currentHour, currentMinute, checkOutElement)
    }
  } else {
    handleCheckOut(currentHour, currentMinute, checkOutElement);
  }
}
