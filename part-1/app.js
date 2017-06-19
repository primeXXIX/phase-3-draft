const express = require('express')
      app = express()
      bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true } ))


// Display message to homepage
app.get('/', function(request, response) {
    response.send('This is the homepage');
})

// Display '0' to requested page
app.get('/zero', function printZero(request, response) {
    response.send(':0')
})

// Doubles requested query string
app.get('/double/:number', function doubleNumber(request, response) {

    let int = parseInt((request.params.number) * 2)

    response.send(int.toString())
    console.log(int);
})

// Performs subtraction on query string
app.get('/subtract', function subtraction(request, response) {

  let param_1 = parseInt(request.query.a)
  let param_2 = parseInt(request.query.b)
      total = param_1 - param_2

  console.log(total);

  response.send(total.toString())

})

// Performs addition on query string
app.get('/add', function addition(request, response) {

    let param_1 = parseInt(request.query.a)
    let param_2 = parseInt(request.query.b)
        total = param_1 + param_2

    console.log(total);

    response.send(total.toString())



})
// Requested port location:
app.listen(3000, function(request, response) {
  console.log('Port active on: 3000');
})
