<template>
    <div>
        <ul class="nav nav-tabs" :class="{'nav-fill': fill}">
            <li class="nav-item" v-for="(_, slot) of $slots" :key="slot">
                <a class="nav-link" :class="{'active': selectedSlot === slot}" @click="selectedSlot = slot" href="#">{{ titles[slot] || slot }}</a>
            </li>
        </ul>
        <slot :name="selectedSlot" />
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Object,
            default: () => ({})
        },
        fill: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        selectedSlot: ''
    }),
    mounted() {
        this.selectedSlot = Object.keys(this.$slots)[0]
    }
}
</script>