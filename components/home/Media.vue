<template>
    <div class="flex flex-col py-16 space-y-6">
        <div v-if="$colorMode.preference !== 'dark'">
            <div class="img-container">
                <img :src="src" :alt="gif.alt" />
            </div>
            <button @click="fetchGif" :disabled="loading">{{ loading ? 'Loading' : 'Refresh' }}</button>
        </div>
        <div v-else>
            <img class="border-8 border-white shadow-lg" src="~/assets/images/profile.jpg" alt="A picture of Irfan Ismail" loading="lazy" />
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
    // async fetch() {
    //     this.fetchGif()
    // }
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