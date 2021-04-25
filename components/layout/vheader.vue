<template>
    <div>
        <nav>
            <h1>irfanismail.</h1>
            <ul>
                <li><nuxt-link to="#">Portfolio</nuxt-link></li>
                <li><nuxt-link to="#">Blogs</nuxt-link></li>
                <li><nuxt-link to="#">Contact</nuxt-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
h1 {
    @apply font-black text-3xl dark:text-gray-50;
}
nav {
    @apply flex flex-row justify-between py-7 px-16 items-end;
}

ul {
    @apply space-x-16 px-4;
}
li {
    @apply font-bold float-left dark:text-gray-50;
}
</style>