const axios = require('axios');

async function getJSONAsync() {
    let json = await axios.get('http://jsonplaceholder.typicode.com/posts/1');
    console.log(json)
    return json.data;
}

getJSONAsync().then(data => console.log(data))