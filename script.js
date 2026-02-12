// ===== Falling flowers + hearts =====
const fallingContainer = document.getElementById("falling");

// Du kan ändra emojis här om du vill:
const symbols = ["🌸", "🌷", "💜", "💗", "🌼"];

function spawnSymbol() {
  const el = document.createElement("div");
  el.className = "fall";
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const left = Math.random() * 100;           // vw
  const size = 14 + Math.random() * 20;       // px
  const duration = 6 + Math.random() * 7;     // sek
  const delay = Math.random() * 1.8;          // sek

  el.style.left = `${left}vw`;
  el.style.fontSize = `${size}px`;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay = `${delay}s`;

  fallingContainer.appendChild(el);

  setTimeout(() => el.remove(), (duration + delay) * 1000);
}

// lagom mängd
setInterval(spawnSymbol, 420);
for (let i = 0; i < 12; i++) spawnSymbol();


// ===== Random "Why I love you" (mamma) =====
const reasons = [
  "För att du alltid finns där för mig.",
  "För att din kärlek är min största trygghet.",
  "För att du är den mest omtänksamma personen jag träffat.",
  "För att du får andra att känna sig sedda.",
  "För att du har lärt mig vad riktig kärlek är.",
  "För att du gör allt och lite till.",
  "För att du är den finaste människan jag vet.",
  "För att du är den starkaste personen jag känner",
  "För att du är du."
];

const reasonBtn = document.getElementById("reasonBtn");
const reasonOutput = document.getElementById("reasonOutput");

function pickReason() {
  const i = Math.floor(Math.random() * reasons.length);
  return reasons[i];
}

reasonBtn.addEventListener("click", () => {
  reasonOutput.textContent = pickReason();
});

