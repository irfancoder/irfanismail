<template>
    <div class="flex items-center space-x-6 py-16">
        <span class="label">Fun</span>
        <label class="switch">
            <input type="checkbox" @change="changeTheme($event)" />
            <span class="slider round"></span>
        </label>
        <span class="label">Professional</span>
    </div>
</template>

<script>
export default {
    methods: {
        changeTheme(event) {
            if (event.target.checked) this.$colorMode.preference = 'dark'
            else this.$colorMode.preference = 'light'
        }
    }
}
</script>

<style scoped>
.label {
    @apply text-xl font-bold dark:text-white;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #2196f3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>