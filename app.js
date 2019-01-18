const express  = require('express');
const morgan   = require('morgan');
const routes   = require('./routes/index')
const app      = express();
const layout   = require('./views/layout');


app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
