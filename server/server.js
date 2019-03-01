const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyCpWEWJHU1EcEdwv1-tAhoEuiV_a2_U3gU",
    authDomain: "api-fake-ecf0c.firebaseapp.com",
    databaseURL: "https://api-fake-ecf0c.firebaseio.com",
    projectId: "api-fake-ecf0c",
    storageBucket: "api-fake-ecf0c.appspot.com",
    messagingSenderId: "326456577763"
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('', (req, res) => {
    res.json({ msg: "Hey!" });
})

app.post('/data', (req, res) => {
    console.log(req.body);
    const { url = null, response = null, status = null } = req.body;
    console.log(status);
    //Check for valid input
    if (!url || !response || typeof (response) != "object" || !status) {
        console.log("Bad Request")
        return res.status(400).send(
            "Bad Request"
        )
    }
    db[url] = { response, status };
    res.send(db[url]);
});


app.all('/:userId/*', (req, res) => {

    const userId = req.params.userId;

    const urlParts = req.url.split("/");
    if (urlParts.length != 4) {
        res.status(400).send({ msg: `Bad request` });
    }
    const url = "/" + urlParts[2] + "/" + urlParts[3];

    db.ref(`users/${userId}/apis`).orderByChild('url').equalTo(url).once('value')
        .then(snapshot => {
            if (!snapshot.val()) {
                res.status(404).send({ msg: `Could not find data for ${url}` });
            }
            const data = snapshot.val();
            const keys = Object.keys(data);
            const retVal = data[keys[0]];
            console.log(retVal);
            res.status(retVal.status).send(retVal.response);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({ msg: `Could not retrieve data for ${url}` });
        })
})

const port = process.env.PORT || 3600;
app.listen(port, (err) => {
    if (err) {
        return console.log("Something went wrong!")
    }
    console.log("Listening on port " + port);
})