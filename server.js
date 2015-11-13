var express = require('express'),
	app = express(),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	port = process.env.PORT || 9090,
	passport = require('passport'),
	AWS = require('aws-sdk'),
	fs = require('fs'),
	multer = require('multer'),
	cookieParser = require('cookie-parser'),
	mongoUri = 'mongodb://localhost/harveysInk',
	// mongoUri = process.env.MONGOLAB_URI;



//controllers
	ProjectCtrl = require('./controllers/ProjectCtrl'),
	ContentCtrl = require('./controllers/ContentCtrl'),
// 	EmailCtrl = require('./controllers/EmailCtrl'),




//stripe  make sure to .gitigore config folder
// require('./config/stripe');





// require('./config/passport')(passport); // pass passport for configuration

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to Mongo at ' + mongoUri);
})

// app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(cors());
app.use(bodyParser({ limit: 10000000 }));
app.use(express.static(__dirname + '/'));

// required for passport==========================================
// app.use(session({ secret: 'best secret ever' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// routes ======================================================================
// require('./admin/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport





//MANAGE PORTFOLIO
app.post('/api/portfolio/projects/new', ProjectCtrl.create);
app.get('/api/portfolio/projects', ProjectCtrl.get);

//MANAGE PAGE CONTENT
app.post('/api/content', ContentCtrl.create);
app.get('/api/content', ContentCtrl.get);
app.put('/api/content', ContentCtrl.edit);


//login
app.post('/api/login', passport.authenticate('local', {
	// failureFlash: true
}), function(req, res){
	res.send(req.user)
})

app.get('/api/auth', isLoggedIn, function(req, res){
	res.send(req.user)
})



//emails================================================================
// app.post('/api/email/send', EmailCtrl.sendEmail);


// ======================================================================
app.listen(port, function(){
	console.log('listening on ' + port)
})

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()){
        return next();
    }

    // if they aren't redirect them to the home page
    res.send(false);
}

function isAdmin(req, res, done) {
    if(req.user && req.user.admin){
        done();
    } else {
        // res.status(403).redirect('/admin');
        res.status(403).send('you isnt an admin')
    }
}
