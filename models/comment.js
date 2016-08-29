/**
 * Created by Mathieu on 29/08/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    author : { type : User, require : true },
    content : { type : String, require : true },
    date : { type : String, require : true },
    replies : { type : [], require : false }
});

module.exports = mongoose.model('Comment', schema);