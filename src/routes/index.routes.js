const { Router } = require('express');
const router = Router();

const { renderIndex, newId, validation, deleteId } = require('../controllers/index.controllers');

router.get('/', renderIndex);
router.post('/new-id', validation, newId);
router.delete('/delete-id/:id', deleteId);
module.exports = router;