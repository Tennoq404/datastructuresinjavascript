const game = {
  team1: 'arsenal',
  team2: 'liverpool',

  players: [
    [
      'raya',
      'white',
      'zinny',
      'saliba',
      'big gabby',
      'rice',
      'odegaard',
      'havertz',
      'trossard',
      'martinelli',
      'saka',
    ],

    [
      'alisson',
      'van dijk',
      'konate',
      'robertson',
      'trent',
      'endo',
      'szobosai',
      'mcallister',
      'salah',
      'nunez',
      'diaz',
    ],
  ],
  score: '4 :0',
  scored: ['lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gamescored = game.scored;
console.log(game.scored);
for (const [x, y] of gamescored.entries()) {
  console.log(`Goal ${x + 1} : ${y}`);
}

//const {
// odds: { team1: w, x: d, team2: p },
//} = game;
//console.log(w, d, p);
let average = 0;
const entries = Object.values(game.odds);
for (const key of entries) //console.log(key);
  average += key;
average /= entries.length;
console.log(average);

//const entries2 = Object.entries(game.odds);
//console.log(entries2);
/*
for (const [key, value] of entries2) {
  if (key === 'team1') {
    console.log(`Odd of victory Bayern Munich : ${value}`);
  } else if (key === 'team2') {
    console.log(`Odd of victory Borrussia Dortmund : ${value} `);
  } else if (key === 'x') {
    console.log(`Odd of draw : ${value}`);
  }ixtp
}
or 
const (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : 'victory ${game [team]}'
  console.log(`Odd of ${teamstr} ${odd})
}
*/
/*
const { odd = { odds: { team1: 'Bayern', x: 'draw', team2: 'Dortmund' } } } =
  game;

for (const [a, z] of Object.entries(odds)) {
  console.log(`  Odd of ${a} : ${z}`);
}
*/

//for ( const [key, value] of )
