// const _ = require('lodash');


// console.log(_.isString('abc'));
// console.log(_.isString(2));
// var filteredArray = _.uniq(['akash',1,2,'raja','akash','daniel']);
// console.log(filteredArray);


// console.log(process.argv);
// console.log(process.argv[2]);

// var command = process.argv[2];







const yargs = require('yargs');
const notes = require('./yargs-ex')

// console.log("process",process.argv);
console.log("yargs",yargs.argv);
var argv = yargs.argv;
// debugger;
var command = argv._[0];
// debugger;

if(command === 'list'){
    notes.getAllNotes();
} else if(command === 'read'){
    notes.readNote(argv.title);
} else if(command === 'create'){
    notes.createNote(argv.title, argv.body);
} else if(command === 'remove'){
    notes.removeNote(argv.title);
} else{
    console.log('command not found...');
}