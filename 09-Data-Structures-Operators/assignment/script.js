// const om = ['a','b','c'];
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    // ES6 Object literal
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    },
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
  };

//   Task 1
  const [player1, player2] = game.players;
  console.log(player1, player2);

  //   Task 2
  const [gkTeam1, ...feildPlayersTeam1] = player1;
  console.log('GK - ' + gkTeam1, feildPlayersTeam1);

  const [gkTeam2, ...feildPlayersTeam2] = player2;
  console.log('GK - ' + gkTeam2, feildPlayersTeam2);

  //   Task 3
  const allPlayers = [...player1, ...player2];
  console.log(allPlayers);

//   Task 4
const players1Final = [...player1, 'Thiago', 'Countinbo', 'Perisic'];
console.log(players1Final);

//   Task 5
const {
    odds: {team1, x: draw, team2}
} = game;
console.log(team1, draw, team2);

//   Task 6
const printGoals = function (...players) {
    // console.log(players);
    console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//   Task 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


console.log('-------- Challenge 2 --------');

// 1.
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1} : ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) 
    average += odd;
    average /=  odds.length;
    console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`);
}



const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for(const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}



document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

// const textAreaResult = function () {
//   const text = document.querySelector('textarea').value;
//   const fineValue = text.toLowerCase().trim().replaceAll('_',' ').split('\n');

//   for (n of fineValue) {
//     const nameTrim = n.trim().split(' ');

//     for (a of nameTrim)
//     console.log(a[0].toUpperCase() + a.slice(1));
//   }
// }

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});