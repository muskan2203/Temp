const express = require('express');
let router = express.Router();

const ordersRoutes=require('./Orders');


router.get('/health-check', function(req, res) {
    let response = {status: 'ok'};
    res.status(200).json(response);

});

router.use('/orders',ordersRoutes);

module.exports = router;
