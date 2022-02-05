const newsRoutes = require('./news');
const siteRoutes = require('./site');
const courseRoutes = require('./courses');
const personRoutes = require('./person');
const meRoutes = require('./me');
const authRoutes = require('./auth');
const authMiddleware = require('../app/middlewares/auth');
function routes(app) {
    app.use('/auth', authRoutes);
    app.use('/me',authMiddleware.auth, meRoutes);
    app.use('/person',authMiddleware.auth, personRoutes);
    app.use('/courses',authMiddleware.auth, courseRoutes);
    app.use('/news',authMiddleware.auth, newsRoutes);
    app.use('/',authMiddleware.auth, siteRoutes);
}

module.exports = routes;
