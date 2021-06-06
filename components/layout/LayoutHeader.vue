<template>
    <div>
        <nav>
            <h1><nuxt-link to="/">irfanismail.</nuxt-link></h1>
            <ul>
                <!-- <li @click="$colorMode.preference = 'dark'"><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
                <li @click="$colorMode.preference = 'dark'"><nuxt-link to="#">Blogs</nuxt-link></li> -->
                <li @click="$colorMode.preference = 'dark'"><nuxt-link to="/contact" class="hover:underline">Contact</nuxt-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
h1 {
    @apply font-black text-xl md:text-3xl dark:text-gray-50;
}
nav {
    @apply flex flex-row justify-between py-7 px-4 md:px-16 items-end;
}

ul {
    @apply space-x-16 px-4;
}
li {
    @apply font-bold float-left dark:text-gray-50;
}
</style>