import fetch from "node-fetch";

const loadJadeURL = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://34.71.68.104/jade',options);
    const loginResponse = await apiResponse.text();

    return loginResponse;
}

export default loadJadeURL;