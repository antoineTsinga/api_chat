<template>
    <div class="chanel1">
        <div class="message_banner">
            <img src="" alt="" class="">
            <p class="chanel_name">{{current_chanel.name}}</p>
            <div class="icon_banner">
                <i class="fa fa-user-plus fa-2x" @click="change_contain_type('adduser')"></i>
                <i class="fa fa-info-circle fa-2x" @click="change_contain_type('info')"></i>
            </div>

        </div>
        <div id="message" >
            <div  v-for="message in messages" :key=message._id>
                <div v-if="message.users == current_chanel.createur && message.chanel == current_chanel._id" class="creator" ><p>{{message.body}}</p></div>
                <div v-else-if="!message.users == current_chanel.createur && message.chanel == current_chanel._id" class="user"><p>{{message.body}}</p></div>
            </div>
        </div>
            
        <div class="writing_bar">
            <form action="" method="" @submit.prevent="send_message">
                <div class="send_file_icon">
                    <i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
                </div>
                <textarea name="text_message"  placeholder="Aa" id="text_message" cols="100" rows="1" v-model="message_send.body"> </textarea>
                <button class="send_icon">
                    <i class="fa fa-paper-plane fa-2x" aria-hidden="true" @click="send_message"></i>
                </button>
            </form>
        </div>
        <modale></modale>
    </div>
</template>

<script>
import axios from 'axios'
import Modale from "../components/Modale";
import { mapState, mapActions } from 'vuex'
export default {
    name: 'Message',
    props:{
    },
    components: {
      modale: Modale
    },
    data: () => {
        return {user_message:{
            body:'',
            id_canal:'',
            id_utilisateur:'',
            isRead:true,
            date_et_heure:''
            },
            contain_type:'',
            messages:[{users: 'chargement...', body: 'chargement...', _id: '3' }],
            message_send:{body:'', users:'moi', chanel:'', date_et_heure:'', isRead:true}
        }
    },
    created () {
        this.msg()
    },

    watch: {
    // appeler encore la méthode si la route change
    '$route': 'msg'
  },
    computed:{
        ...mapState(['revele', 'current_chanel'])
    },


    methods: {
        ...mapActions(['change_contain_type']),
        msg  () {
            
            axios.get('http://localhost:3000/api/message/')
            .then(list_messages =>{this.messages = list_messages.data})
            .catch(function (error) {
                console.log(error);
            });
        },

        send_message(){  
            var t1= this.current_chanel._id
            var t2 = new Date()
            var t3 = document.getElementById('text_message').value
            var variable = {body:t3, users:'moi', chanel:t1, date_et_heure:t2, isRead:true}
            axios({
            method: 'post',
            url: 'http://localhost:3000/api/message/',
            data: variable
            })
            .then(
                this.add_message(this.messages, variable),
            )
            .catch(function (erreur) {
                alert("une erreur est survenue réessayez plus tard !")
                console.log(erreur);   
            });
        },

        add_message(messages, message){
            messages.push(message)
            document.getElementById('message').scrollTop = document.getElementById('message').scrollHeight;
        },
    },
}
</script>



<style scoped>


.chanel1{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    margin-top: 5px;
    background-color: #faebd7;
}
.message_banner{
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center ;
    width: 100%;
    height: 10%;
    background-color: #add8e6;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.icon_banner{
    display: flex;
    justify-content: space-around;
    width: 15%;
    padding-left:5px;
}
#message{
    margin-top: 9%;
    margin-bottom: 9%;
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scrollbar-width: thin;

}
.creator{
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
    font-size: 1em;
}
.creator p {
    
    max-width: 45%;
    border-radius: 4px;
    padding: 10px;
    margin-right: 3%;
    word-wrap: break-word;
    background-color: #add8e6;
}

.user{
    width: 100%;
}

.user p{
    width: 100%;
    word-wrap: break-word;
    background-color: #add8e6;
}

.writing_bar{
    display:flex;
    justify-content:center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    background-color: #add8e6;
}

.writing_bar form{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

}

textarea{
    border-radius: 15px;
    width: 80%;
    font-family: Helvetica;
    font-size: 1em;
    outline: none;
}
</style>