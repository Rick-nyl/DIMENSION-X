const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || '', // DIMENSION-X~SE1EiJAT#t9ALwCFCM6_TsLr0aJtq7CUxV0o8HTwq3WKAQ5DExH0.
MONGODB_URI: process.env.MONGODB_URI || '', // ENTER YOUR MONGODB URL TO THIS.
















































































































































































// DO NOT MODIFY THIS WITHOUT PERMISSION FROM THE DEVELOPER..! ❗
DOWNLOAD_URI: process.env.DOWNLOAD_URI || "",

};
