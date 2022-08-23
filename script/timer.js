let secondsLeft = 1800; // 30:00 in seconds
const timerElem = document.querySelector('.timer');


const getTime = () => {
    if(secondsLeft === 0){
        secondsLeft = 1800;
    }

    const seconds = secondsLeft % 60
    const minutes = (secondsLeft - seconds) / 60;
    secondsLeft--;

    timerElem.innerText = `Осталось ${String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')}`;
}

getTime();
setInterval(() => getTime(), 1000);