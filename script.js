
function counterPlay() {
    let value = Math.floor(Math.random() * 3);
    if (value === 0) {
        console.log("rock");
    } if (value === 1) {
        console.log("paper");
    } else if (value === 2) {
        console.log("scissors");
    }
}

counterPlay()