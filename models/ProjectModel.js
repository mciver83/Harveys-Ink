var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({

	title: { type: String, maxlength: 40 },
	description: { type: String, maxlength: 100 },
	images: [{}],
	category: { type: String}, 
	dateCreated: { type: Date, default: Date.now }
})


module.exports = mongoose.model('Project', ProjectSchema)