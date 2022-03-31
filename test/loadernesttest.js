import assert from 'assert';
import loadernesturl from '../utils/loadernesturl.mjs'

it("Tests Spencers URL",async ()=>{

    const urlResponse = await loadernesturl();
    console.log("URL Response: ")+urlResponse
    assert.equal(urlResponse, "Hello Ernest");

});