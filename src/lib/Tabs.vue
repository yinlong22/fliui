<template>
    <div>
        <div v-for="(item,index) in titles" :key="index">{{item}}</div>
        <!--        因为要逐个检查类型-->
        <component v-for="(item,index) in defaults" :key="index" :is="item"/>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'

    export default {
        components: {},
        setup(props, context) {
            const defaults = context.slots.default()
            const titles = defaults.map((tag) => {
                if (tag.type !== Tab) {
                    throw new Error('Tabs 子标签应为Tab')
                }
                return tag.props.title
            })
            return {defaults, titles}
        }
    }
</script>

<style lang="scss" scoped>

</style>
