function updateTime() {
    const startDate = new Date('July 26, 2023 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const elapsedSeconds = Math.floor((currentDate - startDate) / 1000);
    document.getElementById('elapsedTime').textContent = elapsedSeconds;}

    
    // Initial call to update the time immediately
    updateTime();

    // Update every second
    setInterval(updateTime, 1000);