const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const deptSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    section: String,
    date: Date,
    total_worked: Number,
    billable: Number,
    non_billable: Number,
    total_on_WO: Number,
    percent_billable: Number, 
    percent_on_WO: Number
})
module.exports = mongoose.model('Department', deptSchema);