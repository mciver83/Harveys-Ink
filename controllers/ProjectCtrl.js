var AWSService = require('../services/AWSService');
var Project = require('../models/ProjectModel.js')
module.exports = {
	create: function (req, res) {
		var fileList = []

		for (var i = 0; i < req.body.images.length; i++) {
			req.body.images[i].url = new Buffer(req.body.images[i].url.replace(/^data:image\/\w+;base64,/, ""), 'base64');
    		var file = req.body.images[i];
    		fileList.push(file);
    		// var pid = '10000' + parseInt(Math.random() * 10000000);
		}


		req.body.images = []
		fileList.forEach(function (file, index, array) {
			AWSService.uploadToS3(file, function (err, data) {
	    		if (err){
	        		return res.status(500).send('failed to upload to s3').end();
	    		} else {
	    			req.body.images.push({
	    				url: data.Location
	    			});

	    			if (req.body.images.length === array.length) {
	    				new Project(req.body)
	    				.save(function (err2, response) {
	    					if (err2) {
	    						res.status(500).send(err2);
	    					} else {
	    						res.send(response);
	    					}
	    				})
					}
	    		}
			})
		})
	},
    
    get: function (req, res) {
        Project.find({}, function (err, data) {
            if (err) res.status(500).send(err);
            else res.send(data);
        })
    }
}