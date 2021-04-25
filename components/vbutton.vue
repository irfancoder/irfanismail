<template>
    <div>
        <i :class="icon"></i>
        <a :href="url">
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '#'
        },
        icon: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="css" scoped>
div {
    @apply space-x-2;
}
</style>