const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.set('port', PORT);

app.use('/', express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
