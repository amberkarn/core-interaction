let menuItems = [];


document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date('2003-11-23');
    const daysCounter = document.getElementById('daysCounter');

    // Function to calculate the number of days since the start date
    function calculateDays() {
        const currentDate = new Date();
        const difference = currentDate.getTime() - startDate.getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return days;
    }

    // Function to update the days counter
    function updateCounter() {
        const days = calculateDays();
        daysCounter.textContent = `(it's been ${days} days since November 23, 2003)`;
    }

    // Initial call to update the counter
    updateCounter();

    // Update the counter every second
    setInterval(updateCounter, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const dayClock = document.getElementById('dayclock');
    const hourList = document.querySelector('#dayclock .hour-list');

    // Create hours list
    for (let i = 1; i <= 24; i++) { // Adjusted loop to start from 1 and end at 24
        const hourItem = document.createElement('li');
        hourItem.classList.add('hour-item');
        hourItem.textContent = i;
        hourList.appendChild(hourItem);
    }

    function updateTimeLine() {
        const currentTime = new Date(); // Get current UTC time
        const newYorkTime = new Date(currentTime.toLocaleString("en-US", {timeZone: "America/New_York"}));
        let currentHour = newYorkTime.getUTCHours(); // Get current hour in New York time
        const currentMinute = newYorkTime.getUTCMinutes(); // Get current minute in New York time

        
    
        // If the current hour goes beyond 24, loop back to the start of the day
        if (currentHour >= 24) {
            currentHour -= 24;
        }
    
        const hourItemWidth = hourList.clientWidth / 24; // Width of each hour item
        const linePosition = (hourItemWidth * (currentHour + currentMinute / 60)); // Position of the line
    
        // Calculate the scroll position to center the current hour
        const scrollPosition = linePosition - (dayClock.clientWidth / 2);
        hourList.scrollLeft = scrollPosition;
    
        // Center the line horizontally
        const lineWidth = 0.5; // Width of the line
        const lineLeft = scrollPosition + (dayClock.clientWidth / 2) - (lineWidth / 2);
        const currentTimeLine = document.querySelector('#dayclock .current-time-line');
        if (currentTimeLine) {
            currentTimeLine.style.left = `${lineLeft}px`;
        }
    }
    


    // Initial call to update the time line
    updateTimeLine();

    // Update the time line every second to account for minute changes
    setInterval(updateTimeLine, 1000);
});



