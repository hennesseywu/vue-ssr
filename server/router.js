let express = require('express');
let router = express.Router(); 
import IndexPage from '../public/pages/indexPage.js';
const renderer = require('vue-server-renderer').createRenderer()

router.use('/', function (req, res, next) {
    renderer.renderToString(IndexPage, (err, body) => {
        if (err) throw err
        console.log(body)
        res.render("page", {
            body: body
        });
    }) 
});

module.exports = router; 