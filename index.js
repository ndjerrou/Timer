const durationInput = document.querySelector("#duration");
const playButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, playButton, pauseButton, {
  onStart() {
    console.log("started");
  },
  onTick() {
    console.log("Ticked down");
  },
  onComplete() {
    console.log("Timer is complete");
  },
});
