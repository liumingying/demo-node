const express = require('express');
const router = express.Router();
const Realm = require('realm');

router.get('/',function(req,res,next){
    var reQ = req.query.id;
    console.log(reQ);
    Realm.open({
        path
    })
})