<template>
    <div class="form-group" :class="{'form-floating': float}">
        <label class="form-label" v-if="$slots.default && !float">
            <slot />
        </label>
        <div class="input-group" v-if="$slots.prepend || $slots.append || $slots.appendRaw">
            <span class="input-group-text" v-if="$slots.prepend"><slot name="prepend" /></span>
            <select class="form-select" v-bind="filter($props, 'options')" v-on="filter($listeners, 'input')" :value="value" @input="e => $emit('input', e.target.value)"  :size="size">
                <option v-if="!!placeholder" value="" disabled selected>{{ placeholder }}</option>
                <template v-for="(option, i) in options">
                    <option
                        v-if="typeof option == 'string' || !('$options' in option)"
                        :key="i" :disabled="typeof option == 'string' ? false : option.disabled"
                        :value="typeof option == 'string' ? option : option.value"
                    >
                        {{ typeof option == 'string' ? option : option.text }}
                    </option>
                    <optgroup v-else :key="i" :disabled="option.disabled" :label="option.text">
                        <option
                            v-for="(option2, i2) in (option.$options || [])" :key="i2"
                            :disabled="typeof option2 == 'string' ? false : option2.disabled"
                            :value="typeof option2 == 'string' ? option2 : option2.value"
                        >
                            {{ typeof option2 == 'string' ? option2 : option2.text }}
                        </option>
                    </optgroup>
                </template>
            </select>
            <span class="input-group-text" v-if="$slots.append"><slot name="append" /></span>
            <slot name="appendRaw" />
        </div>
        <select v-else class="form-select" v-bind="filter($props, 'options')" v-on="filter($listeners, 'input')" :value="value" @input="e => $emit('input', e.target.value)" :size="size">
            <option v-if="!!placeholder" value="" disabled selected>{{ placeholder }}</option>
            <template v-for="(option, i) in options">
                <option
                    v-if="typeof option == 'string' || !('$options' in option)"
                    :key="i" :disabled="typeof option == 'string' ? false : option.disabled"
                    :value="typeof option == 'string' ? option : option.value"
                >
                    {{ typeof option == 'string' ? option : option.text }}
                </option>
                <optgroup v-else :key="i" :disabled="option.disabled" :label="option.text">
                    <option
                        v-for="(option2, i2) in (option.$options || [])" :key="i2"
                        :disabled="typeof option2 == 'string' ? false : option2.disabled"
                        :value="typeof option2 == 'string' ? option2 : option2.value"
                    >
                        {{ typeof option2 == 'string' ? option2 : option2.text }}
                    </option>
                </optgroup>
            </template>
        </select>
        <label class="form-label" v-if="$slots.default && float" for="whatever">
            <slot />
        </label>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [ String, Number ],
            default: ''
        },
        options: {
            type: Array,
            default: () => []
        },
        size: {
            type: Number,
            default: 0
        },
        float: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: String,
            default: ''
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