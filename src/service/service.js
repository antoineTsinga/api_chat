exports.allchanels = (context) => {
    axios.get('http://localhost:3000/api/chanel')
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

exports.msg = (context, chanel) => {   
    axios.get('http://localhost:3000/api/chanel/' + chanel._id)
    .then(function (message) {
        return message.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

exports.delete_chanel = (context, chanel) => {
    axios.delete('http://localhost:3000/api/chanel/' + chanel._id)
    .then(function () {
        alert('chanel bien supprimer')
    })
    .catch(function (error) {
        console.log(error);
        alert('une erreur s\'est produite veillez réessayer plus tard')
    })
}

exports.create_chanel = (context, mesDonnees) => {
    axios({
    method: 'post',
    url: 'http://localhost:3000/api/chanel',
    data: mesDonnees
    })
    .then(function (reponse) {
        alert("l'utilisateur à bien été créé !")
        console.log(reponse);
    })
    .catch(function (erreur) {
        alert("une erreur est survenue réessayez plus tard !")
        console.log(erreur);
        
    });
}

