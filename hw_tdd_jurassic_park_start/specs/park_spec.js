const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      terry = new Dinosaur("T-Rex", "carnivore", 1058)
      tabetha = new Dinosaur("T-Rex", "carnivore", 1465)
      arthur = new Dinosaur("Anklyosaurus", "herbivore", 632)
      carl = new Dinosaur("Compsognathus", "omnivore", 158)
      ceri = new Dinosaur("Compsognathus", "omnivore", 358)
      JPMorgan_Park = new Park([terry, arthur, carl], 250, "Jurassic Park: Sponsored by JP Morgan")
  })

  it('should have a name', function () {
    const actual = JPMorgan_Park.name;
    assert.strictEqual(actual, "Jurassic Park: Sponsored by JP Morgan")
  });

  it('should have a ticket price', function () {
    const actual = JPMorgan_Park.ticketPrice;
    assert.strictEqual(actual, 250)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = JPMorgan_Park.arrayOfDinosaurs;
    assert.strictEqual(actual, [terry, arthur, carl])
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});


// it('should have a species', function () {
//   const actual = dinosaur.species;
//   assert.strictEqual(actual, 't-rex');
// });