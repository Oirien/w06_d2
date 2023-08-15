const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const { table } = require('console');

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
    assert.deepStrictEqual(actual, [terry, arthur, carl])
  });

  it('should be able to add a dinosaur to its collection', function () {
    JPMorgan_Park.addDinosaur(tabetha);
    const actual = JPMorgan_Park.arrayOfDinosaurs[3]
    assert.deepStrictEqual(actual, tabetha)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    JPMorgan_Park.removeDinosaur(terry);
    const actual = JPMorgan_Park.arrayOfDinosaurs[0]
    assert.notDeepEqual(actual, terry)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = JPMorgan_Park.mostPopularDinosaur()
    assert.strictEqual(actual, terry)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    JPMorgan_Park.addDinosaur(tabetha)
    const actual = JPMorgan_Park.findDinosaurBySpecies("T-Rex")
    assert.deepStrictEqual(actual, [terry, tabetha])
  });

  it('should be able to calculate the total number of visitors per day', function () {
    const actual = JPMorgan_Park.totalNumberOfVisitorsPerDay()
    assert.strictEqual(actual, 1848)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    const actual = JPMorgan_Park.totalNumberOfVisitorsPerYear()
    assert.strictEqual(actual, 674520)
  });

  it('should be able to calculate total revenue for one year', function () {
    const actual = JPMorgan_Park.totalRevenueFromTicketsYearly()
    assert.strictEqual(actual, 168630000)
  });

  it('should be able to remove all the dinosaurs of a given species', function () {
    JPMorgan_Park.addDinosaur(tabetha)
    JPMorgan_Park.removeAllDinosaursBySpecies("T-Rex")
    const actual = JPMorgan_Park.arrayOfDinosaurs
    assert.deepStrictEqual(actual, [arthur, carl])
  })

  it('should be able to find out how many of each dietary type there are', function () {
    JPMorgan_Park.addDinosaur(tabetha);
    JPMorgan_Park.addDinosaur(ceri);
    const actual = JPMorgan_Park.sortDinosaursByDiet()
    assert.deepStrictEqual(actual, {"carnivores": 2, "herbivores": 1, "omnivores": 2})
  })
});


// it('should have a species', function () {
//   const actual = dinosaur.species;
//   assert.strictEqual(actual, 't-rex');
// });