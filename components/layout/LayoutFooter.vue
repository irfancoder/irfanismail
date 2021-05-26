<template>
    <div class="flex justify-center py-6">
        <span class="text-center dark:text-gray-400">© irfanismail.com {{ getYear() }}. All rights reserved</span>
    </div>
</template>

<script>
export default {
    methods: {
        getYear() {
            const today = new Date()

            return today.getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
</style>