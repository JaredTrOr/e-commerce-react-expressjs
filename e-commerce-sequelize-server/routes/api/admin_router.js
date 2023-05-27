const router = require('express').Router();
const {User} = require('../../database/connection');

router.get('/', async (req,res) => {
    try{
        const users = await User.findAll();
        res.json({success: true, users})
    }catch(err){
        res.json({success: false, msg: `Error: ${err}`})
    }   
});

router.post('/create_user', async (req,res) => {
    try{
        await User.create(req.body);
        res.json({success: true, user: req.body})
    }catch(err) {
        res.json({success: false, msg: `Error: ${err}`})
    }
});

router.delete('/delete_user/:id', async (req,res) => {
    try{
        await User.destroy({where: {id: req.params.id}});
        res.json({success: true, msg: 'User deleted succesfuly'});
    }catch(err) {
        res.json({success: false, msg: `Error: ${err}`});
    }
});

module.exports = router;