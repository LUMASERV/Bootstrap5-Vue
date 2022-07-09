<template>
    <div class="form-group">
        <label class="form-label" v-if="$slots.default">
            <slot />
        </label>
        <textarea class="form-control" :value="value" @input="e => $emit('input', e.target.value)" :placeholder="placeholder" :disabled="disabled" :rows="rows" /> 
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        rows: {
            type: Number,
            default: 4
        }
    }
}
</script>