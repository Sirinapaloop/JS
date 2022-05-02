function digitalClock(time_number)  {
    
    let min, sec, hour, calcMin, format = "hh:mm:ss";
    min = time_number / 60;
    sec = (min % 1) * 60; 
    hour = parseInt(min) / 60;
    calcMin = ((hour % 1) * 60);

    return `${(parseInt(hour) % 24).toString().padStart(2, '0')}:${(parseInt(calcMin)).toString().padStart(2, '0')}:${(Math.round(sec)).toString().padStart(2, '0')}`;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));