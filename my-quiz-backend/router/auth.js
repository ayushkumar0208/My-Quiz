const express = require('express');
const router = express.Router();

require('../DB/connection')
const Qdata = require('../Model/userSchema');
const Feed = require('../Model/userSchema-Feedback')

router.post('/save',(req, res) => {
    const value = req.body;
    const user = new Qdata(value);
    user.save().then(() =>{
        res.status(201).json({message:"Record Entered"})
    }).catch(err =>{
        res.status(500).json({message:"Failed to Entered Record"})
    })
}) 

router.get('/save',(req, res) => {
    Qdata.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

router.get('/feedback',(req, res) => {
    Feed.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})
router.post('/feedback',(req, res) => {
    const value = req.body;
    const feedback = new Feed(value);
    feedback.save().then(() =>{
        res.status(201).json({message:"Record Entered"})
    }).catch(err =>{
        res.status(500).json({message:"Failed to Entered Record"})
    })
}) 

module.exports = router;