function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-result').textContent = `You rolled a ${result}!`;
}

function randomEmoji() {
  const emojis = ["😎", "🚀", "🎉", "💻", "🧠", "🤖", "🐱", "🌈", "🔥", "🍕"];
  const result = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById('emoji-result').textContent = result;
}

function randomColor() {
  const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  document.getElementById('color-result').textContent = `Color: ${color}`;
  document.getElementById('color-box').style.backgroundColor = color;
}

function randomFact() {
  const facts = [
    "Octopuses have 3 hearts.",
    "Bananas are berries, but strawberries aren't.",
    "A day on Venus is longer than a year on Venus.",
    "Some cats are allergic to humans.",
    "Sharks existed before trees.",
    "The Eiffel Tower can grow 6 inches in summer.",
    "Honey never spoils.",
    "Sloths can hold their breath longer than dolphins.",
  ];
  const result = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('fact-result').textContent = result;
}
