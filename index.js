'use strict';

let express = require('express'),
    app = express(),
    port = 4444;

app.use(express.static('.'));



app.listen(port, function() {
    console.log('express train #', port);
});
