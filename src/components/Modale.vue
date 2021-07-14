<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale">
      <button v-on:click="toggleModale" class="btn-modale">X</button>
          
      <div v-if="contain_type == 'adduser'" class="adduser">
        <h2>Ajouter un utilisateur</h2>
        <input type="search" placeholder="Entrez l'adresse E-mail">
        <input type="submit" value="ajouter">
        <h4>C'est plus fun à</h4>
      </div>
      <div v-if="contain_type == 'info'" class="info">
        <p>c'est bon info</p>
      </div>
      
      <div v-if="contain_type == 'search'" >
        <form action="" class="search" @submit.prevent="submit_chanel">
          <h2>Créer un nouveau canal !</h2>
          <input v-model="created_chanel.name" type="text" placeholder="Nom du canal" required>
          <textarea v-model="created_chanel.description" id="description1" cols="30" rows="5" placeholder="une petite description..."></textarea>
          <div>
            <input type="submit" value="créer le canal">
            <input type="reset" value="reset">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import { mapState, mapActions} from 'vuex'
export default {
  name: "Modale",
  props: {},
  computed:{
      ...mapState([ "contain_type", "revele"]),
  },
  data: () => {
          return {created_chanel:{
            name:'',
            description:'',
            createur:'moi',
            users:[],
            nbr_msg_unread:0
            },
        }
    },
  methods:{
    ...mapActions(["create_chanel", "toggleModale", "add_chanel"]),
    submit_chanel() {
      this.toggleModale()
      axios({
      method: 'post',
      url: 'http://localhost:3000/api/chanel',
      data: this.created_chanel
      })
      .then(reponse => {
          this.add_chanel(this.created_chanel)
          alert("l'utilisateur à bien été créé !")
          console.log(reponse);
      })
      .catch(function (erreur) {
          alert("une erreur est survenue réessayez plus tard !")
          console.log(erreur);   
      });
    }
  }
};
</script>


<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 30%;
  border-radius: 5px;
}
.container{
  margin: 20px;
  border: 3px solid black;
  padding: 1em;
}

.btn-modale {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Helvetica;
}
</style>