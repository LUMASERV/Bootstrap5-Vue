import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import Vue from 'vue'
import App from './App.vue'

import { BAccordionItem, BAlert, BBadge, BButton, BCheck, BCollapse, BContainer, BInput, BModal, BPagination, BRange, BSelect, BSpinner, BTab, BTable, BTextarea, BToast } from 'bootstrap5-vue'

Vue.component('b-container', BContainer)
Vue.component('b-table', BTable)
Vue.component('b-button', BButton)
Vue.component('b-btn', BButton)
Vue.component('b-badge', BBadge)
Vue.component('b-alert', BAlert)
Vue.component('b-select', BSelect)
Vue.component('b-input', BInput)
Vue.component('b-check', BCheck)
Vue.component('b-range', BRange)
Vue.component('b-toast', BToast)
Vue.component('b-modal', BModal)
Vue.component('b-spinner', BSpinner)
Vue.component('b-pagination', BPagination)
Vue.component('b-tab', BTab)
Vue.component('b-accordion-item', BAccordionItem)
Vue.component('b-collapse', BCollapse)
Vue.component('b-textarea', BTextarea)

new Vue({
    render: h => h(App)
}).$mount('#app')