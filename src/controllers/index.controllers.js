const indexCtrl = {};

const idModel = require('../models/idModel');

indexCtrl.renderIndex = async (req, res) => {
    // Renderizando IDs
    console.log('consultando a DB');
    const ids = await idModel.find();
    console.log('ids');
    console.log(ids);
    res.render('index', { ids });
};

// Guardar ID
indexCtrl.newId = async (req, res) => {
    const errors = [];
    const { id } = req.body;
    console.log('ID-----------');
    console.log(req.body);
    const newId = new idModel({
        id
    });
    if (id == null) {
        errors.push({ text: 'por favor introduce un numero' });
        console.log('error introduce numero');
    };
    await newId.save();
    console.log('ID creado');
    console.log(newId);
    req.flash("success-msg", "ID creado correctamente");
    res.redirect('/');
};


module.exports = indexCtrl;