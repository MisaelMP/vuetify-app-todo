<template>
  <v-dialog
    max-width="600px"
    transition="dialog-transition"
  >
    <v-btn slot="activator" depressed color="#f6db4e" class="dark--text">Add new project</v-btn>
    <v-card>
        <v-card-title >
          <h2>Add a New Project</h2>
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" @submit="submit">
                <v-text-field
                  name="title"
                  label="title"
                  id="title"
                  v-model="title"
                  prepend-icon="folder"
                ></v-text-field>
                <v-textarea
                label="Information"
                v-model="content"
                prepend-icon="edit">
                </v-textarea>
                <v-btn depressed color="#f6db4e" class="dark--text mx-0 mt-3 text-uppercase" type="submit">Add Project</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        submit(e) {
            console.log(this.title, this.content);
            e.preventDefault();
        }
    }
}
</script>

<style scoped>
</style>
