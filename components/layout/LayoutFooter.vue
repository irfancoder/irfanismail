<template>
    <div class="flex justify-center py-3">
        <span class="text-xs text-center dark:text-gray-400">© irfanismail.com {{ year }}. All rights reserved</span>
    </div>
</template>

<script>
export default {
    computed: {
        year() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
</style>