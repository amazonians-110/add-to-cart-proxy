const express = require('express');
const compression = require('compression');
const app = express();

var PORT = 8000;
app.use(compression());
app.use(express.static(`${__dirname}/client/dist`));

app.get('*', (req, res) => {
   res.sendFile(`${__dirname}/client/dist/index.html`);
});

app.listen(PORT, console.log('listening at 8000'));