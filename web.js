const express = require('express');
const request = require('request');

let web = express();

web.get('/', function (req, res) {
    let q = req.query.q;
    let r = request.get(q, () => {
        res.send({query: q, result: r.uri.href})
    });
});

web.listen(3000);
