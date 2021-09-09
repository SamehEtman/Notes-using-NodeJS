const chalk = require('chalk');
const fs = require('fs')


// adding note 
const addNote =  (title , body) =>{
    const notes = loadNotes();

    
    const checkDuplicate = notes.find(note => note.title===title)

    if (checkDuplicate){
        console.log(chalk.red.inverse('Title is already taken:('));
    }else {
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.green.inverse('Note added :)'));
        saveNotes(notes);
    }

    
}
// removing note
const removeNote = (title) =>{
    const notes = loadNotes();
    const goodNotes = notes.filter(note =>{
        return note.title !== title;
    })

    if (notes.length === goodNotes.length) {
        console.log(chalk.red.inverse
            ('Title "' + title +'" is not found : not removed'));
    }else {
        console.log(chalk.green.inverse
            ('removed note with title : ' + title));
        saveNotes(goodNotes);
    }
}

// listing all nodes in the json file
const listNotes = () =>{
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(chalk.green.inverse(element.body));
    });
}

// reading notes by title 
const readNotes = (title)=>{
    const notes = loadNotes();
    const note = notes.find((note) =>{
        return note.title === title;
    })
    if (note === undefined){
        console.log(chalk.red.inverse("Title not Found!"))
    }else {
        console.log(chalk.green(title , ": "));
        console.log(note.body)
    }
}
// saving notes into json file
const saveNotes = (notes)=>{
    const jsonFile = JSON.stringify(notes);
    fs.writeFileSync('./notes.json' , jsonFile);
}

// loading notes forom json file
const loadNotes = ()=>{
    try{
        const bufferData = fs.readFileSync('./notes.json');
        const stringData = bufferData.toString();
        const jsonData = JSON.parse(stringData);
        return jsonData;
    }catch(e){
        return [];
    }
}


module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}









