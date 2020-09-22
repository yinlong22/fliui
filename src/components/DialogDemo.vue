<template>
    <h1>Dialog 示例</h1>
    <div>示例1</div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :close-on-click-overlay="false" :ok="fn">
        <template v-slot:title>
            <h2>tip</h2>
        </template>
        <template v-slot:content>
            <p>content one</p>
            <p>content two</p>
            <p>content three</p>
        </template>
    </Dialog>
</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import Button from '../lib/Button.vue'
    import {ref} from 'vue'

    export default {
        components: {
            Button,
            Dialog
        },
        setup() {
            const x = ref(false)
            const toggle = () => {
                x.value = !x.value
            }
            const fn = () => {
                return false
            }
            return {x, toggle, fn}
        }
    }
</script>

<style lang="scss" scoped>

</style>
