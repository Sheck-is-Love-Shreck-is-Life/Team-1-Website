import fetch from 'node-fetch';

const loadernesturl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('',options);
    const testResponse = await apiResponse.text();

    return testResponse;

}

export default loadernesturl;