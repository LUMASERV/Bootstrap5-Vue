<template>
    <div class="toast" :class="{ ['bg-' + variant]: variant, show }" role="alert" v-bind="filter($props, 'variant', 'show')" v-on="$listeners">
        <div class="toast-header" v-if="$slots.header">
            <slot name="header" />
        </div>
        <div class="toast-body">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        filter(listeners, ...keys) {
            listeners = { ...listeners }
            for(let key of keys)
                delete listeners[key]
            return listeners
        }
    }
}
</script>