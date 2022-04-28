<template>
    <div class="alert" :class="{ ['alert-' + variant]: true }" role="alert" v-on="$listeners" v-bind="filter($props, 'variant')">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'primary'
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