<template>
    <div class="form-check" :class="{'form-check-inline': inline}">
        <input class="form-check-input" v-bind="$props" v-on="filter($listeners, 'input')" :type="type" :checked="value" @input="e => $emit('input', e.target.checked)">
        <label class="form-check-label">
            <slot />
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'checkbox'
        },
        inline: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        filter(listeners, key) {
            listeners = { ...listeners }
            delete listeners[key]
            return listeners
        }
    }
}
</script>