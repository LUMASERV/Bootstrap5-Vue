<template>
    <div>
        <div class="text-center" v-if="loading">
            <div class="spinner-border m-auto" role="status" :class="{[`text-${variant}`]: true}">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <slot v-if="!loading" />
    </div>
</template>

<script>
export default {
    props:  {
        loading:  {
            type: Boolean,
            default: true
        },
        variant: {
            type: String,
            default: 'primary'
        }
    }
}
</script>