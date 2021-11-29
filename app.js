const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
// app.use(express.static(__dirname));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {

  var first = req.body.firstName;
  var last = req.body.lastName;
  var email = req.body.inputEmail;

  var data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: first,
        LNAME: last
      }
    }]
  }
  var url = "https://us20.api.mailchimp.com/3.0/lists/bbf47088b7";
  var jsonData = JSON.stringify(data);
  const options = {
    method: "POST",
    auth: "itzik:6142faae8a93634d2733c0ff8e30f154-us20"

  }
  console.log(first, last, email);
  // console.log(jsonData);

  const request = https.request(url, options, function(response) {
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  });
request.write(jsonData);
request.end();

})
// api
// 6142faae8a93634d2733c0ff8e30f154-us20
// LIST ID
// bbf47088b7

app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`);
})
