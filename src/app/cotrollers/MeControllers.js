const Course = require('../model/Courses');
const Person = require('../model/Persons');
const test = require('../../ulti/test');
class MeControllers {
    store(req, res, next) {
        let Coursefind = Course.find();

        if (req.query.hasOwnProperty('_sort')) {
            Coursefind = Coursefind.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([Coursefind, Course.countDeleted()])
            .then(([courses, countDeleteds]) => {
                let countDeleted = countDeleteds;
                courses = test.multiMongooseObject(courses);
                res.render('./me/stored-courses', { courses, countDeleted });
            })
            .catch(next);
    }
    trash(req, res, next) {
        Promise.all([Course.count(), Course.findDeleted()])
            .then(([countCourses, courses]) => {
                courses = test.multiMongooseObject(courses);
                res.render('./me/trash-courses', { courses, countCourses });
            })
            .catch(next);
    }
    user(req, res, next) {
        let Personfind = Person.find();
        if (req.query.hasOwnProperty('_sortPerson')) {
            Personfind.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([Personfind, Person.countDeleted()])
            .then(([persons, countDeletedPerson]) => {
                persons = test.multiMongooseObject(persons);
                res.render('./me/stored-person', {
                    persons,
                    countDeletedPerson,
                });
            })
            .catch(next);
    }
    userTrash(req, res, next) {
        Promise.all([Person.findDeleted(), Person.count()])
            .then(([persons, countPerson]) => {
                persons = test.multiMongooseObject(persons);
                res.render('./me/trash-person', { persons, countPerson });
            })
            .catch(next);
    }
    login(req,res,next){
        res.render('./me/login')
    }
    async checkLogin(req,res,next){
        var tk=req.body.name;
        var mk=req.body.age;
        var user= await Person.findOne({name:tk});
        if(!user){
            res.render('./me/login',{errs:['tên đăng nhập ko tồn tại'],
                                        values:req.body});
            return;
        }
        else {
            if(user.age!==mk){
                res.render('./me/login',{errs:['mật khẩu không đúng'],
                                                values:req.body});
                return;
            }
            else {
                res.cookie('userID',user.id,{signed:true});
                res.redirect('/');
            }
        }
    }
}
module.exports = new MeControllers();
