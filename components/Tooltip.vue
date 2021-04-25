<template>
    <div class="tooltip-box">
        <slot></slot>
        <div class="tooltip">
            <label> {{ title }}</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>

<style scoped>
.tooltip-box {
    position: relative;
    display: inline-block;
}

.tooltip-box:hover .tooltip {
    opacity: 1;
}

.tooltip {
    @apply text-center z-10 absolute font-semibold py-1 text-white bg-gray-700 rounded-md px-4;
    min-width: 6rem;
    bottom: -50px;
    left: -25%;

    opacity: 0;
    transition: opacity 0.2s;
}

.text::after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #a782e8 transparent transparent transparent;
}
</style>