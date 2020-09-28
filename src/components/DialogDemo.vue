<template>
    <h1>Dialog 示例</h1>
    <div class="fli-addCode">
        <span>插槽式</span>
        <Button @click="codeVisible" background="black">代码展示</Button>
    </div>
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
    <div>函数式</div>
    <Button @click="showDialog">show</Button>
    <code ref="className">{{code}}</code>
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
                openDialog({title: 'Tip', content: 'someContents', ok() {return false}})
            }
            const code =
                `<div>插槽式</div>
<template>
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

<div>函数式</div>
<Button @click="showDialog">show</Button>
</template>
<script lang="ts">
    import Dialog from 'fli-ui'
    import {ref} from 'vue'
export default {
        components: {Dialog},
        setup() {
            const x = ref(false)
            const toggle = () => {
                x.value = !x.value
            }
            const fn = () => {//点击ok时的校验函数
                return false
        }
            const showDialog = () => {//函数式
                openDialog({title: 'Tip', content: 'someContents', ok() {return false}})
            }
        return {x, toggle, fn, showDialog}
    }
}
`
            const className = ref<HTMLDivElement>(null)
            const codeVisible = () => {
                const classes = className.value.classList
                !classes.contains('show') ? classes.add('show') : classes.remove('show')
            }
            return {x, toggle, fn, showDialog, code, codeVisible, className}
        }
    }
</script>

<style lang="scss" scoped>
    div {
        margin-top: 12px;
    }
</style>
