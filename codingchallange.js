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

const [player1, player2] = game.players;
console.log(player2);
const [gk, ...fieldplayers] = player1;
const allplayers = [...player1, ...player2];
console.log(allplayers);

const player1Final = [...player1, 'Thiago', 'countinho', 'persic'];
//player1Final = [...player1];
//player1Final.push('thiago', 'coutinho', 'perisic');
//const { team1, x: draw, team2 } = game.odds;
//console.log(team1, draw, team2);
const {
  odds: { team1, x: date, team2 },
} = game;

printgoals = function (...playernames) {
  console.log(
    `the following players scored in yesterdays game ${playernames} they were ${playernames.length} in number`
  );
};
printgoals('davies', 'muller');

printGoals(...game.scored);

team1 < team2 && console.log('Team1 is more likely to win');
team1 < team2 && console.log('Team 1 is more likely to win');

/*
const [...allplayers] = [...player1, ...player2];
console.log(allplayers);
player1Final = [...player1];
console.log(player1Final);
player1Final.push('thiago', 'coutinho', 'perisic');
console.log(player1Final);

*/
