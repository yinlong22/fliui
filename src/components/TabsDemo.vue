<template>
    <h1>Tabs 示例</h1>
    <div class="fli-addCode"><span></span>
        <Button @click="codeVisible" background="black">代码展示</Button>
    </div>
    <div>横排列</div>
    <Tabs v-model:selected="x">
        <Tab title="nav">content one</Tab>
        <Tab title="longer-nav">content two</Tab>
        <Tab title="longer-content">some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents</Tab>
    </Tabs>
    <div>竖排列</div>
    <Tabs v-model:selected="y" theme="clo">
        <Tab title="nav2">content one</Tab>
        <Tab title="long-content2">some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents</Tab>
    </Tabs>
    <div style="margin-top: 12px">抽屉式排列</div>
    <Tabs v-model:selected="z" theme="collapse">
        <Tab title="nav3">content one</Tab>
        <Tab title="nav4">content two</Tab>
        <Tab title="long-content3">some contents some contents some contents</Tab>
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
            const y = ref('nav2')
            const z = ref('nav3')
            const code = `<template>
    <div>横排列</div>
    <Tabs v-model:selected="x">
        <Tab title="nav">content one</Tab>
        <Tab title="longer-nav">content two</Tab>
        <Tab title="longer-content">some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents</Tab>
    </Tabs>
    <div>竖排列</div>
    <Tabs v-model:selected="y" theme="clo">
        <Tab title="nav2">content one</Tab>
        <Tab title="long-content">some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents some contents</Tab>
    </Tabs>
</template>
<script lang="ts">
    import {Tabs,Tab} from 'fli-ui'
    import {ref} from 'vue'
    export default {
        components: {Tab, Tabs},
        setup() {
            const x = ref('nav')//默认选中title
            const y = ref('nav1')
            const z = ref('nav3')
        }
        return {x,y,z}
    }
            `
            const className = ref<HTMLDivElement>(null)
            const codeVisible = () => {
                const classes = className.value.classList
                !classes.contains('show') ? classes.add('show') : classes.remove('show')
            }
            return {x, code, className, codeVisible,y,z}
        }
    }
</script>

