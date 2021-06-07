<template>
    <div class="flex flex-col py-6 space-y-6 items-center md:items-left">
        <div class="space-y-2 px-4 md:px-0" v-if="$colorMode.preference !== 'dark'">
            <div class="img-container">
                <img :src="src" :alt="gif.alt" />
            </div>

            <button @click="fetchGif" :disabled="loading">{{ loading ? 'Loading...' : 'Refresh' }}</button>
            <p class="text-xs text-right">Powered by Giphy</p>
        </div>
        <div class="px-4 md:px-0" v-else>
            <p class="text-gray-300 text-right transform -rotate-12 translate-y-6">&#8672; That's me!</p>

            <img class="border-8 border-white shadow-lg mb-4" src="~/assets/images/profile.jpg" alt="A picture of Irfan Ismail" loading="lazy" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            src: '',
            gif: {
                alt: '',
                owner: ''
            },
            loading: false
        }
    },
    created() {
        this.fetchGif()
    },
    methods: {
        async fetchGif() {
            this.loading = true
            const random_gif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=git&rating=pg&api_key=3erSJdMZOYiNjVgMtpr3ooqGb9pC2KGC`).then(res => {
                this.loading = false
                return res.json()
            })
            const { image_url, username, title } = random_gif.data
            this.src = image_url
            this.gif.owner = username
            this.gif.alt = title
        }
    }
}
</script>

<style scoped>
button {
    @apply px-4 py-2 rounded bg-blue-600 text-white font-semibold inline w-full;
}

.img-container {
    height: 40vh;
}
img {
    max-height: 40vh;
}
</style>