const express = require('express');

const app = express();

const puerto = 3200;
app.listen(puerto, () => {
    console.log("Aplicación ejemplo, http://localhost:"+puerto+"");
});