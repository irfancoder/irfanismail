<template>
    <div class="container">
        <div>
            <Logo />
            <h1 class="font-bold text-6xl">irfanismail</h1>
            <p>{{ random_gif.data.image_url }}</p>
            <img :src="random_gif.data.image_url" />
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" class="button--green"> Documentation </a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" rel="noopener noreferrer" class="button--grey"> GitHub </a>
            </div>
        </div>
    </div>
</template>

<script>
import TestPls from '~/components/TestPls.vue'
export default {
    components: { TestPls },
    data() {
        return {}
    },
    async asyncData({ params, $axios }) {
        const random_gif = await $axios.$get(`https://api.giphy.com/v1/gifs/random?tag=git&rating=pg&api_key=3erSJdMZOYiNjVgMtpr3ooqGb9pC2KGC`)

        console.log(random_gif)
        return { random_gif }
    }
}
</script>
giphy api key: 3erSJdMZOYiNjVgMtpr3ooqGb9pC2KGC
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
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
</style>
