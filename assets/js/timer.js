window.onload = function()
{
    initializeTimer();
};

function initializeTimer() {
    var endDate = new Date(2018, 6, 3);
    var currentDate = new Date();
    var seconds = (endDate-currentDate) / 1000;
    if (seconds > 0) {
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        minutes = (hours - Math.floor(hours)) * 60;
        hours = Math.floor(hours);
        days = Math.floor(days);
        seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
        minutes = Math.floor(minutes);
        if(days > 0) {
            hours = hours - (days) * 24;
        }

        setTimePage(days, hours, minutes, seconds);

        function secOut() {
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        showMessage(timerId);
                    }
                    else {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                }
                else {
                    minutes--;
                    seconds = 59;
                }
            }
            else {
                seconds--;
            }
            setTimePage(days, hours,minutes,seconds);
        }
        timerId = setInterval(secOut, 1000)
    }
    else {
        alert("Установленая дата уже прошла");
    }
}

function setTimePage(d, h, m, s) {
    var days = document.getElementsByClassName("content__days");
    days[0].innerHTML = d;
    var hours = document.getElementsByClassName("content__hours");
    hours[0].innerHTML = h;
    var minutes = document.getElementsByClassName("content__minutes");
    minutes[0].innerHTML = m;
    var seconds = document.getElementsByClassName("content__seconds");
    seconds[0].innerHTML = s;
}

function showMessage(timerId) {
    alert("Время истекло!");
    clearInterval(timerId);
}