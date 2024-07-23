const body = document.querySelector('body'),
    hourHand = document.querySelector('.hour'),
    minHand = document.querySelector('.minute'),
    secHand = document.querySelector('.second'),
    modeSwitch = document.querySelector('.mode-switch');



    //event listener for mode-switch button
    modeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark");
        if (body.style.backgroundColor !== 'black') {
             body.style.backgroundColor = 'black';
             modeSwitch.textContent = "Light Mode";
        } else {
            body.style.backgroundColor = 'white';
            modeSwitch.textContent = "Dark Mode";

}

        // body.classList.toggle("dark");
    })

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

    //set clock hands every second
    setInterval(updateTime, 1000);

    //call updateTime function on page load
    updateTime();