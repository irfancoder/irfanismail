<template>
    <div class="flex flex-col md:flex-row gap-16 pt-32 pb-8 md:py-32 w-full md:min-w-800">
        <img class="h-72 w-auto border-8 border-white max-w-xs object-cover" :src="data.image_url" alt="" />
        <div class="flex flex-col py-2 justify-between">
            <label :class="`alert alert-${data.type}`" :type="data.type">{{ data.type }}</label>
            <h3>
                <nuxt-link :to="`/portfolio/${slug}`">{{ data.title }}</nuxt-link>
            </h3>

            <!-- <div class="space-y-4">
                <p class="max-w-prose pt-8">
                    {{ data.description }}
                </p>
                <p>Est {{ data.year }}</p>
                <p>Tech stack: {{ data.stack }}</p>
                <p>
                    Status: <span :class="`ml-2 status status-${data.status}`">{{ data.status }}</span>
                    
                </p>
            </div> -->
            <div class="w-full">
                <p class="max-w-prose pt-8">
                    {{ data.description }}
                </p>
                <table class="table mt-2">
                    <thead>
                        <th width="30%"></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><p>Year</p></td>
                            <td class="text-white">{{ data.year }}</td>
                        </tr>
                        <tr>
                            <td><p>Tech Stack</p></td>
                            <td class="text-white">{{ data.stack }}</td>
                        </tr>
                        <tr>
                            <td><p>Status</p></td>
                            <td>
                                <span :class="`status status-${data.status}`">{{ data.status }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
    @apply text-4xl text-gray-50 pt-8;
}

p {
    @apply text-gray-400;
}

.table {
    @apply w-full max-w-full relative;

    > thead,
    > tbody,
    > tfoot {
        > tr {
            > th,
            > td {
                @apply py-2;
            }
        }
    }
}

.status {
    @apply capitalize text-white;
    &-active {
        @apply text-green-500;
    }
}
</style>