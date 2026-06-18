import {test, mock,describe,it } from 'node:test';
import assert from 'assert';
import { fetchData } from "../app.js";
// it is alias of test 
// describe is alise of suit

describe("User feature", ()=> {
    test("it fetches the data from server",(t)=>{
        const data = fetchData(1);

        t.assert.snapshot(data);
        
    });

    
})