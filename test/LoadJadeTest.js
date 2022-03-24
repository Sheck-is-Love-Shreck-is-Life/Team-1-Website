import loadJadeURL from '../utils/loadJadeURL.mjs';
import assert from 'assert';

it("Tests Jade URL Endoint",async ()=>{

    const urlResponse = await loadJadeURL();
    console.log('URL Response: ')+urlResponse;
    assert.equal(urlResponse, 'Hello Jade');
})