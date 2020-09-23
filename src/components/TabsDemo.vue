<template>
    <h1>Tabs 示例</h1>
    <div>示例1</div>
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
        setup(){
            const x = ref('nav')
            return {x}
        }
    }
</script>

<style lang="scss" scoped>

</style>
