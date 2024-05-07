document.addEventListener('DOMContentLoaded', function() {
    const redirectButton = document.getElementById('redirectButton');
    redirectButton.addEventListener('click', function() {
        window.location.href = 'file:///Users/amberpjongluck/Desktop/amber_c1if23/core-interaction/project3/page/index.html'; // Replace 'https://example.com' with the URL of the page you want to link to
    });
});

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

