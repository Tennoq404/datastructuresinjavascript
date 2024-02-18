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
const gameEvents = new Map([
  [17, '⚽GOAL'],
  [36, '↩substitutions'],
  [47, '⚽GOAL'],
  [61, '↩substitutions'],
  [64, '🟡YEllOW CARD'],
  [69, '🔴 RED CARD'],
  [70, '↩substitutions'],
  [72, '↩substitutions'],
  [76, '⚽GOAL'],
  [80, '⚽GOAL'],
  [92, '🟡YEllOW CARD'],
]);

//const events = [gameEvents.values];
//const events = new Set([...gameEvents.values]);
//console.log(gameEvents.values);

let events = [...gameEvents.values()];
console.log(events);
events = new Set(events);
console.log([...events]);

gameEvents.delete(64);
console.log(gameEvents);

console.log(`an events happenened on average ${90 / gameEvents.size} 
minutes`);

for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[FIRST HALF] ${key} : ${value}`);
  } else if (key > 45) {
    console.log(`[SECOND HALF] ${key} : ${value}`);
  }
}
