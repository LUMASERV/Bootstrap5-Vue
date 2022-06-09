<template>
    <div class="form-group">
        <label class="form-label">
            <slot />
        </label>
        <input class="form-range" v-bind="$attrs" v-on="filter($listeners, 'input')" type="range" :value="value" @input="e => $emit('input', e.target.value)" :min="min" :max="max">
        <div class="row">
            <div class="col-4 text-start" v-if="min">{{ min }}</div>
            <div class="col text-center">{{ value }}</div>
            <div class="col-4 text-end" v-if="min">{{ max }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        },
        min: {
            type: Number,
            default: NaN
        },
        max: {
            type: Number,
            default: NaN
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