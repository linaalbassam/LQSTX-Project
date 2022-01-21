const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
 
const ImageSchema = new Schema({
    url: String,
    filename: String
});
 
 
const dailySchema = new Schema({
    title: String,
    image: String,
    transport: String,
    date: Date,
    inbound: String,
    outbound: Number, 
    in_late_due_to_LDS: Number,
    out_late_due_to_LDS: Number,
    total: Number,
})
module.exports = mongoose.model('DailySpreadsheet', dailySchema);
 

