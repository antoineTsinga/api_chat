const Chanel = require('../models/Chanel');

exports.createChanel = (req, res, next) => { //les requettes post permette ici de mettre un objet dans la bdd
  delete req.body._id;//on supprime l'identifiant reçu car la bdd les génere automatioquement (l'identifiant provient de la façon dont on a crée le front)
  const chanel = new Chanel({/*ceci est un raccourci qui permet de recopier directement corps de la requette
  cela revient exactement à faire:
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId,
  */
    ...req.body
  });
  chanel.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.modifyChanel = (req, res, next) => {
  Chanel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteChanel = (req, res, next) => {
    Chanel.deleteOne({ _id: req.params.id })
    .then(() => {res.status(200).json({ message: 'Objet supprimé !'})
     consol.log("ici")})
    .catch(error => res.status(400).json({ error }));
};

exports.getOneChanel = (req, res, next) => {
    Chanel.findOne({ _id: req.params.id })
    .then(chanel => res.status(200).json(chanel))
    .catch(error => res.status(404).json({ error }));
};

exports.getAllChanels = (req, res, next) => {
    Chanel.find()
    .then(chanels => {res.status(200).json(chanels)
    console.log('fait')})
    .catch(error => {res.status(400).json({ error })
    console.log('pas fait')});
};