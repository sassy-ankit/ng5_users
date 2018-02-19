const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ng5_user', function(err) {
	if (err) {
		console.log('## Error Connecting Database: ', err);
	} else {
		console.log('## Connected to MongoDB');
	}
});

// Routes Defination
var index = require('./routes/index');

const app = express();

// View engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Routes
app.use('/', index);

// Initiating Server
const port = process.env.PORT || 3000;
app.listen(port, function(err) {
	if (err) {
		console.log('## Error in Initiating Server: ', err);
	} else {
		console.log('## Server listening on port ' + port);
	}
});
