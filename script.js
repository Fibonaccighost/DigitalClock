let clock = document.getElementById("clock")

function showtime() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let session = "AM"

    if (hour<12) {
        hour = hour
        session = "AM"
    } else {
        hour = hour - 12
        session = "PM"
    }
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = `${hour} : ${minute} : ${second} ${session}`
    clock.textContent = time
}

setInterval(() => {
    showtime()
}, 1000);