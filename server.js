
const express = require('express');
const path = require('path');
const { clog } = require('./public/assets/js/clog');

const savedNotes= require('./db/saveNotes');
const { title } = require('process');
const PORT = process.env.PORT||3001;

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(clog);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './html/index.html'));
});

app.get('/notes',(req,res) =>{
   
    res.sendFile(path.join(__dirname,'./html/notes.html'))

    savedNotes.forEach(element => {
       ntitle= element.noteTitle;
       ntext=element.noteText;
       console.log(element);
    });
   
    //return res.status(200).json(savedNotes);
});

app.post('/notes', (req, res) => {
    let response;
  
    // Check if there is anything in the response body
    if (req.body!= undefined) {
      response = {
        status: 'success',
        data: req.body,
      };
      res.json(`The post succesfully was completed`);
    } else {
      res.json('Request body must at least contain a product name');
    }
  
    // Log the response body to the console
    //console.log(response.data);
});
    

app.listen(PORT, () => {
         console.log(`Example app listening at http://localhost:${PORT}`);
});
    

module.exports = app;