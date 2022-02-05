const model = require('../model/Persons');
const { multiMongooseObject } = require('../../ulti/mogoose');
const test = require('../../ulti/test');
class NewsController {
    show(req, res, next) {
        model
            .find({})
            .then((persons) => {
                persons = test.multiMongooseObject(persons);
                res.render('news', { persons });
            })
            .catch(next);
    }
    index(req, res) {
        res.render('news', { layout: 'news' });
    }
    slug(re, res) {
        res.render('404');
    }
}
module.exports = new NewsController();
