<template>
<v-app>
    <v-toolbar app dark>
        <v-toolbar-title class="headline text-uppercase">
            <span>Vuetify Website</span>
        </v-toolbar-title>
    </v-toolbar>
    <v-spacer></v-spacer>
    <router-view></router-view>
    v
</v-app>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
</style>


<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    data() {
        return {
            //
        }
    }
}
</script>
