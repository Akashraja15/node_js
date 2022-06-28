console.log("Hello node!!!");

const fs = require('fs');
const os = require('os'); 

var user = os.userInfo();
console.log(user);

// fs.appendFile('message.txt','Hello Node🤩');

console.log('Hello',`${user.username}`);