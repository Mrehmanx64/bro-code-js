function rolldice() {
  const number = parseInt(document.getElementById("number").value);
  const diceresult = document.getElementById("diceresult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];

  for (let i = 0; i < number; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    values.push(roll);
    images.push(`<img src="./images/${roll}.jpg" alt="dice-${roll}">`);
  }

  diceresult.textContent = `Dice: ${values.join(", ")}`;
  diceimages.innerHTML = images.join("");
}
