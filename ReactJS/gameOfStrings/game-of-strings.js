let houses = ['Stark', 'Lannister', 'Targaryen', 'Baratheon'];

const getRandomHouse = function (houses) {
  return houses[Math.floor(Math.random() * houses.length)];
}

const getMove = function () {
  // clone the array, pull an attacker and a defender from it
  let housesLeft = houses.slice(0);
  let defender = getRandomHouse(housesLeft);
  housesLeft.splice(housesLeft.indexOf(defender), 1);
  let attacker = getRandomHouse(housesLeft);

  // return an object representing the the attacker and defender state
  return {
    text: `House ${defender} infringed on the ${attacker}s' honor. 
    As a result, house ${attacker} has decided to attack!`,
    attacker: attacker,
    defender: defender
  };
};

const getLoser = function (move) {
  if (move.text.startWith("House Targaryen")) {
    // Fire and Blood.
    return move.defender;
  }

  if (move.text.includes("infringed on the Lannisters' honor.")) {
    // H̶e̶a̶r̶̶M̶e̶̶R̶o̶a̶r̶!̶ A Lannister always pays his debts.
    return move.defender;
  }

  if (move.text.includes("infringed on the Starks' honor.")) {
    // Attacking is risky. Winter is coming.
    return move.attacker;
  }

  return move.defender;
}

const playGame = function () {
  let move = getMove();
  console.log('Move:\n' + move.text);

  let loser = getLoser(move);
  houses.splice(houses.indexOf(loser), 1);

  console.log('\n  Loser: ' + loser + '\n  Houses Left: ' + houses.join(', ') + '\n  ---\n');
}

while (houses.length > 1) {
  playGame();
}

console.log('Winner: House ' + houses[0]);
console.log('Runner up: ...When you play the game of thrones, you win or you die.');
