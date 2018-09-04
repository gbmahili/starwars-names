var expect = require('chai').expect;
var starWars = require('./index');

describe('gbm-starwars-name', function() {

    describe('all', function () {
        // Make sure it is an array of strings
        it('should be an array of strings', function () {
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        // Make sure it contains Luke Skywalker
        it('should contain Luke Skywalker', function () {
            expect(starWars.all).to.include("Luke Skywalker");

            // Can also be writen like this:
            // expect(starWars.all).to.satisfy(containsLuke);
            // function containsLuke(array) {
            //     return array.indexOf("Luke Skywalker") > -1;
            // }
        });

    });

    // Check the random:
    describe('random', function () {
        it('should return a random item from the starwars.all', function () {
            // Create a variable that holds a random value when we call the starWars.random()
            var randomItem = starWars.random();
            // We expect the value in that variable to be included in starWars.all
            expect(starWars.all).to.include(randomItem);
        });
    });
});