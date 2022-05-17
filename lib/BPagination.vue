<template>
    <nav>
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{'disabled': page <= 1}">
                <a class="page-link" @click="page--">
                    <fai icon="arrow-left" />
                </a>
            </li>
            <template>
                <li class="page-item" v-for="n in pivotedPages" :key="n" :class="{'active': n === page}">
                    <a class="page-link" @click="page = n">{{ n }}</a>
                </li>
            </template>
            <li class="page-item" :class="{'disabled': page === pages}">
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
            const itemCount = Math.min(this.pages, 11)
            let middle = this.page.valueOf()
            while(middle - 5 < 1)
                middle++
            while(middle + 5 > this.pages)
                middle--
            if(itemCount < 11)
                middle = 6
            return [...(new Array(itemCount))].map((_, i) => (i + middle - 5))
        },
        pages() {
            if (this.pagination.pages)
                return this.pagination.pages
            return Math.ceil(this.pagination.total/this.pagination.page_size)
        },
        page: {
            get() {
                return this.pagination.page
            },
            set(val) {
                if (this.pagination.page !== val) {
                    this.pagination.page = val
                    this.$emit('change', val)
                }
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