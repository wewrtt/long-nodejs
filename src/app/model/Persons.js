const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Person = new Schema(
    {
        name: { type: String, default: 'long' },
        age: { type: String, default: '21' },
        gender: { type: String, default: 'man' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
mongoose.plugin(slug);
Person.plugin(mongooseDelete, {
    overrideMethods: 'all',
    DeleteAt: true,
});
module.exports = mongoose.model('Persions', Person);
