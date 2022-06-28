var createNote = (title,body) => {
    // debugger;
    console.log("note created", title,body);
}

var getAllNotes = () => {
    console.log("get all notes");
}

var readNote = (title) => {
    console.log("reading note", title);
}

var removeNote = (title) => {
    console.log("removing note", title);
}


module.exports = {
    createNote,
    getAllNotes,
    readNote,
    removeNote
}