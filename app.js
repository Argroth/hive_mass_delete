const fs = require('fs');
const path = require('path');
const axios = require('axios');
const util = require('util');


const readFileAsync = util.promisify(fs.readFile);

async function readAndSendAlerts() {
    const data = await readFileAsync(path.join(__dirname, 'alerts.json'), 'utf-8');
    const items = JSON.parse(data);

    for (let item of items) {
        const url = `http://172.20.0.222:9000/api/v1/alert/${item._id}`;
        try {
            const response = await axios.delete(url, {
                auth: {
                    username: '',
                    password: ''
                }
            },);
            console.log(`Status: ${response.status}`);
        } catch (error) {
            console.error(`Error sending DELETE request to ${url}: ${error}`);
        }
    }
}

readAndSendAlerts().catch(error => console.error(error));