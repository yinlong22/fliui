<template>
    <h1>Tabs 示例</h1>
    <div class="fli-addCode"><span>排列</span>
        <Button @click="codeVisible" background="black">代码展示</Button>
    </div>
    <Tabs v-model:selected="x">
        <Tab title="nav">content one</Tab>
        <Tab title="longer-nav">content two</Tab>
    </Tabs>
    <code ref="className">{{code}}</code>
</template>

<script lang="ts">
    import Tabs from '../lib/Tabs.vue'
    import Tab from '../lib/Tab.vue'
    import Button from '../lib/Button.vue'
    import {ref} from 'vue'

    export default {
        components: {Tab, Tabs, Button},
        setup() {
            const x = ref('nav')
            const code = `<template>
    <div>排列</div>
    <Tabs v-model:selected="x">
        <Tab title="nav">content one</Tab>
        <Tab title="longer-nav">content two</Tab>
    </Tabs>
</template>
<script lang="ts">
    import Tabs from '../lib/Tabs.vue'
    import Tab from '../lib/Tab.vue'
    import {ref} from 'vue'

    export default {
        components: {Tab, Tabs},
        setup() {
            const x = ref('nav')
        }
        return {x}
    }
            `
            const className = ref<HTMLDivElement>(null)
            const codeVisible = () => {
                const classes = className.value.classList
                !classes.contains('show') ? classes.add('show') : classes.remove('show')
            }
            return {x, code, className, codeVisible}
        }
    }
</script>

<style lang="scss" scoped>

</style>
