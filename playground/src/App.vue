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
            <template v-slot:[`item.actions`]="{item}">
                <b-btn @click="log(item)" variant="danger" size="sm">Delete</b-btn>
            </template>
        </b-table>
        <h2>Form</h2>
        <b-input>
            Label
        </b-input>
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
        <b-range />
        <h2>Toast</h2>
        <b-toast>
            <template v-slot:header>
                <b>Test</b>
            </template>
            Hallo Welt
        </b-toast>
        <h2>Modals</h2>
        <b-modal v-model="modal" title="Test">A Test</b-modal>
        <b-btn @click="modal = true">Show Modal</b-btn>
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

</script>
