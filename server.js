const express = require('express');
const path = require('path');
const app = express();

const rootPath = __dirname;

app.use('/static', express.static(path.join(rootPath, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(rootPath, 'index.html'));
});

app.get('/:page', (req, res) => {
    const page = req.params.page;

    res.sendFile(path.join(rootPath, `${page}.html`), (err) => {
        if (err) {
            res.status(404).send("<h1>404 - Page Nahi Mila</h1><p>Check karein ki kya file ka naam sahi hai?</p>");
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {

    console.log(` http://localhost:${PORT}`);

});