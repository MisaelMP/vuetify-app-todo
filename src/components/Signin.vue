<template>
    <v-dialog max-width="600px" transition="dialog-transition" v-model="dialog">
        <v-btn slot="activator" flat color="grey">
            <span>Sign in</span>
            <v-icon right>account_circle</v-icon>
        </v-btn>
        <v-card>
            <v-card-title>
                <h2>Sign in</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" @submit="submit" ref="form">
                    <v-text-field name="title" label="title" id="title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules">
                    </v-textarea>
                    <v-menu>
                        <v-text-field :value="formattedDate" slot="activator" label="Due Date" prepend-icon="date_range" :rules="inputRules"></v-text-field>
                        <v-date-picker v-model="due" color="indigo" :reactive="true"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-btn depressed color="teal lighten-3" class="dark--text mx-0 mt-3 text-uppercase" type="submit" :loading="loading">Sign in</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
