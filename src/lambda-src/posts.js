/* eslint-disable */
require('dotenv').config();
const axios = require('axios');

const statusCode = 200;
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-type": "application/json; charset=utf-8"
}

exports.handler = function(event, context, callback) {
    if(event.httpMethod !== 'GET') {
        callback(null, {
            statusCode,
            headers,
            body: 'Error using the API'
        });
    }

    const path = `https://graph.facebook.com/v3.0/625206280892267/feed?fields=message%2Ccreated_time%2Cfull_picture%2Cpermalink_url%2Clikes.limit(1).summary(true)&access_token=${process.env.FACEBOOK_KEY}`

    axios.get(path).then((res) => {
        const { data: {data}} = res
        callback(null, {
            statusCode,
            headers,
            body: JSON.stringify(data)
        });
    }).catch(ex => callback(ex));
}