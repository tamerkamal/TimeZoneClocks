window.onload = () => {
    displayCLocks();
    setInterval(displayCLocks, 1000);
}

function getCurrentTime(nationality, timeZone,) {

    let currentTime = new Date().toLocaleString('en-us',
        { timeZone: timeZone, timeStyle: 'medium', hourCycle: 'h12' }
    );

    console.log(nationality + ': ', currentTime);

    return currentTime;
}

function displayCLocks() {

    let dutchTime = getCurrentTime('Dutch', 'Europe/Amsterdam');
    let egyptTime = getCurrentTime('Egyptian', 'Africa/Cairo');
    let indianTime = getCurrentTime('Indian', 'Asia/Kolkata');

    document.getElementById('dutchTZone').innerHTML = dutchTime;
    document.getElementById('egyptianTZone').innerHTML = egyptTime;
    document.getElementById('indianTZone').innerHTML = indianTime;
}




