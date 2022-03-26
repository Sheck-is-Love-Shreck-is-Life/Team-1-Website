import fetch from 'node-fetch';

const loadmikeyurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://35.202.185.153/mikey',options);
    const testResponse = await apiResponse.text();

    return testResponse;

}

export default loadmikeyurl;