const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://127.0.0.1:27017/login-signup");

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