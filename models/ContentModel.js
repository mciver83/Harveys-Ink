var mongoose = require('mongoose');

var ContentSchema = mongoose.Schema({

	whoWeAre: { type: String },
	howWeWork: { type: String },
	pricing: { type: String }
})


module.exports = mongoose.model('Content', ContentSchema)