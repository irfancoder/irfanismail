<template>
    <LayoutBase>
        <div class="container mx-auto">
            <toggle />
            <div class="main">
                <media />
                <hero />
            </div>
            <skills title="Web Development 🛠️">
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
            </skills>

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
        </div>
    </LayoutBase>
</template>

<script>
import LayoutBase from '~/components/layout/LayoutBase.vue'
import Hero from '~/components/home/Hero.vue'
import Media from '~/components/home/Media.vue'
import Toggle from '~/components/Toggle.vue'
import Skills from '~/components/home/Skills.vue'
export default {
    components: { LayoutBase, Hero, Media, Toggle, Skills },
    data() {
        return {}
    }
}
</script>
<style>
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
</style>
