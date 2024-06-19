const portfolioTitles = [
  "Tech Enthusiast",
  "CyberSpace Explorer",
  "Jurassic Geek",
  "Gadget Lover",
  "GTA Fanatic",
  "Analyst",
  "Python Developer",
  "Programmer"
  // "Creator of Nexus"
];

// Shuffle the array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(portfolioTitles);

let currentIndex = 0;

function displayNextTitle() {
  document.getElementById("tr").textContent = portfolioTitles[currentIndex];
  currentIndex = (currentIndex + 1) % portfolioTitles.length;
}

setInterval(displayNextTitle, 2000);
