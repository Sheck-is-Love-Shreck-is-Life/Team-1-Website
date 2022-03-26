import fetch from 'node-fetch';

const loadclaysonurl = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://35.193.253.152/clayson',options);
    const testResponse = await apiResponse.text();

    return testResponse;

}

export default loadclaysonurl;