let refs = {
  daysRef: document.querySelector("[data-value='days']"),
  hoursRef: document.querySelector("[data-value='hours']"),
  minsRef: document.querySelector("[data-value='mins']"),
  secsRef: document.querySelector("[data-value='secs']"),
};

const finishDay = new Date("September 20, 2021 16:00:00");

class Timer {
  constructor(finishDay) {
    this.finishDay = finishDay;
  }
  setDate() {
    let timerID = setInterval(() => {
      const dateNow = Date.now();
      const distance = this.finishDay - dateNow;

      if (distance < 0) {
        clearInterval(timerID);
        return;
      }

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((distance / 1000 / 60) % 60);
      let seconds = Math.floor((distance / 1000) % 60);

      refs.daysRef.innerHTML = `${days}`,
      refs.hoursRef.innerHTML = `${hours}`,
      refs.minsRef.innerHTML = `${minutes}`,
      refs.secsRef.innerHTML = `${seconds}`;
    }, 1000);
  }
}

let timer = new Timer(finishDay);
timer.setDate();
