// World Cup 2026 opening match date
// June 11, 2026, 12:00 PM EDT (Mexico City time)
const WORLD_CUP_DATE = new Date('2026-06-11T16:00:00.000Z'); // 12:00 PM EDT = 16:00 UTC

function updateCountdown() {
    const now = new Date();
    const diff = WORLD_CUP_DATE - now;

    if (diff <= 0) {
        // Event has started or passed
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        document.getElementById('message').textContent = '🎉 The World Cup has begun!';
        return;
    }

    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Update message based on time remaining
    let message = '';
    if (days > 365) {
        message = '⚽ The wait continues...';
    } else if (days > 180) {
        message = '🔥 Less than a year to go!';
    } else if (days > 90) {
        message = '⚡ Getting closer!';
    } else if (days > 30) {
        message = '🎯 The excitement builds!';
    } else if (days > 7) {
        message = '🚀 Almost there!';
    } else if (days > 0) {
        message = '🏆 Final countdown!';
    } else {
        message = '⚽ Today is the day!';
    }

    document.getElementById('message').textContent = message;
}

// Info button handler
document.getElementById('info-btn').addEventListener('click', () => {
    chrome.tabs.create({
        url: 'https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026'
    });
});

// Initialize and update every second
updateCountdown();
setInterval(updateCountdown, 1000);
