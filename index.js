// import express from 'express': //ES2015 Modules
const express = require('express'); //CommonJS Modules // npm i express

const Hubs = require('./data/hubs-model.js');

const server = express();

// says server becuase we called it server above
// Teaches express how to read JSON from the body
server.use(express.json()); // needed for POST and PUT/PATCH


server.get('/', (req, res) => {
    res.json({ hello: 'Web 26'})
})


// view a list of hubs
server.get(`/api/hubs`, (req, res) => {
    // got to get the hubs from the database
    Hubs.find().then(hubs => {
        res.status(200).json(hubs)
    }).catch(err => {
        console.log(err, 'Error');
        res.status(500).json({ errorMessage: 'oops' })
    })
    // res.status(200)
})

// add a hub
server.post('/api/hubs', (req, res) => {
    // axios.post(url,data,options); The data will be in the body of the re
    const hubInfo = req.body;
    // validate the data, and of the data is valid save it

    Hubs.add(hubInfo).then(hub => {
        res.status(201).json(hub);
    }).catch(err => {
        console.log(err, 'Error');
        res.status(500).json({ errorMessage: 'oops' })
})
})


// delete
// :id can be named anything, and you have to use the same id name thru-out the code
server.delete('/api/hubs/:id', (req, res) => {

    const { id } = req.params; 

    Hubs.remove(req.params.id).then(removed => {
        res.status(200).json(removed)
    }).catch(err => {
        console.log(err, 'Error');
        res.status(500).json({ errorMessage: 'oops' })
})
})


const port = 5000;
server.listen(port, () => console.log(`\n ** API on port ${port} \n`));
