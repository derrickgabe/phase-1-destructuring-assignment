const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Four animals
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Three animals
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays

// 4. Color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Colors without indigo
const [r, o, y, g, b, , v] = colors;

// 6. Only indigo
const [,,,,, indg] = colors;

// Objects

// 7. Muppet variables
const { muppetName, color, song, job, partner } = muppet;

// 8. Nested Muppet variables
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;