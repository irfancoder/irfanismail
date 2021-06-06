<template>
    <LayoutBase>
        <div class="container mx-auto">
            <toggle />
            <div class="main">
                <media />
                <hero />
            </div>
            <!-- <p class="text-7xl text-opacity-70 animate-pulse text-center text-white">&ShortDownArrow;</p> -->
            <!-- <skills title="Web Development 🛠️">
                <template #default>
                    <div>
                        <h3>Frameworks</h3>
                        <div class="skills-group">
                            <tooltip title="Vue"><img class="skills-icon" src="~/assets/icons/vue.svg" alt="" /></tooltip>
                            <tooltip title="React"><img class="skills-icon" src="~/assets/icons/react.svg" alt="" /></tooltip>
                            <tooltip title="Laravel"><img class="skills-icon" src="~/assets/icons/laravel.svg" alt="" /></tooltip>
                        </div>
                    </div>
                    <div>
                        <h3>Applications</h3>
                        <div class="skills-group">
                            <tooltip title="NodeJS"><img class="skills-icon" src="~/assets/icons/nodejs.svg" alt="" /></tooltip>
                            <tooltip title="NextJS"><img class="skills-icon" src="~/assets/icons/nextjs.svg" alt="" /></tooltip>
                            <tooltip title="NuxtJS"><img class="skills-icon" src="~/assets/icons/nuxtjs.svg" alt="" /></tooltip>
                        </div>
                    </div>
                    <div>
                        <h3>Css Frameworks</h3>
                        <div class="skills-group">
                            <tooltip title="TailwindCSS"><img class="skills-icon" src="~/assets/icons/tailwindcss.svg" alt="" /></tooltip>
                            <tooltip title="Sass"><img class="skills-icon" src="~/assets/icons/sass.svg" alt="" /></tooltip>
                        </div>
                    </div>
                    <div>
                        <h3>Database</h3>
                        <div class="skills-group">
                            <tooltip title="MySQL"><img class="skills-icon" src="~/assets/icons/mysql.svg" alt="" /></tooltip>
                            <tooltip title="Mongo"><img class="skills-icon" src="~/assets/icons/mongo.svg" alt="" /></tooltip>
                        </div>
                    </div>
                    <div>
                        <h3>Deployment Tools</h3>
                        <div class="skills-group">
                            <tooltip title="NGiNX"><img class="skills-icon" src="~/assets/icons/nginx.svg" alt="" /></tooltip>
                            <tooltip title="PM2"><img class="skills-icon" src="~/assets/icons/pm2.svg" alt="" /></tooltip>
                            <tooltip title="ubuntu"><img class="skills-icon" src="~/assets/icons/ubuntu.svg" alt="" /></tooltip>
                            <tooltip title="Git"><img class="skills-icon" src="~/assets/icons/git.svg" alt="" /></tooltip>
                        </div>
                    </div>
                </template>
            </skills> -->
            <!-- <skills title="Mobile Development">
                <template #default>
                    <div>
                        <h3>Application</h3>
                        <div class="skills-group">
                            <tooltip title="Android Studio"><img class="skills-icon" src="~/assets/icons/android.svg" alt="" /></tooltip>
                            <tooltip title="React"><img class="skills-icon" src="~/assets/icons/react.svg" alt="" /></tooltip>
                            <tooltip title="Laravel"><img class="skills-icon" src="~/assets/icons/laravel.svg" alt="" /></tooltip>
                        </div>
                    </div>
                    <div>
                        <h3>Applications</h3>
                        <div class="skills-group">
                            <tooltip title="NodeJS"><img class="skills-icon" src="~/assets/icons/nodejs.svg" alt="" /></tooltip>
                            <tooltip title="NextJS"><img class="skills-icon" src="~/assets/icons/nextjs.svg" alt="" /></tooltip>
                            <tooltip title="NuxtJS"><img class="skills-icon" src="~/assets/icons/nuxtjs.svg" alt="" /></tooltip>
                        </div>
                    </div>
                    <div>
                        <h3>Css Frameworks</h3>
                        <div class="skills-group">
                            <tooltip title="TailwindCSS"><img class="skills-icon" src="~/assets/icons/tailwindcss.svg" alt="" /></tooltip>
                            <tooltip title="Sass"><img class="skills-icon" src="~/assets/icons/sass.svg" alt="" /></tooltip>
                        </div>
                    </div>
                    <div>
                        <h3>Tools</h3>
                        <div class="skills-group">
                            <tooltip title="Git"><img class="skills-icon" src="~/assets/icons/git.svg" alt="" /></tooltip>
                        </div>
                    </div>
                </template>
            </skills> -->

            <div class="py-28">
                <h3 class="text-5xl font-semibold pb-4 text-gray-900 dark:text-gray-50">Projects</h3>

                <table class="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Project</th>
                            <th width="40%">Description</th>
                            <th>Language</th>
                            <th>Created at</th>
                            <th>Size (kB)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(project, index) in projects" :key="project.id">
                            <td>{{ index + 1 + (page - 1) * per_page }}</td>
                            <td>{{ project.name }}</td>
                            <td>{{ project.description }}</td>
                            <td>{{ project.language }}</td>
                            <td>{{ project.created_at }}</td>
                            <td>{{ project.size }}</td>
                        </tr>
                        <tr v-if="projects.length == 0">
                            <td colspan="6">No more projects listed</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6">
                                <paginate-table :page="page" @update="update" :disable-next="projects.length < per_page"></paginate-table>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </LayoutBase>
</template>

<script>
import _ from 'lodash'
import LayoutBase from '~/components/layout/LayoutBase.vue'
import Hero from '~/components/home/Hero.vue'
import Media from '~/components/home/Media.vue'
import Toggle from '~/components/Toggle.vue'
import Skills from '~/components/home/Skills.vue'
import PaginateTable from '~/components/PaginateTable.vue'
export default {
    components: { LayoutBase, Hero, Media, Toggle, Skills, PaginateTable },
    data() {
        return {
            projects: [],
            page: 1,
            per_page: 8
        }
    },

    async fetch() {
        this.projects = await fetch(`https://api.github.com/users/irfancoder/repos?per_page=${this.per_page}&page=${this.page}`).then(res => res.json())
    },
    methods: {
        async updateProjects(_page) {
            this.projects = await fetch(`https://api.github.com/users/irfancoder/repos?per_page=${this.per_page}&page=${_page}`).then(res => res.json())
        },
        update(direction) {
            this.page = this.page + direction
            this.updateProjects(this.page)
        }
    }
}
</script>
<style lang="scss" scoped>
.main {
    @apply gap-28;
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.title {
    @apply font-bold;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

.skills-group {
    @apply flex flex-row space-x-16 py-12;
}
.skills-icon {
    @apply w-16 h-auto;
}

.table {
    @apply relative max-w-full w-full my-4;

    td,
    th {
        @apply px-4 border-b border-r border-gray-400 border-opacity-30 text-left;

        &:last-child {
            @apply border-r-0;
        }
    }

    > thead > tr > th {
        @apply bg-gray-300  py-4;
        &:first-child {
            @apply rounded-tl-md;
        }
        &:last-child {
            @apply rounded-tr-md;
        }
    }

    > tbody > tr > td {
        @apply bg-gray-50 py-2;
    }

    > tfoot > tr > td {
        @apply bg-gray-300 py-4 text-right;
        &:first-child {
            @apply rounded-bl-md;
        }
        &:last-child {
            @apply rounded-br-md;
        }
    }
}
</style>
