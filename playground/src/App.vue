<template>
    <b-container>
        <h1 class="text-center mb-5">Playground</h1>
        <h2>Buttons</h2>
        <div v-for="(variant, i) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']" :key="i" class="my-1">
            <b-btn v-for="size in ['sm', 'md', 'lg']" :key="size" :variant="variant" :size="size" class="mx-1">b-btn variant="{{variant}}" size="{{size}}"</b-btn>
        </div>
        <h2>Badges</h2>
        <div v-for="rounded in [false, true]" :key="rounded" class="my-1">
            <b-badge v-for="variant in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']" :key="variant" :variant="variant" :rounded="rounded" class="mx-1">b-badge variant="{{variant}}" rounded="{{ rounded }}"</b-badge>
        </div>
        <h2>Alerts</h2>
        <b-alert v-for="variant in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']" :key="variant" :variant="variant" class="mx-1">b-alert variant="{{variant}}"</b-alert>
        <h2>Table</h2>
        <b-table :headers="[
            { text: '#', key: 'id' },
            { text: 'First Name', key: 'first_name' },
            { text: 'Last Name', key: 'last_name' },
            { text: 'Actions', key: 'actions' }
        ]" :items="[
            { id: 1, first_name: 'Bob', last_name: 'Baker', variant: 'danger' },
            { id: 2, first_name: 'Alice', last_name: 'Adams' }
        ]">
            <template v-slot:header>
              Override
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <b-btn @click="log(item)" variant="danger" size="sm">Delete</b-btn>
            </template>
        </b-table>
        <h2>Form</h2>
        <div class="row">
            <div class="col-6">
                <b-input>
                    Label
                </b-input>
            </div>
            <div class="col-6">
                <b-input type="password">
                    Label Password
                </b-input>
            </div>
            <div class="col-6">
              <b-select :options="['a', 'b', 'c']">Select without placeholder</b-select>
            </div>
            <div class="col-6">
              <b-select :options="['a', 'b', 'c']" placeholder="My placeholder">Select with placeholder</b-select>
            </div>
            <div class="col-6">
              <b-textarea>
                A Textarea
              </b-textarea>
            </div>
        </div>
        <b-check>Test</b-check>
        <div class="row">
            <div class="col-6">
                <b-select :options="[{ text: 'Gruppe', $options: [ { text: 'A', value: 'Kein A' }, 'B' ] }, 'C']">
                    Test non floating
                </b-select>
            </div>
            <div class="col-6">
                <b-select :options="[{ text: 'Gruppe', $options: [ { text: 'A', value: 'Kein A' }, 'B' ] }, 'C']" float>
                    Test floating
                </b-select>
            </div>
        </div>
        <h2>Ranges</h2>
        <div class="row">
            <div class="col-6">
                <b-range />
            </div>
            <div class="col-6">
                <b-range min="1" max="10" v-model="rangeVal">Range test</b-range>
            </div>
        </div>
        <h2>Toast</h2>
        <b-toast>
            <template v-slot:header>
                <b>Test</b>
            </template>
            Hallo Welt
        </b-toast>
        <h2>Modals</h2>
        <b-modal v-model="modal" title="Test">A Test</b-modal>
        <b-btn @click="modal = true" class="me-1">Show Modal</b-btn>
        <b-modal v-model="validationModal" title="Validation Test" :validate="() => false">This modal won't close because of validate method, which returns false</b-modal>
        <b-btn @click="validationModal = true" class="ms-1">Show Validation Modal</b-btn>
        <h2>Tabs</h2>
        <b-tab :titles="{test: 'Custom text test'}">
            <template v-slot:test="">
                <h2>Content of Tab 1</h2>
            </template>
            <template v-slot:test2="">
                <h2>Content of Tab 2</h2>
            </template>
        </b-tab>
    </b-container>
</template>

<script>
export default {
    data: () => ({
        modal: false,
        validationModal: false,
        rangeVal: 1
    })
}
</script>
