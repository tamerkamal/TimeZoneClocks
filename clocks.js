//#region constants

const EuropeAmsterdam = "Europe/Amsterdam";
const AfricaCairo = "Africa/Cairo";
const AsiaKolkata = "Asia/Kolkata";

const DutchTZone = "dutchTZone";
const EgyptianTZone = "egyptianTZone";
const IndianTZone = "indianTZone";

const AM = "AM", PM = "PM";
const AM_PM = "ap";
const H24 = "h24"; H12 = "h12";

const Medium = "medium";
const En_Us = 'en-us';

const HrsToMilliSecs = 1000 * 60 * 60;

const Hrs = "hrs";
const Hr_N_Id = "h_NId";
const Mn_N_Id = "m_NId";
const AM_PM_N_Id = "ap_NId";

const Hr_Eg_Id = "h_EId";
const Mn_Eg_Id = "m_EId";
const AM_PM_Eg_Id = "ap_EId";

const Hr_I_Id = "h_IId";
const Mn_I_Id = "m_IId";
const AM_PM_I_Id = "ap_IId";

const N_Eg_TimeDiffInHrs = getTimeDiffInHrs(getCurrentTime(EuropeAmsterdam, H24), getCurrentTime(AfricaCairo, H24));
const Eg_N_TimeDiffInHrs = -N_Eg_TimeDiffInHrs;

const N_I_TimeDiffInHrs = getTimeDiffInHrs(getCurrentTime(EuropeAmsterdam, H24), getCurrentTime(AsiaKolkata, H24));
const I_N_TimeDiffInHrs = -N_I_TimeDiffInHrs;

const Eg_I_TimeDiffInHrs = getTimeDiffInHrs(getCurrentTime(AfricaCairo, H24), getCurrentTime(AsiaKolkata, H24));
const I_Eg_TimeDiffInHrs = -Eg_I_TimeDiffInHrs;

//#endregion

//#region onload

window.onload = () => {

    displayCLocks();
    setInterval(displayCLocks, 1000);
    appendHrs();
    appendMins();
    appendAM_PM();
}

//#endregion

//#region Main Methods

function onSelectedTimeChange(timezone) {

    let hr_EuropeAmsterdam = document.getElementById(Hr_N_Id).value;
    let mn_EuropeAmsterdam = document.getElementById(Mn_N_Id).value;
    let ap_EuropeAmsterdam = document.getElementById(AM_PM_N_Id).value;

    let hr_AfricaCairo = document.getElementById(Hr_Eg_Id).value;
    let mn_AfricaCairo = document.getElementById(Mn_Eg_Id).value;
    let ap_AfricaCairo = document.getElementById(AM_PM_Eg_Id).value;

    let hr_AsiaKolkata = document.getElementById(Hr_I_Id).value;
    let mn_AsiaKolkata = document.getElementById(Mn_I_Id).value;
    let ap_AsiaKolkata = document.getElementById(AM_PM_I_Id).value;

    let dateObj = new Date();

    let currentYear = dateObj.getFullYear();
    let currentMonth = dateObj.getMonth() + 1;
    let currentDay = dateObj.getDate();

    switch (timezone) {

        case EuropeAmsterdam: {

            if (hr_EuropeAmsterdam && mn_EuropeAmsterdam && ap_EuropeAmsterdam) {

                let time_EuropeAmsterdam_h24Format = Convert_h12_To_h24(hr_EuropeAmsterdam + ':' + mn_EuropeAmsterdam + ' ' + ap_EuropeAmsterdam);

                let hr_EuropeAmsterdam_h24Format = time_EuropeAmsterdam_h24Format.split(':')[0];
                let mn_EuropeAmsterdam_h24Format = time_EuropeAmsterdam_h24Format.split(':')[1];

                let dateTime_EuropeAmsterdam_h24Format = new Date(
                    currentYear,
                    currentMonth,
                    currentDay,
                    hr_EuropeAmsterdam_h24Format,
                    mn_EuropeAmsterdam_h24Format);

                let dateTime_AfricaCairo_h24Format = addHoursToDate(dateTime_EuropeAmsterdam_h24Format, -N_Eg_TimeDiffInHrs);
                let dateTime_AsiaKolkata_h24Format = addHoursToDate(dateTime_EuropeAmsterdam_h24Format, -N_I_TimeDiffInHrs);

                let dateTime_AfricaCairo_h12Format = ConvertDate_h24_To_h12(dateTime_AfricaCairo_h24Format);
                let dateTime_AsiaKolkata_h12Format = ConvertDate_h24_To_h12(dateTime_AsiaKolkata_h24Format);

                hr_AfricaCairo = dateTime_AfricaCairo_h12Format.split(':')[0];
                mn_AfricaCairo = dateTime_AfricaCairo_h12Format.split(':')[1];
                ap_AfricaCairo = dateTime_AfricaCairo_h12Format.split(':')[2];

                hr_AsiaKolkata = dateTime_AsiaKolkata_h12Format.split(':')[0];
                mn_AsiaKolkata = dateTime_AsiaKolkata_h12Format.split(':')[1];
                ap_AsiaKolkata = dateTime_AsiaKolkata_h12Format.split(':')[2];

                document.getElementById(Hr_Eg_Id).value = hr_AfricaCairo;
                document.getElementById(Mn_Eg_Id).value = mn_AfricaCairo;
                document.getElementById(AM_PM_Eg_Id).value = ap_AfricaCairo;

                document.getElementById(Hr_I_Id).value = hr_AsiaKolkata;
                document.getElementById(Mn_I_Id).value = mn_AsiaKolkata;
                document.getElementById(AM_PM_I_Id).value = ap_AsiaKolkata;
            }

            break;
        }

        case AfricaCairo: {

            if (hr_AfricaCairo && mn_AfricaCairo && ap_AfricaCairo) {

                let time_AfricaCairo_h24Format = Convert_h12_To_h24(hr_AfricaCairo + ':' + mn_AfricaCairo + ' ' + ap_AfricaCairo);

                let hr_AfricaCairo_h24Format = time_AfricaCairo_h24Format.split(':')[0];
                let mn_AfricaCairo_h24Format = time_AfricaCairo_h24Format.split(':')[1];

                let dateTime_AfricaCairo_h24Format = new Date(
                    currentYear,
                    currentMonth,
                    currentDay,
                    hr_AfricaCairo_h24Format,
                    mn_AfricaCairo_h24Format);

                let dateTime_EuropeAmsterdam_h24Format = addHoursToDate(dateTime_AfricaCairo_h24Format, -Eg_N_TimeDiffInHrs);
                let dateTime_AsiaKolkata_h24Format = addHoursToDate(dateTime_AfricaCairo_h24Format, -Eg_I_TimeDiffInHrs);

                let dateTime_EuropeAmsterdam_h12Format = ConvertDate_h24_To_h12(dateTime_EuropeAmsterdam_h24Format);
                let dateTime_AsiaKolkata_h12Format = ConvertDate_h24_To_h12(dateTime_AsiaKolkata_h24Format);

                hr_EuropeAmsterdam = dateTime_EuropeAmsterdam_h12Format.split(':')[0];
                mn_EuropeAmsterdam = dateTime_EuropeAmsterdam_h12Format.split(':')[1];
                ap_EuropeAmsterdam = dateTime_EuropeAmsterdam_h12Format.split(':')[2];

                hr_AsiaKolkata = dateTime_AsiaKolkata_h12Format.split(':')[0];
                mn_AsiaKolkata = dateTime_AsiaKolkata_h12Format.split(':')[1];
                ap_AsiaKolkata = dateTime_AsiaKolkata_h12Format.split(':')[2];

                document.getElementById(Hr_N_Id).value = hr_EuropeAmsterdam;
                document.getElementById(Mn_N_Id).value = mn_EuropeAmsterdam;
                document.getElementById(AM_PM_N_Id).value = ap_EuropeAmsterdam;

                document.getElementById(Hr_I_Id).value = hr_AsiaKolkata;
                document.getElementById(Mn_I_Id).value = mn_AsiaKolkata;
                document.getElementById(AM_PM_I_Id).value = ap_AsiaKolkata;
            }

            break;
        }

        case AsiaKolkata: {

            if (hr_AsiaKolkata && mn_AsiaKolkata && ap_AsiaKolkata) {

                let time_AsiaKolkata_h24Format = Convert_h12_To_h24(hr_AsiaKolkata + ':' + mn_AsiaKolkata + ' ' + ap_AsiaKolkata);

                let hr_AsiaKolkata_h24Format = time_AsiaKolkata_h24Format.split(':')[0];
                let mn_AsiaKolkata_h24Format = time_AsiaKolkata_h24Format.split(':')[1];

                let dateTime_AsiaKolkata_h24Format = new Date(
                    currentYear,
                    currentMonth,
                    currentDay,
                    hr_AsiaKolkata_h24Format,
                    mn_AsiaKolkata_h24Format);

                let dateTime_AfricaCairo_h24Format = addHoursToDate(dateTime_AsiaKolkata_h24Format, -I_Eg_TimeDiffInHrs);
                let dateTime_EuropeAmsterdam_h24Format = addHoursToDate(dateTime_AsiaKolkata_h24Format, -I_N_TimeDiffInHrs);

                let dateTime_AfricaCairo_h12Format = ConvertDate_h24_To_h12(dateTime_AfricaCairo_h24Format);
                let dateTime_EuropeAmsterdam_h12Format = ConvertDate_h24_To_h12(dateTime_EuropeAmsterdam_h24Format);

                hr_AfricaCairo = dateTime_AfricaCairo_h12Format.split(':')[0];
                mn_AfricaCairo = dateTime_AfricaCairo_h12Format.split(':')[1];
                ap_AfricaCairo = dateTime_AfricaCairo_h12Format.split(':')[2];

                hr_EuropeAmsterdam = dateTime_EuropeAmsterdam_h12Format.split(':')[0];
                mn_EuropeAmsterdam = dateTime_EuropeAmsterdam_h12Format.split(':')[1];
                ap_EuropeAmsterdam = dateTime_EuropeAmsterdam_h12Format.split(':')[2];

                document.getElementById(Hr_Eg_Id).value = hr_AfricaCairo;
                document.getElementById(Mn_Eg_Id).value = mn_AfricaCairo;
                document.getElementById(AM_PM_Eg_Id).value = ap_AfricaCairo;

                document.getElementById(Hr_N_Id).value = hr_EuropeAmsterdam;
                document.getElementById(Mn_N_Id).value = mn_EuropeAmsterdam;
                document.getElementById(AM_PM_N_Id).value = ap_EuropeAmsterdam;
            }

            break;
        }
    }
}

//#endregion

//#region Helper Methods

function getCurrentTime(timeZone, hourCycle) {

    let currentTime = new Date().toLocaleString(En_Us, { timeZone: timeZone, timeStyle: Medium, hourCycle: hourCycle });

    return currentTime;
}

function getTimeDiffInHrs(time1String, time2String) {

    let time1Array = time1String.split(':');

    let hr1 = time1Array[0], min1 = time1Array[1];


    let time2Array = time2String.split(':');

    let hr2 = (time2Array[0]), min2 = time2Array[1];

    // Creating Date Object 
    let dateObj = new Date();

    let currentYear = dateObj.getFullYear();
    let currentMonth = dateObj.getMonth() + 1;
    let currentDay = dateObj.getDate();

    let dateTime1 = new Date(currentYear, currentMonth, currentDay, hr1, min1);
    let dateTime2 = new Date(currentYear, currentMonth, currentDay, hr2, min2);

    let diff = (dateTime1 - dateTime2) //.addHours(isPM2 ? 12 : 0);

    let diffInHrs = (diff / 1000 / 60 / 60);

    return diffInHrs;
}

function addHoursToDate(objDate, intHours) {
    var numberOfMlSeconds = objDate.getTime();
    var addMlSeconds = (intHours * 60) * 60 * 1000;
    var newDateObj = new Date(numberOfMlSeconds + addMlSeconds);

    return newDateObj;
}

function displayCLocks() {

    let dutchTime = getCurrentTime(EuropeAmsterdam, H12);
    let egyptTime = getCurrentTime(AfricaCairo, H12);
    let indianTime = getCurrentTime(AsiaKolkata, H12);

    document.getElementById(DutchTZone).innerHTML = dutchTime;
    document.getElementById(EgyptianTZone).innerHTML = egyptTime;
    document.getElementById(IndianTZone).innerHTML = indianTime;
}

function Convert_h12_To_h24(time_h12) {
    var time = time_h12;
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AMPM = time.match(/\s(.*)$/)[1];
    if (AMPM == "PM" && hours < 12) hours = hours + 12;
    if (AMPM == "AM" && hours == 12) hours = hours - 12;
    var sHours = hours.toString();
    var sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;
    //alert(sHours + ":" + sMinutes);
    return sHours + ":" + sMinutes;
}

function ConvertDate_h24_To_h12(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + ampm;
    return strTime;
}

function appendHrs() {

    let hrsDropDowns = document.getElementsByClassName(Hrs);

    for (let i = 0; i < hrsDropDowns.length; i++) {

        // for (let j = 0; j < 10; j++) {

        //     let option = createOption('0' + j, '0' + j);
        //     hrsDropDowns.item(i).appendChild(option);
        // }

        for (let j = 0; j < 13; j++) {

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
    let apDropdowns = document.getElementsByClassName(AM_PM);

    for (let i = 0; i < apDropdowns.length; i++) {
        let option1 = createOption(AM, AM);
        let option2 = createOption(PM, PM);
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

//#endregion





