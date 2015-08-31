var AWS = require('aws-sdk');

//Amazon s3 ====================================================
AWS.config.loadFromPath('./config/aws-config.json');

		// for HEROKU =====================================
// AWS.config.accessKeyId = process.env.S3_KEY;
// AWS.config.secretAccessKey = process.env.S3_SECRET;
// AWS.config.region = 'us-west-2';



var photoBucket = new AWS.S3({params: {Bucket: 'harveysink'}});


module.exports.uploadToS3 = function(file, callback) {
    photoBucket
        .upload({
            // Bucket: 'paulphin',
            ACL: 'public-read', 
            Body: file.url, 
            Key: file.name,
            ContentType: file.type
        }, callback)
}
