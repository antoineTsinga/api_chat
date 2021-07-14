import { createStore } from 'vuex'

export default createStore({
  state: {
    chanels: [{name:"Chargement..."}],
    current_chanel: {name: 'chargement...'},
    message_of_current_chanel:[],
    revele: false,
    contain_type: ''
  },
  getters:{
    get_chanels:(state) => {
      return state.chanels
    },
    get_current_chanels:(state) => {
      return state.current_chanels
    },
    get_message_of_current_chanel:(state) =>{
      return state.message_of_current_chanel
    }
  },
  mutations: {
    CHANGE_CHANELS(state, payload){
      state.chanels = payload
    },
    CHANGE_CURRENT_CHANELS(state, chanel){
      state.current_chanel = chanel
    },
    CHANGE_MESSAGE_OF_CURRENT_CHANELS(state, chanel){
      state.message_of_current_chanel = chanel
    },
    DELETE_CHANEL(state, chanel){
      state.chanels = state.chanels.filter(chanel2 => chanel2._id!=chanel._id )
    },
    TOGGLE_MODALE(state){
      state.revele = !state.revele
    },
    CHANGE_CONTAIN_TYPE(state, payload){
      state.contain_type = payload
    },
    ADD_CHANEL(state, chanel){
      state.chanels.push(chanel)
    }
  },
  actions: {

    add_chanel(context, chanel){
      context.commit('ADD_CHANEL', chanel)
    },
    change_chanels: function(context, chanels){
      context.commit('CHANGE_CHANELS', chanels)
    },
    toggleModale: function(context) {
      context.commit('TOGGLE_MODALE');
    },
    

    chg_crt_chl(context, chanel){ //change_current_chanel
      context.commit('CHANGE_CURRENT_CHANELS', chanel)
    },

    change_contain_type:  function(context, type){
      context.commit('TOGGLE_MODALE');
      switch(type){
        case 'adduser':
          context.commit('CHANGE_CONTAIN_TYPE', 'adduser');
          break;
        case 'info':
          context.commit('CHANGE_CONTAIN_TYPE','info');
          break;
        case 'search':
          context.commit('CHANGE_CONTAIN_TYPE','search');
            break;
      }
      let t = this.state.contain_type
      console.log(t)
    }
  },
  modules: {
  }
})
