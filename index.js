const htmlPdf = require('html-pdf-chrome');
const fs = require('fs-extra');
var express = require('express');
var app = express();

app.post('/', function(req, res){
   htmlPdf.create(req.body.content, {port: 9222})
  .then((pdf) => pdf.toFile('output.pdf'))
  .then((pdf) => res.sendFile('output.pdf',{ root : __dirname}))
  .catch((err) => {
    console.log(err);
  });
});

app.listen(3000);

