const model = require('../model/Courses');
const { multiMongooseObject } = require('../../ulti/mogoose');
const changeObject = require('../../ulti/test');
class StieControllers {
    search(req, res) {
        res.render('search');
    }
    index(req, res, next) {
        //viet kieu promis ham find trong mongoose tra ve 1 mang json
        /*
        var courses = await model.find({});
        */ 
        model
            .find({})
            .then((courses) => {
                courses = changeObject.multiMongooseObject(courses);
                // phân trang cơ bản
                var n =parseInt(req.query.page) || 1;//n
                var x= 3;//x
                var start= (n-1)*x;
                var end=n*x;
                res.render('home', { courses:courses.slice(start, end)});
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
