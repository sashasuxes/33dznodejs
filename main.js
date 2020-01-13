console.log('mainjs1');
require('./main2.js');
const uuidv4 = require('uuid/v4');
const random = uuidv4();
console.log(random);
const request = require('request');

request('https://dou.ua/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});