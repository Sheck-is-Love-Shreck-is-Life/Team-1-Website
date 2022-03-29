import assert from 'assert';
import loadclaysonurl from '../utils/loadclaysonurl.mjs'

it("Tests claysons URL",async ()=>{

    const urlResponse = await loadclaysonurl();
    console.log("URL Response: ")+urlResponse
    assert.equal(urlResponse, "Hello clayson");

});