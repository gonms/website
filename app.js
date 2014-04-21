var express  = require("express"),
    app      = express(),
    mongoose = require('mongoose')
    nodemailer = require("nodemailer");

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

/*
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});
*/

routes = require('./routes/cards')(app);

mongoose.connect('mongodb://localhost/cards', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Database');
	}
});

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});