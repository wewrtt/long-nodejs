const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema(
    {
        tk: { type: 'string', },
        mk: { type: 'string',},
    },
    {
        timestamps: true,
    },

);
module.exports = mongoose.model('Users',user);