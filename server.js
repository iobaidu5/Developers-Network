const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

// Databse Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db)
        .then(() => console.log("Database Connected"))
        .catch(err => console.log("Databse connection Error"));

        
app.get('/', (req ,res) => res.send("Hello World"));

//mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.POST || 3000;

app.listen(port, () => console.log(`Server Listening on
 port ${port}`)); 