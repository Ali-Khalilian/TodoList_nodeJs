const express = require("express");
const bodyParser = require("body-parser");

//DataBase Connection
require("./utils/database");
//End Connection

const { setStatics } = require("./utils/statics");
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const errorController = require('./controllers/error');

const app = express();



//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
//End of middleware


//EJS
app.set("view engine", "ejs");
app.set("views", "views");
//End of EJS

//Statics
setStatics(app);
//End Of Statics

//Routes
app.use(indexRoutes)
app.use('/admin', adminRoutes);
//End Of Routes

// 404
app.use(errorController.get404);
// End Of 404

app.listen(3000, () => { console.log('Server Is Running ...'); });
