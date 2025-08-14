const interval = setInterval(() => {
    console.log("Looking for a Play/Pause button");
    const pauseButton = document.querySelector("button.vjs-playing");
    if (pauseButton) {
        console.log("It is playing, let's pause");
        pauseButton.click();
        clearInterval(interval);
    }

    // This is for initial extension load so it does not infinitely loop on inactive tabs
    const playButton = document.querySelector("button.vjs-paused");
    if (playButton) {
        console.log("Already paused");
        clearInterval(interval);
    }
}, 1000);