<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" @click="collapsed = !collapsed"  :class="{collapsed}" :aria-expanded="collapsed">
                <slot name="title" />
            </button>
        </h2>
        <div class="accordion-collapse collapse" :class="{show: !collapsed}">
            <div class="accordion-body">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        collapsed: {
            type: Boolean,
            default: true
        }
    }
}
</script>