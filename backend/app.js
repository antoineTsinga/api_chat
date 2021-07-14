const express = require('express');  //exportation de l'applicaton express
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

const chanelRoutes = require('./routes/chanel')
const messageRoutes = require('./routes/message')



mongoose.connect('mongodb+srv://antoine:Justedou24@cluster0.1bnjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', //connextion à la bdd
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => { //mettre des entête pour éviter l'erreur corse (permet de dire au serveur client que les données envoyé sont saines)
  res.setHeader('Access-Control-Allow-Origin', '*');//on accept tout le monde
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//les différente requêtes acceptées
  next();
});

app.use(bodyParser.json()); //permet de mettre dans un format javaScript adapté au traitement

app.use('/api/chanel', chanelRoutes);
app.use('/api/message', messageRoutes);

module.exports = app;