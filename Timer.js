class Timer {
  constructor(
    durationInput,
    startButton,
    pauseButton,
    { onStart, onTick, onComplete }
  ) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (onStart && onTick && onComplete) {
      this.onStart = onStart;
      this.onComplete = onComplete;
      this.onTick = onTick;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.idTimer = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.idTimer);
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time;
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
      return;
    }
    this.timeRemaining -= 1;
    if (this.onTick) {
      this.onTick();
    }
  };
}
