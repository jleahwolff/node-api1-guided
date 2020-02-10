# Node Intro

-npm i express
-add `index.js` to folder root
-use `npm run server` to start API
-hit `http://localhost:5000` with `GET`

## Requirements

-a "hub" is like a channel ion a chat application
-a database is included
-there is a JS file with a set of functions to work with the Database

## Features

-view a list of hubs. GOT /api/hubs
-add a hub
    -using POST /api/hubs
    -Postman: Duplicate the GET, change to POST, then go to body > raw, text = JSON
-remove a hub
-update a hub
