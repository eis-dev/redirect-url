const express = require('express');
const request = require('request');

let app = express();

app.get('/', function (req, res) {
    let q = req.query.q;
    let r = request.get(q, () => {
        res.send({query: q, result: r.uri.href})
    });
});

app.listen(3000);
