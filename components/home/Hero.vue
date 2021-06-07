<template>
    <div class="pb-24 px-4 md:px-0">
        <h1>{{ $colorMode.preference === 'dark' ? 'Hi there!' : "What's up homie? &#128293;" }}</h1>
        <h3>
            {{ $colorMode.preference === 'dark' ? "I'm Irfan, a self-learning software engineering guy. Based in Cyberjaya, Malaysia. 🇲🇾" : 'Check out my work and holla me up if we match.' }}
        </h3>

        <div class="py-16">
            <span class="dark:text-gray-300">You can connect with me here:</span>
            <ul>
                <li class="space-x-2">
                    <i class="i-github"></i>
                    <a class="text-opacity-30 hover:underline hover:text-opacity-100" href="https://github.com/irfancoder"> GitHub </a>
                </li>
                <li>
                    <i class="i-linkedin"></i>
                    <a class="hover:underline" href="https://www.linkedin.com/in/irfanismail96/"> LinkedIn </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
h1 {
    @apply text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-50;
    /* text-shadow: 4px 3px rgba(17, 24, 39, 1); */
}

h3 {
    @apply text-2xl md:text-4xl font-bold pt-8 md:pt-20 text-gray-900 dark:text-gray-300 leading-snug max-w-3xl;
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