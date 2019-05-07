<template>
<div class="Dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
        <v-layout row wrap class="mb-3">
            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
                    <v-icon left small>folder</v-icon>
                    <span class="caption text-lowercase">By project name</span>
                </v-btn>
                <span>sort project by project name</span>
            </v-tooltip>
            <v-tooltip top>
                <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
                    <v-icon left small>person</v-icon>
                    <span class="caption text-lowercase">By person</span>
                </v-btn>
                <span>sort project by person</span>
            </v-tooltip>
        </v-layout>
        <v-card flat v-for="project in projects" :key="project.title">
            <v-layout row wrap :class="`pa-3 project ${project.status}`">
                <v-flex xs12 md6>
                    <v-card-title primary-title class="grey--text text-capitalize">
                        {{project.title}}
                    </v-card-title>
                    <v-card-text>
                        Create a new website
                    </v-card-text>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <v-card-title primary-title class="grey--text text-capitalize">
                        Person
                    </v-card-title>
                    <v-card-text>
                        {{ project.person }}
                    </v-card-text>
                </v-flex>
                <v-flex xs6 sm4 md2>
                    <v-card-title primary-title class="grey--text text-capitalize">
                        Due
                    </v-card-title>
                    <v-card-text>
                        {{ project.due }}
                    </v-card-text>
                </v-flex>
                <v-flex xs2 sm4 md2>
                    <v-card-title primary-title class="grey--text text-capitalize">
                        Status
                    </v-card-title>
                    <v-chip :class="`${project.status} caption white--text my-2`">{{ project.status }}
                    </v-chip>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
        </v-card>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                    title: 'Design a new website',
                    person: 'Misael Mercado',
                    due: '21st Jan 2019',
                    status: 'ongoing',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
                {
                    title: 'Code up the homepage',
                    person: 'Chun Li',
                    due: '10th Jan 2019',
                    status: 'complete',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
                {
                    title: 'Design video thumbnails',
                    person: 'Ryu',
                    due: '20th Dec 2018',
                    status: 'complete',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
                {
                    title: 'Create a community forum',
                    person: 'Gouken',
                    due: '20th Oct 2018',
                    status: 'overdue',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
                },
            ]
        }
    },
    methods: {
        sortBy(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    }
}
</script>

<style>
.project.complete {
    border-left: 4px solid #649f86;
}

.project.overdue {
    border-left: 4px solid #da7c5f;
}

.project.ongoing {
    border-left: 4px solid #f6db4e;
}

.v-chip.complete {
    background-color: #649f86;
}

.v-chip.overdue {
    background-color: #da7c5f;
}

.v-chip.ongoing {
    background-color: #f6db4e;
}
</style>
