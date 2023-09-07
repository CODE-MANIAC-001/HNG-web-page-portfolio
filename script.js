// Function to update the current day of the week
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
}

// Function to update the current UTC time continuously
function updateUTCTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    function updateTime() {
        const now = new Date();
        const utcTime = now.toISOString().substr(11, 8);
        utcTimeElement.textContent = utcTime;
    }
    
    // Update time immediately and then every 1 second (1000 milliseconds)
    updateTime();
    setInterval(updateTime, 1000);
}

// Call the function to update time continuously
updateUTCTime();


updateDayOfWeek();
updateUTCTime();