import assert from 'assert';
import loadspencerurl from '../utils/loadspencerurl.mjs'

it("Tests Spencers URL",async ()=>{

    const urlResponse = await loadspencerurl();
    console.log("URL Response: ")+urlResponse
    assert.equal(urlResponse, "Hello Spencer");

});