var express = require('express'),
	app = express(),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	port = process.env.PORT || 9090,
	passport = require('passport'),
	// flash = require('connect-flash'),
	// morgan = require('morgan'),
	AWS = require('aws-sdk'),
	fs = require('fs'),
	multer = require('multer'),
	cookieParser = require('cookie-parser'),
	mongoUri = 'mongodb://localhost:27017/harveysInk';
	// mongoUri = process.env.MONGOLAB_URI;



//controllers
// var PaymentCtrl = require('./controllers/PayCtrl'),
	ProjectCtrl = require('./controllers/ProjectCtrl'),
// 	PhotoCtrl = require('./controllers/PhotoCtrl'),
// 	CustomerCtrl = require('./controllers/CustomerCtrl'),
// 	CartCtrl = require('./controllers/CartCtrl'),
// 	AddressCtrl = require('./controllers/AddressCtrl'),
// 	EmailCtrl = require('./controllers/EmailCtrl'),
// 	OrderCtrl = require('./controllers/OrderCtrl');
		
	

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
app.use(express.static(__dirname + '/public'));

// required for passport==========================================
// app.use(session({ secret: 'best secret ever' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// routes ======================================================================
// require('./admin/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport






app.post('/api/portfolio/project', ProjectCtrl.create)



//login
app.post('/api/login', passport.authenticate('local', {
	// failureFlash: true
}), function(req, res){
	res.send(req.user)
})

app.get('/api/auth', isLoggedIn, function(req, res){
	res.send(req.user)
})

//admin =============================================================
		
		//photos
// app.post('/admin/photos', isAdmin, PhotoCtrl.create);

// app.get('/admin/photos', isAdmin, PhotoCtrl.get);

// app.put('/admin/photos', isAdmin, PhotoCtrl.update);

// app.delete('/admin/photos', isAdmin, PhotoCtrl.delete);

	
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