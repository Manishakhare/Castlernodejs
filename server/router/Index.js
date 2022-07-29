const express = require('express');
const router = express.Router();




var auth = require('../controller/Admin_C');



// router.get('/test', (req, res) => res.send('book route testing!'));


router.post('/Insert',auth.Insert);

router.post('/Delete',auth.Delete );
router.post('/getoneid',auth.getoneid );
router.post('/SHOW',auth.SHOW);
router.post('/update',auth.update);


module.exports = router;