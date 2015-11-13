
var Content = require('../models/ContentModel.js')
module.exports = {
	create: function (req, res) {
        new Content(req.body)
        .save(function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        })
	},
    
    get: function (req, res) {
        Content.find({}, function (err, data) {
            if (err) res.status(500).send(err);
            else res.send(data);
        })
    },
    
    edit: function (req, res) {
        Content.update({}, req.body, function (err, data) {
            if (err) res.status(500).send(err);
            else res.send(data);
        })
    }
}