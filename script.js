const noBtn = document.getElementById("noBtn");
const result = document.getElementById("resultText");
const noMessage = document.getElementById("noMessage");

let noClickCount = 0;

const messages = [
  "Are you suuuure? 🥺",
  "Think again... ❤️",
  "I can wait... but should I? 😏",
  "Last chance to change your mind! 💕",
  "Well, too bad, you don't have a chioce!! 😈",
];

noBtn.addEventListener("click", () => {
  if (noClickCount < messages.length) {
    noMessage.textContent = messages[noClickCount];
    noClickCount++;
  }

  if (noClickCount >= 5) {
    noBtn.textContent = "Yes ❤️";
    noBtn.classList.remove("no");
    noBtn.classList.add("yes");
    noBtn.setAttribute("onclick", "sayYes()");
    noMessage.textContent = messages[noClickCount];
  }
});

function sayYes() {
  result.style.display = "block";
  createHearts(40);
}

function createHearts(amount) {
  const container = document.getElementById("hearts");
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }
}
