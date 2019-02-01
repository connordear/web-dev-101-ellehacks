console.log("Javascript is here!");

const soundButtons = document.getElementsByClassName("sound-button");


const loops = document.getElementsByTagName("audio");

let isPlaying = [false, false, false, false];

for (let i = 0; i < soundButtons.length; i++) {
    let currentButton = soundButtons.item(i);
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

  