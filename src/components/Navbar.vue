<template>
<nav>
    <v-toolbar flat app>
        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light">Todo</span>
            <span>Vue</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>
    <v-navigation-drawer temporary v-model="drawer" app class="indigo">
        <v-list>
            <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" avatar>
                <v-list-tile-action>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'Projects', route: '/projects' },
                { icon: 'person', text: 'Teams', route: '/teams' }
            ]
        }
    }
}
</script>

<style scoped>
</style>
