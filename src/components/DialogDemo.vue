<template>
    <h1>Dialog 示例</h1>
    <div>示例1 插槽式</div>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :close-on-click-overlay="false" :ok="fn">
        <template v-slot:title>
            <h2>Tip</h2>
        </template>
        <template v-slot:content>
            <p>content one</p>
            <p>content two</p>
            <p>content three</p>
        </template>
    </Dialog>
    <div>示例2 函数式</div>
    <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import Button from '../lib/Button.vue'
    import {ref} from 'vue'
    import {openDialog} from '../lib/openDialog'

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
            const showDialog = () => {
                openDialog({title: 'Tip', content: 'someContents',ok(){return false}})
            }
            return {x, toggle, fn, showDialog}
        }
    }
</script>

<style lang="scss" scoped>
div{
    margin-top: 12px;
}
</style>
