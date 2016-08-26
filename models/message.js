/**
 * Created by Mathieu on 23/08/2016.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content : { type : String, require : true }
});

module.exports = mongoose.model('Message', schema);
