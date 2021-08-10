const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/users', (req, res) => {
    let users = [
        {
            first_name: "Celine",
            last_name: "Buenaventura",
            age: 20,
            gender: "Female"
        },
        {
            first_name: "August",
            last_name: "Sinang",
            age: 20,
            gender: "Male"
        },
        {
            first_name: "Kaye",
            last_name: "Peregrino",
            age: 20,
            gender: "Female"
        }
    ];

    res.json(users);
});

app.get('/download', (req, res) =>{
    res.download(path.join(__dirname, '/downloads/Celine Joie V. Buenaventura - Resume.pdf'))
});

app.get('/about', (req, res) =>{
    res.redirect('/about.html');
});

app.post('/subscribe', (req, res) =>{
    let name = req.body.name;
    let email = req.body.email;

    console.log(name+ ' has subscribed with ' +email)
});

app.listen(3000, function(){
    console.log('Server started on port 3000...');
});
    