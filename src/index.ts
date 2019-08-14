import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';

import IndexRoutes from './routes';
import BooksRoutes from './routes/books';


//Initializations
const app = express();
import './database';

//====================
//Settings
//====================
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', '.hbs');
const port = app.get('port');


//====================
//Middlewares
//====================

//Este json es para cuando una app o una web envie un json 
app.use(express.json());
//extended: false indica que cuando un formulario de html envie un dato pueda interpretarlo
app.use(express.urlencoded({extended: false}));



//====================
//Routes
//====================
app.use(IndexRoutes);
app.use('/books',BooksRoutes);



//====================
//Statics files
//====================
app.use(express.static(path.join(__dirname, 'public')));





//Starting the server
app.listen(port,() => console.log(`Server un port: ${port}`));