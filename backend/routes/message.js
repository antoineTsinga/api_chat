const express = require('express');
const router = express.Router();


const messageCtrl = require('../controllers/message.js');


router.post('/', messageCtrl.createMessage);
router.put('/:id', messageCtrl.modifyMessage);
router.delete('/:id', messageCtrl.deleteMessage);
router.get('/:id', messageCtrl.getOneMessage);
router.get('/', messageCtrl.getAllMessage);
;

module.exports = router;