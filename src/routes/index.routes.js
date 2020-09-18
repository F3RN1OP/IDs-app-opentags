const { Router } = require('express');
const router = Router();

const { renderIndex, newId } = require('../controllers/index.controllers');

router.get('/', renderIndex);
router.post('/id/new-id', newId);

module.exports = router;