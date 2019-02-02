console.log("Javascript is here!");

const soundButtons = document.getElementsByClassName("sound-button");


const loops = document.getElementsByTagName("audio");

let isPlaying = [false, false, false, false];

for (let i = 0; i < soundButtons.length; i++) {
    let currentButton = soundButtons[i];
    currentButton.addEventListener("click", function() {
        // First Step
        currentButton.classList.toggle("pushed-button");

        // Second Step
        if (isPlaying[i]) {
            loops[i].pause();
            loops[i].load();
        } else {
            loops[i].play();
        }
        isPlaying[i] = !isPlaying[i];
    });
}














// SUPPORT FOR FULL BUTTON

const allButton = document.querySelector(".sound-button-2");
let allOn = false;

allButton.addEventListener("click", function() {
    allButton.classList.toggle("pushed-button-2");
    for (let sb of soundButtons) {
        sb.classList.toggle("hide");
    }
    if (allOn) {
        for (let loop of loops) {
            loop.pause();
            loop.load();
        }
    } else {
        for (let loop of loops) {
            loop.play();
        }
    }
    allOn = !allOn;
})

  