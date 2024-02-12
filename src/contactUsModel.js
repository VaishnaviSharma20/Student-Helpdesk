const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://shivamkapoor861:8ZKEeY2NbPTjyJI3@cluster0.wncxjjn.mongodb.net/studenttHelpDesk");
// Check database connected or not

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

// collection part
const contactUs = new mongoose.model("contactUs", contactSchema);

module.exports = contactUs;
