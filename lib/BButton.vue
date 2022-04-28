<template>
    <button class="btn" :class="{ ['btn-' + (outline ? 'outline-' : '') + variant]: true, ['btn-' + size]: true, 'btn-block': block, 'btn-link': link }" v-on="$listeners" v-bind="$props">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        outline: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'md'
        },
        block: {
            type: Boolean,
            default: false
        },
        link: {
            type: Boolean,
            default: false
        }
    }
}
</script>