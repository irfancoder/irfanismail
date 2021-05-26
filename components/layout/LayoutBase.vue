<template>
    <div id="layout" :class="backgroundClass" class="flex flex-col">
        <layout-header></layout-header>
        <div class="flex-1">
            <slot></slot>
        </div>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
import LayoutFooter from './LayoutFooter.vue'
import LayoutHeader from './LayoutHeader.vue'
export default {
    components: {
        LayoutHeader,
        LayoutFooter
    },
    computed: {
        backgroundClass() {
            return this.$colorMode.preference === 'dark' ? 'layout paused box' : 'layout animate'
        }
    }
}
</script>

<style scoped>
.layout {
    @apply w-full bg-red-100 min-h-screen dark:bg-gray-900;
}

.animate {
    animation: wave 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.box {
    background-image: linear-gradient(rgba(107, 107, 107, 0.1) 2px, transparent 2px), linear-gradient(to right, rgba(107, 107, 107, 0.1) 2px, #111827 2px);
    background-size: 80px 80px;
}

@keyframes wave {
    from {
        filter: hue-rotate(0deg);
    }
    to {
        filter: hue-rotate(360deg);
    }
}

.paused {
    animation: none;
}
</style>