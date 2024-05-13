const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../../../db/fsUtils');
const uuid = require('../../../db/uuid');



notes.get('/', (req, res) => {
    console.log('grabbing from the notes')
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req,res) => {
const { title, text} = req.body;
if(req.body!=undefined){
    const Note={
        title,
        text,
        id: uuid()
    };
    readAndAppend(Note,'./db/notes.json');
}

});

notes.delete('/',(req,res) => {
    console.log('deleting from notes')
});

module.exports=notes;