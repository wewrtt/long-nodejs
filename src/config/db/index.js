const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/long_db_dev');
        console.log('Connect Successfully!');
    } catch (error) {
        console.log('Connect Farilly!');
    }
}

module.exports = { connect };
