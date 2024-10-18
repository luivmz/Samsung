const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const tiendaRoutes = require('./routes/tienda');
const errorControllers = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(tiendaRoutes);

app.use((req, res, next) => {
    console.log("El usuario ingresa a la url", req.url);
    next();
})

app.use(errorControllers.get404);

const puerto = 3200;
app.listen(puerto, () => {
    console.log("Web: http://localhost:"+puerto+"");
});