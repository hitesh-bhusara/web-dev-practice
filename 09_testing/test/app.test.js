import {test, suite } from 'node:test';
import assert from 'assert';
import { greet ,greetInRussian } from "../app.js";


// use suite or describe for grouping similar logical functions
suite("Greating Functions", ()=> {
    test("greet return the correct greetings",()=>{
        // AAA
        /***
         * Arrange
         * Act
         * Assert
         */

        const expected = 'Hello, World!';
        const actual = greet("World");

        assert.strictEqual(actual,expected);

    });

    test("greetInRussian return the correct greeting in Russian",()=>{

        const expected = 'Привет, мир!';
        const actual = greetInRussian("мир");

        assert.strictEqual(actual,expected);

    });
})

