const mongoose = require('mongoose');
const tempdata = require('./tempdata');
const DailySpreadsheet = require('../models/templatesheet');
 
mongoose.connect('mongodb://localhost:27017/seniorproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", ()=>{
    console.log("Database connected");
});
 
const seedDB = async()=>{
    await DailySpreadsheet.deleteMany({});
    // const c = new DailySpreadsheet({title:'purple field'});
    // await c.save();
    for(let i = 0; i<11; i++){
        const temp = new DailySpreadsheet({
            title: `${tempdata[i].title}`, 
            image: `${tempdata[i].image}`, 
            transport: `${tempdata[i].transport}`,
            date: `${tempdata[i].date}`,
            inbound: `${tempdata[i].inbound}`, 
            outbound: `${tempdata[i].outbound}`,
            in_late_due_to_LDS: `${tempdata[i].in_late_due_to_LDS}`,
            out_late_due_to_LDS: `${tempdata[i].out_late_due_to_LDS}`, 
            total: `${tempdata[i].total}`   
        })
        await temp.save();
    }
}
seedDB().then(()=>{
    mongoose.connection.close();
})

