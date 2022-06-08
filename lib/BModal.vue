<template>
    <div class="modal fade" tabindex="-1" aria-hidden="true" ref="modal" v-bind="filter($props, 'title', 'value', 'size', 'scrollable', 'centered')" v-on="$listeners">
        <div class="modal-dialog" :class="{ ['modal-' + size]: size, 'modal-dialog-scrollable': scrollable && scrollable != 'false', 'modal-dialog-centered': centered && centered != 'false' }">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header">
                        <h5 class="modal-title">{{ title }}</h5>
                        <button v-if="closeable && closeable != 'false'" type="button" class="btn-close" aria-label="Close" @click="e => { close(); $emit('close') }"></button>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer" v-if="footer">
                    <slot name="footer" :close="close">
                        <button type="button" class="btn btn-secondary" @click="e => { close(); $emit('cancel') }">Abbrechen</button>
                        <button type="button" class="btn btn-primary" @click="e => { if (validate()) { if (autoclose) close(); $emit('ok', close) }}">Ok</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
    props: {
        title: {
            type: String,
            default: 'Modal'
        },
        size: {
            type: String,
            default: ''
        },
        scrollable: {
            type: [Boolean, String],
            default: false
        },
        centered: {
            type: [Boolean, String],
            default: false
        },
        closeable: {
            type: [Boolean, String],
            default: true
        },
        value: {
            type: [Boolean, InputEvent],
            default: false
        },
        footer: {
            type: Boolean,
            default: true
        },
        validate: {
            type: Function,
            default: () => true
        },
        autoclose: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        filter(listeners, ...keys) {
            listeners = { ...listeners }
            for(let key of keys)
                delete listeners[key]
            return listeners
        },
        close() {
            this.$emit('input', false)
        }
    },
    data() {
        return {
            modal: undefined
        }
    },
    mounted() {
        this.modal = new Modal(this.$refs.modal, { keyboard: this.closeable && this.closeable != 'false', backdrop: (this.closeable && this.closeable != 'false') ? true : 'static' })
        this.$refs.modal.addEventListener('hide.bs.modal', () => {
            this.close()
            this.$emit('close')
        })
        if(this.value) {
            this.modal.show()
        }
    },
    beforeDestroy() {
        this.modal.dispose()
    },
    watch: {
        value(value) {
            if(value) {
                this.modal.show()
            } else {
                this.modal.hide()
            }
        }
    }
}
</script>