<template>


        <div id="app">
            <div id="head">
                <div class="container_logo_buttons_opt">
                    <div class="logo">
                        <img id="logo"  src="./assets/logo.png" alt="" >
                    </div>
                    <div class="button_opt">
                        
                        <router-link to="/api/chanel" class="button">Cannaux</router-link>
                        <router-link to="/api/profil" class="button"></router-link>
                    </div>
                </div>
                <div class="container_profil_photo_btn_deco">
                    <div class="profil_photo">
                        <img id="logo"  src="./assets/logo.png" alt="" >

                    </div>
                    <button class="btn_deco">Déconnexion</button>
                </div>
            </div>
            <div class="router">
                <router-view />
            </div>
            
        </div>

</template>


<script>
export default {
     methods: {
     }
    
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:absolute;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  }

#head {
    color: white;
    background:#24131B;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
}

#logo{
    height: 100px;
}
.button_opt{
    display: flex;
    justify-content: center;
    width: 200px;
}

.button {
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    color:#ffff;
}

.router{
    position: relative;
    display: block;
    height: 500px;
}
</style>
