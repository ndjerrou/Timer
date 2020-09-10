class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick();
    this.idTimer = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.idTimer);
  };

  tick = () => {
    console.log("tick");
  };
}

const durationInput = document.querySelector("#durationInput");
const playButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, playButton, pauseButton);
