const path    = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.set('port', PORT);

app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
