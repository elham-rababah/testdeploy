'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema ({
    title : { type: String, required: true},
    items: { type : Array},
    createdDate: { type: Date, default: Date.now },
    userid: {type: String, required: true}
});

var List = mongoose.model('List', listSchema);


module.exports = List;