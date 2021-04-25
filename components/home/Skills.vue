<template>
    <div class="py-16">
        <h1 :class="`font-extrabold uppercase ${$colorMode.preference === 'dark' ? 'text-gray-400' : 'text-gray-900'} tracking-widest text-3xl px-8 md:text-6xl py-8 md:px-0`">{{ title }}</h1>
        <div :class="`skills ${$colorMode.preference === 'dark' ? 'border-gray-400' : 'border-gray-900'}`">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Tooltip from '../Tooltip.vue'
export default {
    components: { Tooltip },
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.skills {
    @apply grid grid-cols-1 md:grid-cols-2 mx-auto gap-32 py-24 px-8 md:px-24 border-8 border-dashed rounded-lg;
}

img {
    @apply w-16 h-auto;
}

h3 {
    @apply font-bold text-4xl dark:text-white;
}
</style>