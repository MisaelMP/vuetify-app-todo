<template lang="html">
    <div class="teams">
        <h1 class="subheading grey--text">Teams</h1>
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                    <v-card flat class="text-xs-center ma-3">
                        <v-responsive class="pt-4">
                            <v-avatar size="100" class="grey lighten-2">
                              <img :src="person.avatar" alt="alt">
                            </v-avatar>

                        </v-responsive>
                        <v-card-text>
                            <div class="subheading">{{ person.name }}</div>
                            <div class="grey--text">{{ person.role }}</div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey">
                                <v-icon left>
                                    message
                                </v-icon>
                                <span>message</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            team: [{
                    name: 'Misael Mercado',
                    role: 'Cacti collector',
                    avatar: 'https://i.pravatar.cc/300'
                },
                {
                    name: 'Ryu',
                    role: 'Cacti collector',
                    avatar: 'https://i.pravatar.cc/300'
                },
                {
                    name: 'Chun Li',
                    role: 'Cacti collector',
                    avatar: 'https://i.pravatar.cc/300'
                },
                {
                    name: 'Gouken',
                    role: 'Cacti collector',
                    avatar: 'https://i.pravatar.cc/300'
                },
                {
                    name: 'Yoshi',
                    role: 'Cacti collector',
                    avatar: 'https://i.pravatar.cc/300'
                },
            ]
        }
    }
}
</script>

<style scoped>
</style>
