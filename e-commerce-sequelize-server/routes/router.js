const router = require('express').Router();
const userRouter = require('./api/user_router');
const adminRouter = require('./api/admin_router');
const productRouter = require('./api/product_router');
const purchaseRouter = require('./api/purchase_router');

router.get('/', (req,res) => {
    res.send('E-commerce expressjs server')
});

router.use('/user', userRouter);
router.use('/admin', adminRouter);
router.use('/product', productRouter);
router.use('/purchase', purchaseRouter);

module.exports = router;