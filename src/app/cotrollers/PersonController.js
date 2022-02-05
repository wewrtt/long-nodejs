const model = require('../model/Persons');
const { multiMongooseObject } = require('../../ulti/mogoose');
const test = require('../../ulti/test');
class PersonController {
    show(req, res, next) {
        model
            .findOne({ slug: req.params.slug })
            .then((person) => {
                person = test.MongooseObject(person);
                res.render('./person/show', { person });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('./person/create');
    }
    store(req, res, next) {
        // res.json(req.body);
        const person = new model(req.body);
        person
            .save()
            .then(() => res.redirect('/me/stored/person'))
            .catch(next);
    }
    edit(req, res, next) {
        //res.render('./person/edit');
        model
            .findOne({ _id: req.params.id })
            .then((person) => {
                person = test.MongooseObject(person);
                res.render('./person/edit', { person });
            })
            .catch(next);
    }
    update(req, res, next) {
        model
            .updateOne({ _id: req.params.id }, req.body)
            .then(res.redirect('/me/stored/person'))
            .catch(next);
    }
    delete(req, res, next) {
        model
            .delete({ _id: req.params.id })
            .then(res.redirect('/me/stored/person'))
            .catch(next);
    }
    restore(req, res, next) {
        model
            .restore({ _id: req.params.id })
            .then(res.redirect('/me/trash/person'))
            .catch(next);
    }
    destroy(req, res, next) {
        model
            .deleteOne({ _id: req.params.id })
            .then(res.redirect('/me/trash/person'))
            .catch(next);
    }
    handle_form_action(req, res, next) {
        model
            .delete({ _id: { $in: req.body.PersonIDs } })
            .then(res.redirect('/me/stored/person'))
            .catch(next);
    }
    handle_restore_form(req, res, next) {
        model
            .restore({ _id: { $in: req.body.personIDs } })
            .then(res.redirect('/me/trash/person'))
            .catch(next);
    }
}
module.exports = new PersonController();
