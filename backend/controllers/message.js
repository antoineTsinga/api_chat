const Message = require('../models/Message');

exports.createMessage = (req, res, next) => { //les requettes post permette ici de mettre un objet dans la bdd
  delete req.body._id;//on supprime l'identifiant reçu car la bdd les génere automatioquement (l'identifiant provient de la façon dont on a crée le front)
  const message = new Message({/*ceci est un raccourci qui permet de recopier directement corps de la requette
  cela revient exactement à faire:
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId,
  */
    ...req.body
  });
  message.save()
    .then(() => {res.status(201).json({ message: 'message enregistré !'})
    console.log("message enregistré")})
    .catch(error => res.status(400).json({ error }));
}

exports.modifyMessage = (req, res, next) => {
    Message.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'message modifié !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteMessage = (req, res, next) => {
    Message.deleteOne({ _id: req.params.id })
    .then(() => {res.status(200).json({ message: 'message supprimé !'})
     consol.log("ici")})
    .catch(error => res.status(400).json({ error }));
};

exports.getOneMessage = (req, res, next) => {
    Message.findOne({ chanel: req.params.id })
    .then(message => {res.status(200).json(message)
    console.log('message du canal')})
    .catch(error => res.status(404).json({ error }));
};

exports.getAllMessage = (req, res, next) => {
    Message.find()
    .then(messages => {res.status(200).json(messages)
    console.log('fait message')})
    .catch(error => {res.status(400).json({ error })
    console.log('pas fait')});
};