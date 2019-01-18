const express  = require('express');
const morgan   = require('morgan');
const app      = express();
const layout   = require('./views/layout');
const { db, Page, User }   = require('./models');
const models   = require('./models');

db.authenticate().then(() => {
  console.log('connected to the database');
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.send(layout(''));
});

const PORT = 1337;

const init = async () => {
  await db.sync({force: true});
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  });
}

init();
