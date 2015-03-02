var express = require('express'),
    router = express.Router(),
    personCtrl = require('../controllers/person');

router.route('/persons')
    .get(personCtrl.list)
    .post(personCtrl.create);
router.route('/persons/:personId')
    .get(personCtrl.single)
    .put(personCtrl.update)
    .delete(personCtrl.remove);

module.exports = router;