const model = require('../model/Courses');
const { multiMongooseObject } = require('../../ulti/mogoose');
const changeObject = require('../../ulti/test');
class StieControllers {
    search(req, res) {
        res.render('search');
    }
    index(req, res, next) {
        //viet kieu promis ham find trong mongoose tra ve 1 mang json
        model
            .find({})
            .then((courses) => {
                courses = changeObject.multiMongooseObject(courses);
                res.render('home', { courses });
            })
            .catch(next);
        //viet kieu if else
        // model.find({},(err,courses)=>{
        //     courses =changeObject.multiMongooseObject(courses);
        //     if(!err) res.render('home',{courses});
        //     else next();
        // });
    }
    slug(re, res) {
        res.render('404');
    }
}
module.exports = new StieControllers();
