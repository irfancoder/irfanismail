<template>
    <layout-base>
        <template #default>
            <div>
                <div class="container mx-auto py-16 flex flex-row justify-between">
                    <div>
                        <h1>&#8249; Portfolio</h1>
                    </div>
                </div>
                <div class="container mx-auto">
                    <nuxt-content :document="page"></nuxt-content>
                </div>
            </div>
        </template>
    </layout-base>
</template>

<script>
import LayoutBase from '~/components/layout/LayoutBase.vue'
export default {
    components: {
        LayoutBase
    },
    data() {
        return {
            portfolios: []
        }
    },
    async asyncData({ $content }) {
        const page = await $content('hello').fetch()

        return {
            page
        }
    }
}
</script>

<style lang="scss">
h1 {
    @apply text-5xl font-extrabold text-gray-50;
}

.nuxt-content {
    h2 {
        @apply text-white text-3xl font-semibold pt-8;
    }
    p {
        @apply text-white;
    }
}
</style>