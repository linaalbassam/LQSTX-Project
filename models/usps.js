const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const uspsSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    section: String,
    date: Date,
    inbound: Number,
    inbound_late: Number,
    outbound: Number,
    outbound_late: Number,
    in_late_due_to_LDS: Number,
    out_late_due_to_LDS: Number,
    total_containers: Number,
    total_hours: Number,
    containers_per_hour: Number,
    clins: {
        clin_3: Number,
        clin_4: Number,
        clin_5: Number,
        clin_6: Number,
        clin_7: Number,
        clin_8: Number,
        clin_9: Number,
        clin_11: Number,
        
    },
    total: Number
})
module.exports = mongoose.model('USPS', uspsSchema);