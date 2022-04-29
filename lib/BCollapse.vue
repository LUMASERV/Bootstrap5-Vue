<template>
    <div class="collapse" :class="{'show': value}">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>