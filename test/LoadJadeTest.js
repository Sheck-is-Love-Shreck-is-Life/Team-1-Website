import assert from 'assert';
import LoadJadeURL from '../utils/LoadJadeURL.mjs';

it("Tests Jade URL",async ()=>{

    const urlResponse = await LoadJadeURL();
    console.log('URL Response: ')+urlResponse;
    assert.equal(urlResponse, 'Hello Jade');
});