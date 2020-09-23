<template>
    <h1>Tabs 示例</h1>
    <div>示例1</div>
    <Tabs>
        <Tab title="nav1">content one</Tab>
        <Tab title="nav2">content two</Tab>
    </Tabs>
</template>

<script lang="ts">
    import Tabs from '../lib/Tabs.vue'
    import Tab from '../lib/Tab.vue'

    export default {
        components: {Tab, Tabs}
    }
</script>

<style lang="scss" scoped>

</style>
