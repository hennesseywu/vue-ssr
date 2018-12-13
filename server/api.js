import express from 'express';
let router = express.Router(); 
import React from 'react'; 
import ReactDOMServer from 'react-dom/server';

router.get('/test', function (req, res, next) {
    res.json({
        ret: 0, 
        data: {
            todoList: []
        }
    })
});

module.exports = router; 