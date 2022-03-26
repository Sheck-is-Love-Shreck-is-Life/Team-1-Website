import assert from 'assert';
import loadmikeyurl from '../utils/loadMikeyurl.mjs'

it("Tests Mikeys URL",async ()=>{

    const urlResponse = await loadmikeyurl();
    console.log("URL Response: ")+urlResponse
    assert.equal(urlResponse, "Hello Mikey");

});