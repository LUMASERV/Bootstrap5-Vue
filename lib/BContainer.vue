<template>
    <div :class="{ ['container' + (fluid ? '-fluid' : '')]: true }" v-on="$listeners" v-bind="$props"><slot /></div>
</template>

<script>
export default {
    props: {
        fluid: {
            type: Boolean,
            default: false
        }
    }
}
</script>