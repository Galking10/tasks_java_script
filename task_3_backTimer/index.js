const refs = {
  timer: document.querySelector('.timer'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  minutes: document.querySelector('[data-value="mins"]'),
  seconds: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.linkToElement = document.querySelector(selector);
    this.days = this.linkToElement.querySelector('[data-value="days"]');
    this.hours = this.linkToElement.querySelector('[data-value="hours"]');
    this.minutes = this.linkToElement.querySelector('[data-value="mins"]');
    this.seconds = this.linkToElement.querySelector('[data-value="secs"]');
  }
  counter = () => {
    let dateNow = new Date();
    let time = this.targetDate - dateNow;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    if (time < 0) {
      this.days.innerText = 'All';
      this.hours.innerText = 'All';
      this.minutes.innerText = 'All';
      this.seconds.innerText = 'All';
      return;
    }

    this.days.innerText = days;
    this.hours.innerText = hours;
    this.minutes.innerText = mins;
    this.seconds.innerText = secs;
  };
  
  startTimer = () => {

    setInterval(this.counter, 1000);
  };
}

let downTimer = new CountdownTimer('#timer-1', new Date('Jul 17, 2023'));

downTimer.startTimer();

// setInterval(() => {
//   let targetDate = new Date('Jul 26, 2022 15:38');
//   let dateNow = new Date();
//   let time = targetDate - dateNow;

//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   if(time < 0){
//     refs.days.innerText = 'ВСЁ';
//     refs.hours.innerText =  'ВСЁ';
//     refs.minutes.innerText = 'ВСЁ';
//     refs.seconds.innerText = 'ВСЁ';
//     return
//   }
//   refs.days.innerText = days;
//   refs.hours.innerText = hours;
//   refs.minutes.innerText = mins;
//   refs.seconds.innerText = secs;
// }, 1000);
