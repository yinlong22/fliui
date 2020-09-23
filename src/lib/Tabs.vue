<template>
    <div class="fli-tabs">
        <div class="fli-tabs-nav">
            <div class="fli-tabs-nav-item" v-for="(item,index) in titles"
                 :key="index" :class="{selected: item === selected}" @click="select(item)">{{item}}
            </div>
        </div>
        <hr>
        <div class="fli-tabs-content">
            <!--        因为要逐个检查类型-->
            <component class="fli-tabs-content-item" :is="current"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import {computed} from 'vue'

    export default {
        props: {
            selected: {
                type: String,
            }
        },
        setup(props, context) {
            const defaults = context.slots.default()
            const titles = defaults.map((tag) => {
                if (tag.type !== Tab) {
                    throw new Error('Tabs 子标签应为Tab')
                }
                return tag.props.title
            })
            const current = computed(() => {
                return defaults.filter((tag) => {
                    return tag.props.title === props.selected
                })[0]
            })
            const select = (title: string) => {context.emit('update:selected', title)}
            return {defaults, titles, current, select}
        }
    }
</script>

<style lang="scss" scoped>
    .fli-tabs {
        &-nav {
            color: #333333;
            display: inline-flex;

            &-item {
                margin-right: 22px;

                &.selected {
                    font-weight: bold;
                }
            }
        }

        hr {
            margin: 6px 0;
        }
    }
</style>
