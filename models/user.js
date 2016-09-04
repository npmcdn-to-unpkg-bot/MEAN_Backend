/**
 * Created by Mathieu on 29/08/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    mail : { type : String, require : true },
    password : { type : String, require : false },
    name : { type : String, require : true },
    lastname : { type : String, require : false },
    pictureUrl : { type : String, require : false },
    facebook : { type : String, require : false },
    google : { type : String, require : false },
    insatgram : { type : String, require : false },
    linkedIn : { type : String, require : false },
    twitter : { type : String, require : false }

});

module.exports = mongoose.model('User', schema);