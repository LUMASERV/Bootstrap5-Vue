<template>
    <nav>
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{'disabled': page <= 1}">
                <a class="page-link" @click="page--">
                    <fai icon="arrow-left" />
                </a>
            </li>
            <template v-if="pageCount <= 10">
                <li class="page-item" v-for="n in pageCount" :key="n" :class="{'active': n === page}">
                    <a class="page-link" @click="page = n">{{ n }}</a>
                </li>
            </template>
            <template v-else>
                <li class="page-item" v-for="n in pivotedPages" :key="n" :class="{'active': n === page}">
                    <a class="page-link" @click="page = n">{{ n }}</a>
                </li>
            </template>
            <li class="page-item" :class="{'disabled': page === pageCount}">
                <a  class="page-link" @click="page++">
                    <fai icon="arrow-right" />
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        pagination: {
            type: Object,
            required: true
        }
    },
    computed: {
        pivotedPages() {
            const firstHalfSize = Math.min(5, this.page - 1) // how much elements should be filled up (5)
            const firstHalf = [...Array(firstHalfSize).keys()].map(x => this.page - firstHalfSize + x)  // construct left half of pagination
            const secondHalf = [...Array(9 - firstHalfSize).keys()].map(x => this.page + x + 1) // add right side and add up as much elements, so we always have 10
            return [...firstHalf, this.page, ...secondHalf] // merge and include current page
        },
        pageCount() {
            if (this.pagination.pages)
                return this.pagination.pages
            return Math.ceil(this.pagination.total/this.pagination.page_size)
        },
        page: {
            get() {
                return this.pagination.page
            },
            set(val) {
                this.pagination.page = val
                this.$emit('change', val)
            }
        }
    },
    watch: {
        pagination: {
            immediate: true,
            handler(pag) {
                this.page = pag.page
            }
        }
    }
}
</script>

<style scoped>
.page-item {
    cursor: pointer;
    user-select: none;
}
</style>