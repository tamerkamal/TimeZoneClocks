window.onload = () => {
    displayCLocks();
    setInterval(displayCLocks, 1000);
    appendHrs();
    appendMins();
    appendAM_PM();
}

function getCurrentTime(nationality, timeZone,) {

    let currentTime = new Date().toLocaleString('en-us',
        { timeZone: timeZone, timeStyle: 'medium', hourCycle: 'h12' }
    );

    //console.log(nationality + ': ', currentTime);

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

function appendHrs() {

    let hrsDropDowns = document.getElementsByClassName("hrs");

    for (let i = 0; i < hrsDropDowns.length; i++) {

        for (let j = 0; j < 10; j++) {

            let option = createOption('0' + j, '0' + j);
            hrsDropDowns.item(i).appendChild(option);
        }

        for (let j = 10; j < 13; j++) {

            let option = createOption(j, j);
            hrsDropDowns.item(i).appendChild(option);
        }
    }
}

function appendMins() {

    let mnsDropDowns = document.getElementsByClassName("mns");

    for (let i = 0; i < mnsDropDowns.length; i++) {

        for (let j = 0; j < 10; j++) {

            let option = createOption('0' + j, '0' + j);
            mnsDropDowns.item(i).appendChild(option);
        }

        for (let j = 10; j < 60; j++) {

            let option = createOption(j, j);
            mnsDropDowns.item(i).appendChild(option);
        }
    }
}

function appendAM_PM() {
    let apDropdowns = document.getElementsByClassName('ap');

    for (let i = 0; i < apDropdowns.length; i++) {
        let option1 = createOption("AM", "AM");
        let option2 = createOption("PM", "PM");
        apDropdowns.item(i).appendChild(option1);
        apDropdowns.item(i).appendChild(option2);
    }
}

function createOption(optValue, optText) {
    let option = document.createElement('option');
    option.value = optValue;
    option.innerHTML = optText;
    return option;
}




