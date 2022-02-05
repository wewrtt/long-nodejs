const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser'); 
const db = require('./config/db');
const SortMiddleware = require('./app/middlewares/SortMiddleware');
const SortPersonMiddleware = require('./app/middlewares/SortPersonmiddlewares');
db.connect();

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (felid, sort) => {
                const sortType = felid === sort.column ? sort.type : 'default';
                const Icon = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const Type = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };
                let icon = Icon[sortType];
                let type = Type[sortType];
                return (
                    '<a href="?_sort&column=' +
                    felid +
                    '&type=' +
                    type +
                    '"><span style="with:10px" class="' +
                    icon +
                    '"></span></a>'
                );
            },
            sortPerson: (feild, sortPerson) => {
                return (
                    '<a href="?_sortPerson&column=' +
                    feild +
                    '&type=asc"><span class="oi oi-sort-ascending"></span></a>'
                );
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
const routes = require('./routes');
//middlewares
app.use(SortMiddleware);
app.use(SortPersonMiddleware);
// override with POST having ?_method=put
const methodOverride = require('method-override');
const console = require('console');
app.use(methodOverride('_method'));
//cookieParser
app.use(cookieParser('asdasdhgsadj'));
routes(app);
app.listen(3000, () => {
    console.log(`App listening at http://localhost:${3000}`);
});
