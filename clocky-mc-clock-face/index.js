// Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.


let whatTimeIsIt = function(angle) {
    // Your code here
    let hour = Math.floor(angle / 30);
    if(angle === 0 || (angle > 0 && angle < 30)) hour = 12;
    let minute = Math.floor(angle % 30 * 2);
    if(hour < 10) hour = '0' + hour;
    if(minute < 10) minute = '0' + minute;
    return `${hour}:${minute}`;
  }

  console.log(whatTimeIsIt(0));
  console.log(whatTimeIsIt(90));
  console.log(whatTimeIsIt(180));
  console.log(whatTimeIsIt(270));
  console.log(whatTimeIsIt(360));
  