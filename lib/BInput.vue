<template>
    <div class="form-group">
        <div class="form-floating" v-if="float">
            <input class="form-control" id="whatever" v-bind="$props" v-on="filter($listeners, 'input')" :value="value" @input="e => $emit('input', e.target.value)" :placeholder="placeholder" :disabled="disabled">
            <label class="form-label" v-if="$slots.default" for="whatever">
                <slot />
            </label>
        </div>
        <template v-else>
            <label class="form-label" v-if="$slots.default">
                <slot />
            </label>
            <div class="input-group" v-if="$slots.prepend || $slots.append || $slots.appendRaw">
                <span class="input-group-text" v-if="$slots.prepend"><slot name="prepend" /></span>
                <input class="form-control" v-bind="$props" v-on="filter($listeners, 'input')" :value="value" @input="e => $emit('input', e.target.value)" :placeholder="placeholder" :disabled="disabled">
                <span class="input-group-text" v-if="$slots.append"><slot name="append" /></span>
                <slot name="appendRaw" />
            </div>
            <input v-else class="form-control" v-bind="$props" v-on="filter($listeners, 'input')" :value="value" @input="e => $emit('input', e.target.value)" :placeholder="placeholder" :disabled="disabled">
        </template>
    </div>
</template>

<script>
export default {
    props: {
        float: {
            type: Boolean,
            value: false
        },
        value: {
            type: [ String, Number ]
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: {
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