function currentDate() {
    let today = new Date();
    let day = today.getDay();
    if (day == 0) {dayName = "Sunday"}
    if (day == 1) {dayName = "Monday"}
    if (day == 2) {dayName = "Tuesday"}
    if (day == 3) {dayName = "Wednesday"}
    if (day == 4) {dayName = "Thursday"}
    if (day == 5) {dayName = "Friday"}
    if (day == 6) {dayName = "Saturday"}
    let dayNum = today.getDate();
    if (dayNum == 1 || dayNum == 21 || dayNum == 31) {suffix = "st"}
    if (dayNum == 2 || dayNum == 22) {suffix = "nd"}
    if (dayNum == 3 || dayNum == 23) {suffix = "rd"}
    if (dayNum >= 4 && dayNum != 31 && dayNum != 23 && dayNum != 22 && dayNum != 21) {suffix = "th"}
    let month = today.getMonth();
    if (month == 0) {monthName = " January"}
    if (month == 1) {monthName = " February"}
    if (month == 2) {monthName = " March"}
    if (month == 3) {monthName = " April"}
    if (month == 4) {monthName = " May"}
    if (month == 5) {monthName = " June"}
    if (month == 6) {monthName = " July"}
    if (month == 7) {monthName = " August"}
    if (month == 8) {monthName = " September"}
    if (month == 9) {monthName = " October"}
    if (month == 10) {monthName = " November"}
    if (month == 11) {monthName = " December"}
    let year = " " + today.getFullYear();
    let date = dayName + ", " + dayNum + suffix + monthName + year;
    document.getElementById("calendar").innerText = date;
    let t = setTimeout(function(){ currentTime() }, Infinity); 
}
currentDate()