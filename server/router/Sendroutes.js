const express = require('express');
const router = express.Router();




var Sendmsg_C = require('../controller/Sendmsg_C');



// router.get('/test', (req, res) => res.send('book route testing!'));


router.get('/sendsingleemailtocust',Sendmsg_C.sendsingleemailtocust);
router.post('/sendemailtoMulcust',Sendmsg_C.sendemailtoMulcust);
router.post('/sendinsert',Sendmsg_C.sendinsert);

// router.post('/Delete',Sendmsg_C.Delete );
// router.post('/getoneid',Sendmsg_C.getoneid );
// router.post('/SHOW',Sendmsg_C.SHOW);
// router.post('/update',Sendmsg_C.update);


module.exports = router;