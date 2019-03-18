const express = require('express')
const router = express.Router()
const Admin = require('../models/admin')
// const pics = require('../models/pics')
const mongoose = require('mongoose')
const db = "mongodb+srv://admin:1s9Ui5x8cpkjMcv7@jact-ntdow.mongodb.net/test?retryWrites=true"

mongoose.connect(db, { useNewUrlParser: true });

router.get('/admin', (req, res) => {
    Admin.find({}, (err, admins) => {
        if (err) {  
            
            res.send('something went wrong')
            next();
        }
        res.json(admins)
    });
    
})
  

module.exports = router;
