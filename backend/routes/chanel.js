const express = require('express');
const router = express.Router();


const chanelCtrl = require('../controllers/chanel.js');


router.post('/', chanelCtrl.createChanel);
router.put('/:id', chanelCtrl.modifyChanel);
router.delete('/:id', chanelCtrl.deleteChanel);
router.get('/:id', chanelCtrl.getOneChanel);
router.get('/', chanelCtrl.getAllChanels);
;

module.exports = router;