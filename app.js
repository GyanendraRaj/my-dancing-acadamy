const express = require ("express"); 
const app = express();
const path = require("path");
const bodyparser = require("body-parser")
// const fs = require("fs");
// mongoose inseting 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true });
const port = 80

// define mongoose schema tut 86
const contactSchema = new mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    phone: String,
    city: String,
  });
  const contact = mongoose.model('contact', contactSchema);






app.use('/static', express.static('static')); 
app.use(express.urlencoded());

// pug stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get("/", (req, res)=> {    
    const par = {  }
    res.status(200).render("home.pug", par) 
});
app.get("/contact", (req, res)=> {    
    const par = {  }
    res.status(200).render("contact.pug", par) 
});
// to get data from post 
app.post("/contact", (req, res)=> {    
    const myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("This Data is saved in Database");
    }).catch(() => {
        res.status(400).send("Data is not Saved in Database")
    });


    // res.status(200).render("contact.pug", par) 
});


app.listen(port, ()=>{
    console.log(`The server is started on Port  ${port}`)
});