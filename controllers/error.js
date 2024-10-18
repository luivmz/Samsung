exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
        titulo: 'Página no encontrada',
        path: '/404' // puedes usar cualquier ruta que desees para la página de error
    });
};