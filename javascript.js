let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let currentdateElem = document.getElementById("current-date");

function displayTime(){
    let date = new Date();

    //clock logic
    //Getting hours , min, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    //date logic
    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getFullYear();
    //format date as DD/MM/YYYY
    let formatDate = `${day.toString().padStart(2,'0')}-${month.toString().padStart(2,'0')}-${year}`;
    currentdateElem.innerText = formatDate;
}

setInterval(displayTime, 1000);
displayTime();