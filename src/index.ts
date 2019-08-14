import express from 'express';

//Initializations
const app = express();


//====================
//Settings
//====================
app.set('port',3000);
const port = app.get('port');




//Routes







//Statics files







//Starting the server
app.listen(port,() => console.log(`Escuchando por el puerto: ${port}`));