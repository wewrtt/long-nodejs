const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Course = new Schema(
    {
        name: { type: String, default: 'Course' },
        description: { type: String, default: 'Course' },
        image: { type: String, default: 'Course' },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
module.exports = mongoose.model('Courses', Course);
