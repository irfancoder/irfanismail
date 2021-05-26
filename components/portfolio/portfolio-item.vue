<template>
    <div class="flex flex-row gap-16 item">
        <img class="h-72 w-auto border-8 border-white max-w-xs object-cover" :src="data.image_url" alt="" />
        <div class="flex flex-col py-2 justify-between">
            <label :class="`alert alert-${data.type}`" :type="data.type">{{ data.type }}</label>
            <h3>
                <nuxt-link :to="`/portfolio/${slug}`">{{ data.title }}</nuxt-link>
            </h3>
            <p class="max-w-prose">
                {{ data.description }}
            </p>
            <div class="space-y-2">
                <p>Est {{ data.year }}</p>
                <p>Tech stack: {{ data.stack }}</p>
                <p>Status: {{ data.status }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { kebabCase } from 'lodash'
export default {
    props: {
        data: { type: Object, default: null }
    },
    computed: {
        slug() {
            return kebabCase(this.data?.title)
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    @apply py-32;
    min-width: 1000px;
}
.alert {
    @apply text-xs px-4 py-1 tracking-wider uppercase text-white font-semibold rounded-full;

    &-mobile {
        @apply bg-green-500;
    }
    &-webapp {
        @apply bg-red-500;
    }
    &-career {
        @apply bg-yellow-500;
    }
    &-iot {
        @apply bg-gray-500;
    }
}
h3 {
    @apply text-4xl text-gray-50;
}

p {
    @apply text-gray-400;
}
</style>