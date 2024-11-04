function startTimer() {
    const expiryDate = document.getElementById("expiryDate").value; 
    const expiryTime = document.getElementById("expiryTime").value;
    if (!expiryDate || !expiryTime) {
    alert("Please enter both date and time for the timer."); return;
    }
    const expiryDateTime = new Date(`${expiryDate}T${expiryTime}`);
    document.getElementById("expiryTimeDisplay").textContent = 
    `Expiry Time: ${expiryDateTime}`;
    const timerInterval = setInterval(function () 
    { const currentTime = new Date();
    document.getElementById("currentTime").textContent = `Current Time:
    ${currentTime}`;
    const timeDifference = expiryDateTime - 
    currentTime; if (timeDifference <= 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").textContent = "00d 00h 00m 00s";
    document.getElementById("message").textContent = 
    "Countdown Timer Expired";
    } else {
    const days = Math.floor(timeDifference/ (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference%(1000 * 60 * 60 * 
    24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 
    60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference%(1000*60)) / 
    1000); document.getElementById("countdown").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    }, 1000);
    }