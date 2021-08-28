const daysupdate = document.getElementById('days')
const hoursupdate = document.getElementById('hours')
const minutesupdate = document.getElementById('minutes')
const secondupdate  = document.getElementById('second')



const newYear = '1 jan 2022';
function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const second = (newYearDate - currentDate) /1000;

    const days = Math.floor(second/3600/24);
    const hours = Math.floor(second/3600 )% 24;
    const minutes = Math.floor(second/60 )% 60;
    const totalsecond = Math.floor(second)% 60 ;
  
    
    
    

    daysupdate.innerHTML = formatTime(days);
    hoursupdate.innerHTML = formatTime(hours);
    minutesupdate.innerHTML = formatTime(minutes);
    secondupdate.innerHTML = formatTime(totalsecond); 
}

function formatTime(time){
   return time < 10 ? `0${time}` :time  ; 
}

countdown();
setInterval(countdown, 1000);


 