const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const amzSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    section: String,
    date: Date,
    flights: {
        inbound_total: Number,
        inbound_late: Number,
        outbound_total: Number,
        outbound_late: Number,
        out_late_due_to_LCS: Number
    },
    trucks: {
        inbound: Number,
        inbound_late: Number,
        outbound: Number,
        outbound_late: Number,
        out_late_due_to_LCS: Number
    },
    mopvp: {
        head_count_plan: Number,
        head_count_act: Number,
        hours_plan: Number,
        hours_act: Number
    }
})
module.exports = mongoose.model('AMZ', amzSchema);