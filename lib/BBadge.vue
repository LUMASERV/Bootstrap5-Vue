<template>
    <span class="badge" :class="{ ['bg-' + variant]: true, ['rounded-pill']: rounded }" v-on="$listeners" v-bind="filter($props, 'variant', 'rounded')"><slot /></span>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        rounded: {
            type: Boolean,
            default: false
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