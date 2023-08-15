const Dinosaur = require('./models/dinosaur.js');
const Park = require('./models/park.js');

terry = new Dinosaur("T-Rex", "carnivore", 1058)
tabetha = new Dinosaur("T-Rex", "carnivore", 1465)
arthur = new Dinosaur("Anklyosaurus", "herbivore", 632)
carl = new Dinosaur("Compsognathus", "omnivore", 158)
ceri = new Dinosaur("Compsognathus", "omnivore", 358)
JPMorgan_Park = new Park([terry, arthur, carl], 250, "Jurassic Park: Sponsored by JP Morgan")

JPMorgan_Park.addDinosaur(tabetha)
JPMorgan_Park.removeAllDinosaursBySpecies("T-Rex")
console.log(JPMorgan_Park.arrayOfDinosaurs)