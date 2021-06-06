<template>
    <layout-base>
        <div class="container mx-auto">
            <h3 class="text-5xl font-semibold pt-16 pb-4 text-gray-900 dark:text-gray-50"></h3>
        </div>
        <form name="contact" method="POST" data-netlify="true">
            <div class="form">
                <label for="name">Name</label>
                <input type="text" name="name" v-model="form.name" />
                <label for="name">Email</label>
                <input type="email" name="email" v-model="form.email" />
                <label for="purpose">Type of Inquiry</label>
                <select name="purpose" v-model="form.purpose">
                    <option v-for="(purpose, key) in purposes" :key="key" :value="key">{{ purpose }}</option>
                </select>
                <label for="message">Message</label>
                <textarea name="message" cols="40" rows="5" v-model="form.message" :placeholder="form.purpose === 'hiring' ? 'Cool, you can also connect to me on LinkedIn' : '...'"></textarea>
                <button type="submit">Submit</button>
            </div>
        </form>
    </layout-base>
</template>

<script>
import LayoutBase from '~/components/layout/LayoutBase.vue'
export default {
    components: { LayoutBase },
    data() {
        return {
            purposes: {
                sayhi: 'General',
                hiring: 'Hiring / Recruitment',
                others: 'Others'
            },
            messagePlacehoder: {
                hiring: 'Cool, you can also connect with me on LinkedIn'
            },
            form: {
                purpose: 'sayhi',
                name: '',
                email: '',
                message: ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    @apply flex flex-col space-y-4 max-w-3xl mx-auto;

    > label {
        @apply text-gray-50 text-opacity-80;
        &[for]:focus,
        &[for]:active {
            @apply text-white;
        }
    }
    > input[type='text'],
    > input[type='email'],
    > select {
        @apply h-12 px-4 bg-gray-600 text-white rounded;
    }
    > textarea {
        @apply p-4 bg-gray-600 text-white rounded;
    }

    > button[type='submit'] {
        @apply text-white py-2 bg-gray-400 rounded;
    }
}
</style>