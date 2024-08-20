// Set the date and time for the countdown target
const countdownDate = new Date('November 2, 2024 13:45:00').getTime();

// Update the countdown every second
const countdownFunction = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time difference
    const timeDifference = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the result in the element with id="time"
    document.getElementById('time').innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

    // If the countdown is over, display a message
    if (timeDifference < 0) {
        clearInterval(countdownFunction);
        document.getElementById('time').innerHTML = 'The time has come!';
    }
}, 1000);
