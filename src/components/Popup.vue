<template>
<v-dialog max-width="600px" transition="dialog-transition" v-model="dialog">
    <v-btn slot="activator" depressed color="#f6db4e" class="dark--text">Add new project
    </v-btn>
    <v-card>
        <v-card-title>
            <h2>Add a New Project</h2>
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
                <v-btn depressed color="#f6db4e" class="dark--text mx-0 mt-3 text-uppercase" type="submit" :loading="loading">Add Project</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit(e) {
            e.preventDefault();
            if (this.$refs.form.validate()) {
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(this.due, 'Do MMM YYYY'),
                    person: 'Misael Mercado',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('ProjectAdded');
                })
            }
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
    }
}
</script>

<style scoped>
</style>
