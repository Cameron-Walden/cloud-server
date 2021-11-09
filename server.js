'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.listen(PORT, () => console.log('PORT is running on 3001'))