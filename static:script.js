document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Simulating threat updates
setInterval(() => {
    const levels = ["Low", "Medium", "High", "Critical"];
    const threatLevel = levels[Math.floor(Math.random() * levels.length)];
    document.getElementById("threat-level").innerText = threatLevel;
}, 5000);
