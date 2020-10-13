// requires
const express = require ('express');
const bodyParser = require ('body-parser');

const mathRouter = require('./routes/math_router');



// globals
const app = express();
const port = 5000;

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// router uses
app.use('/math', mathRouter);

app.listen(port, () => {
    console.log("up and running on port: ", port);
});



