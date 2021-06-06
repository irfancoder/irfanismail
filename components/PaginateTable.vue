<template>
    <div class="space-x-8">
        <button @click="$emit('update', -1)" :disabled="page == 1">Previous</button>
        <span>{{ page }}</span>
        <button @click="$emit('update', 1)" :disabled="disableNext">Next</button>
    </div>
</template>

<script>
export default {
    props: {
        page: {
            type: Number
        },
        disableNext: {
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
</style>