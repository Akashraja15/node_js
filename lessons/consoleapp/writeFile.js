var fs = require('fs');
var content = 'Tom and Jerry are very good friends';
var writeStream = fs.createwriteStream('movies.txt');
writeStream.write(content, 'UTF-8');
writeStream.end();

writeStream.on('finish', function() {
    console.log('content written to the File');
});

writeStream.on('error', function(err) {
    console.log(`ERROR!!! ${err.stack}`);
});
console.log('End...');