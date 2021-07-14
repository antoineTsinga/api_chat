
<template>
    <div id="chanel_msg">
        <div class="chanels_case" >
            <div class="search">
                <i class="fas fa-plus-circle" @click="change_contain_type('search')"></i>
                <input type="search" placeholder="rechercher un canal">
            </div>
            <div v-for="chanel in reverse_chanels"  v-bind:key="chanel._id" >
                <div class="case">
                    <i class="fa fa-trash fa-2x" @click="delete_chanel(chanel)"></i> 
                    <router-link v-bind:to=generate_link(chanel) class="chanel" @click="change_current_chanel(chanel)">
                        <h3>{{chanel.name}}</h3>
                    </router-link>                    
                </div>
                <hr>
            </div>
        </div>
        
        <div class="msg">
            <router-view v-show="delete_h1" class="msg"/>
            <h1 v-show="!delete_h1" id="no_selected_chanel">Veillez selectionner un canal</h1>
        </div>
        <modale></modale>
    </div>
</template>

<script>
import axios from 'axios'
import Modale from "../components/Modale";
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Chanel',

  components: {
      modale: Modale
  },
  computed:{
      ...mapState(["chanels"]),
      reverse_chanels(){
        let t = this.chanels
          return t.reverse()
      }
  },
  data: () => {
        
      return { delete_h1: false}
  },
  created () {
        this.allchanels()
    },

    watch: {
    // appeler encore la méthode si la route change
    '$route': 'allchanels'
  },

  methods: {

    ...mapActions(['change_contain_type', 'chg_crt_chl', 'change_chanels']),
      
    change_current_chanel(chanel){ //cette fonction sera chargé d'afficher la section de message, 
      this.delete_h1 = !this.delete_h1
      this.chg_crt_chl(chanel)
    },

    allchanels () {
        axios.get('http://localhost:3000/api/chanel')
        .then(response => this.change_chanels(response.data, this.$store.commit('CHANGE_CHANELS')))
        .catch(function (error) {
            console.log(error);
            alert('une erreur s\'est produite lords du chargement réessayez plus tard')
        })
    },

    delete_chanel(chanel) {
        this.delete_h1 = !this.delete_h1
        axios.delete('http://localhost:3000/api/chanel/' + chanel._id)
        .then(
            this.change_chanels((this.chanels.filter(chanel1 => chanel1._id!=chanel._id)).reverse()),
            alert('fichier supprimé')
        )
        .catch(function (error) {
            console.log(error);
            alert('une erreur s\'est produite veillez réessayer plus tard')
        }).then()
    },

    generate_link(chanel){
          return "/api/chanel/:" + chanel._id;
      },

      delete_chanel2(chanel){
          this.delete_chanel(chanel);
      },

      
    }
}

</script>

<style scoped>
#chanel_msg{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    margin-left:0;
    border: 1px solid black;
}

hr{
    width: 90%;
    background-color: #add8e6;
    border: none;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));


}


.chanels_case{
    margin: 5px;
    width: 30%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    height: 100%;
    overflow: scroll;
}

.search{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
    margin-bottom: 5px;
    height: 10%;
    background-color: #add8e6;
    border-radius: 3px;
}
.case{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
}
.msg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    width: 68%;
}
</style>
