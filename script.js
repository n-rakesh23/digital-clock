let hours =document.querySelector("#hours");
let minutes =document.querySelector("#minutes");
let seconds =document.querySelector("#seconds");
let ampm=document.querySelector("#ampmtext");


updateTime();

setInterval(updateTime,1000);


function updateTime(){
    let time = new Date();

let hour = time.getHours();
let minute = time.getMinutes();
let second = time.getSeconds();
if(hour>=12&&hour<24){
    ampm.innerText="PM";
}
else{
    ampm.innerText="AM";
}
if(hour>12&&hour<24){
    hour=hour-12;
}


if(hour<10){
    hours.innerText=`0${hour}`;
}
else{
    hours.innerText=`${hour}`;
}
if(minute<10){
    minutes.innerText=`0${minute}`;
}
else{
    minutes.innerText=`${minute}`;
}

if(second<10){
    seconds.innerText=`0${second}`;
}
else{
    seconds.innerText=`${second}`;
}


}
