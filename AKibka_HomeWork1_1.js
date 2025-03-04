// Here's how I did this by my own:

     let _randomValue = 300;
     let resultHours = Math.floor(_randomValue/60);
     let resultMinutes = _randomValue % 60;
     if (resultMinutes > 10)
        console.log(resultHours + ":" + resultMinutes);
    else if (resultMinutes < 10)
        console.log(resultHours + ":0" + resultMinutes);
    else
    console.log (resultHours + ":00");

// Here's how I would write with GenAI tips:

function convertToHoursAndMinutes(number) { const hours = Math.floor(number / 60);
    const minutes = number % 60; return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }
    
