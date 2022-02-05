module.exports = function SortPersonmiddlewares(req, res, next) {
    res.locals._sortPerson = {
        enable: false,
        type: 'default',
    };
    if (req.query.hasOwnProperty('_sortPerson')) {
        res.locals._sortPerson.enable = true;
        res.locals._sortPerson.type = req.query.type;
        res.locals._sortPerson.column = req.query.column;
    }
    next();
};
