<template>
    <div class="pb-32">
        <h1>{{ $colorMode.preference === 'dark' ? 'Hello.' : "What's up homie? &#128293;" }}</h1>
        <h3>
            {{ $colorMode.preference === 'dark' ? "I'm a software developer, with somewhat mad front end skills." : 'Check out my work and holla me up if we match.' }}
        </h3>

        <p>Irfan Ismail</p>
        <p class="pt-4">Malaysia 🇲🇾</p>

        <div class="pt-16">
            <span class="dark:text-white">You can connect with me here:</span>
            <ul>
                <li><vbutton icon="i-github" url="#">GitHub</vbutton></li>
                <li><vbutton icon="i-linkedin" url="#">LinkedIn</vbutton></li>
            </ul>
        </div>
    </div>
</template>

<script>
import vbutton from '../vbutton.vue'
export default {
    components: { vbutton }
}
</script>

<style lang="css" scoped>
h1 {
    @apply text-8xl font-extrabold text-gray-900 dark:text-gray-50;
}

h3 {
    @apply text-7xl font-bold py-20 text-gray-900 dark:text-gray-50 leading-snug;
}

p {
    @apply text-2xl font-semibold text-gray-900 dark:text-gray-50;
}

ul {
    @apply space-x-12 pt-7;
}
li {
    @apply float-left text-xl font-semibold text-gray-900 dark:text-gray-50;
}
</style>