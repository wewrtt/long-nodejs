const model = require('../model/Courses');
const { multiMongooseObject } = require('../../ulti/mogoose');
const test = require('../../ulti/test');
class CourseControllers {
    show(req, res, next) {
        model
            .findOne({ slug: req.params.slug })
            .then((course) => {
                course = test.MongooseObject(course);
                res.render('courses/show', { course });
            })
            .catch(next);
    }
    edit(req, res, next) {
        model
            .findOne({ _id: req.params.id })
            .then((course) => {
                course = test.MongooseObject(course);
                res.render('courses/edit', { course });
            })

            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
    }
    store(req, res, next) {
        res.json(req.body);
        return;
        const course = new model(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
    update(req, res, next) {
        //res.json(req.body);
        //res.send(req.params.id);
        model
            .updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    restore(req, res, next) {
        model
            .restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    delete(req, res, next) {
        model
            .delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    deletevv(req, res, next) {
        model
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    handle_form_action(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                model
                    .delete({ _id: { $in: req.body.coursesIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.render('404');
        }
    }
}
module.exports = new CourseControllers();
