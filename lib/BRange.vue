<template>
    <div class="form-group">
        <label class="form-label">
            <slot />
        </label>
        <input class="form-range" v-bind="$props" v-on="filter($listeners, 'input')" type="range" :value="value" @input="e => $emit('input', e.target.value)">
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
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