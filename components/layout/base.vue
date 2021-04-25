<template>
    <div id="layout" class="layout">
        <vheader></vheader>
        <div>
            <slot></slot>
        </div>
        <vfooter></vfooter>
    </div>
</template>

<script>
import vheader from './vheader'
import vfooter from './vfooter'
export default {
    components: {
        vheader,
        vfooter
    },
    watch: {
        '$colorMode.preference': function(value) {
            let layout = document.getElementById('layout')
            value === 'dark' ? (layout.className = 'layout paused box') : (layout.className = 'layout')
        }
    }
}
</script>

<style scoped>
.layout {
    @apply w-full bg-red-100 min-h-screen dark:bg-gray-900;
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