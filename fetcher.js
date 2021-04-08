const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const URL = args[0];
const FILE = args[1];

request(URL, (error, response, body) => {
  const downloadSize = response.headers['content-length'];

  if (response.statusCode !== 200) {
    console.log('error:', response && response.statusCode); // Print the error if one occurred
    return;
  } 
  fs.writeFile(FILE, body, function (err) {
    if (err) {
      console.log('Error: Failed to write to file');
      return;
    } else console.log(`Downloaded ${downloadSize} bytes to ${FILE}`);
  });
});