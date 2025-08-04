
let lastStatus = "";

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function showInfo() {
    const popup = document.getElementById('info-popup');
    popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
}

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

function sendNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body });
    }
}

function determineMarketStatus() {
    const statusBox = document.getElementById("visual-indicator");
    const statusTitle = document.getElementById("main-status");
    const statusDesc = document.getElementById("status-description");

    const states = ["BUY", "HOLD", "WARNING"];
    const choice = states[Math.floor(Math.random() * states.length)];

    let currentStatus = "";
    if (choice === "BUY") {
        statusBox.className = "indicator-box green";
        statusTitle.innerText = "Market Opportunity: BUY";
        statusDesc.innerText = "Multiple assets showing strong buying conditions.";
        currentStatus = "BUY";
    } else if (choice === "HOLD") {
        statusBox.className = "indicator-box yellow";
        statusTitle.innerText = "Market State: HOLD";
        statusDesc.innerText = "No strong momentum. Wait and watch.";
        currentStatus = "HOLD";
    } else {
        statusBox.className = "indicator-box red";
        statusTitle.innerText = "Caution: WARNING";
        statusDesc.innerText = "Gold is surging while crypto hesitates. Large moves possible.";
        currentStatus = "WARNING";
    }

    if (currentStatus !== lastStatus && lastStatus !== "") {
        sendNotification("CHEATSHEET Alert", `Market status changed to: ${currentStatus}`);
    }

    lastStatus = currentStatus;
}

window.onload = () => {
    requestNotificationPermission();
    determineMarketStatus();
    setInterval(determineMarketStatus, 10000); // 10s refresh
}
