import {test, suite,mock } from 'node:test';
import assert from 'assert';
import { processOrder } from "../app.js";


suite("Order feature", ()=> {
    test("that it process the order correctly",()=>{
        // AAA SPY
        // we have made mock for processPayment
        //  function which call external APIs
        const mockedProcessPayment = mock.fn((amount)=>{
            // don't call any api or No side-effects 
            console.log('I am mocked....');
            return {id:"123",amount : amount};
        });

        const expected = {id:"123",amount : 100};

        assert.strictEqual(mockedProcessPayment.mock.callCount(),0);
        const result = processOrder({amount:100},{processPayment:mockedProcessPayment});

        
        assert.deepStrictEqual(result,expected);
        // SPYing on functions
        assert.strictEqual(mockedProcessPayment.mock.callCount(),1);

        const call = mockedProcessPayment.mock.calls[0];
        assert.deepStrictEqual(call.arguments,[100])

    });

    
})