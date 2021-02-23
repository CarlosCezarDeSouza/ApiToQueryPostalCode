const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./src/routes/postalCode');

//Authentication permission for all URLs
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

//Route usage by the server
app.use(route);

app.listen(3000, () => {
    console.log('Server started on port 3000!')
})