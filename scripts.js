const body = document.querySelector('body'),
    hourHand = document.querySelector('.hour'),
    minHand = document.querySelector('.minute'),
    secHand = document.querySelector('.second'),
    modewitch = document.querySelector('.mode-switch');


    const updateTime = () => {
        
        //get current time 
        let date = new Date(),

        //calculate degrees for clock hands
        secToDeg = (date.getSeconds() / 60) * 360;
        minToDeg = (date.getMinutes() / 60) * 360;
        hourToDeg = (date.getHours() / 12) * 360;


        //Rotate the hands based on current time degree
        secHand.style.transform = `rotate(${secToDeg}deg)`
        minHand.style.transform = `rotate(${minToDeg}deg)`
        hourHand.style.transform = `rotate(${hourToDeg}deg)`
    }

    setInterval(updateTime, 1000);