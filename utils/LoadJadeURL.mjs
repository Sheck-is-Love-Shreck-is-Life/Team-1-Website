import fetch from "node-fetch";

const loadJadeURL = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type':'application/json'}
    };

    const apiResponse = await fetch('http://localhost:3000/jade',options);
    const loginResponse = await apiResponse.text();

    return loginResponse;
}

export default loadJadeURL;