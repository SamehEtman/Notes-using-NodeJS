const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title , argv.body)
    }
})
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder :{
        title :{
            describe : 'removing title',
            type : 'string',
            demandOption : true 
        }
    },
    handler:  (argv) =>{
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler:  () =>{
        console.log('Listing out all notes');
        notes.listNotes();
    }
})

// Create read command
yargs.command({
    command:'read',
    describe :'read note by title',
    builder : {
        title : {
            describe : 'reading by title',
            demandOption : true,
            type :'string',
        }
    },
    handler:(argv) =>{
        notes.readNotes(argv.title);
    }
})

yargs.parse()









