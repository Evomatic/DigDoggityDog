const { expect } = require('chai');
const { digDoggityDog } = require('../index.js')

describe("DigDoggityDog", () => {
    
    it("Should replace the period with a doggy emoji", () => {
        const doggyString = "I hope I can get a dog soon.";
        expect(digDoggityDog(doggyString)).to.equal("I hope I can get a dog soon🐕");
    });

    it("Should add a doggy even if there is no period", () => {
        const doggyString2 = "Doggies are the best";
        expect(digDoggityDog(doggyString2)).to.equal("Doggies are the best🐕");
    });

    it("Should return an error if input is not a string", () => {
        const doggyNumber = 1989;
        expect(digDoggityDog(doggyNumber)).to.equal("ERROR: this is not a string, so no doggy for you ;(");
    });
})