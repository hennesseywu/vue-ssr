let express = require('express');
const path = require('path'); 
require('babel-register')
let app = express(); 

app.set('views', 'server/views');
app.set('view engine', 'ejs')
app.use('/api', require('./server/api.js')); 
app.use('/', require('./server/router.js')); 

app.use(express.static(path.join(__dirname, "dist")));

app.listen(3000, function() {
    console.log('localhost:3000')
});