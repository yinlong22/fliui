<template>
    <div class="fli-tabs">
        <div class="fli-tabs-nav" ref="container">
            <div class="fli-tabs-nav-item" v-for="(item,index) in titles"
                 :ref="el=>{if (item===selected) selectedItem = el}"
                 :key="index" :class="{selected: item === selected}" @click="select(item)">{{item}}
            </div>
            <div class="fli-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="fli-tabs-content">
            <!--        因为要逐个检查类型-->
            <component class="fli-tabs-content-item" :class="{selected: item.props.title === selected}"
                       v-for="item in defaults" :is="item"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import {ref, onMounted, watchEffect} from 'vue'

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
            const select = (title: string) => {context.emit('update:selected', title)}
            //动态获取tabs的宽度
            const selectedItem = ref<HTMLDivElement>(null)
            const indicator = ref<HTMLDivElement>(null)
            const container = ref<HTMLDivElement>(null)
            onMounted(() => {
                watchEffect(() => {
                    const {width} = selectedItem.value.getBoundingClientRect()
                    indicator.value.style.width = width + 'px'
                    const {left: leftContainer} = container.value.getBoundingClientRect()
                    const {left: leftResult} = selectedItem.value.getBoundingClientRect()
                    const left = leftResult - leftContainer
                    indicator.value.style.left = left + 'px'
                })
            })
            return {defaults, titles, select, selectedItem, indicator, container}
        }
    }
</script>

<style lang="scss">
    .fli-tabs {
        &-nav {
            position: relative;
            color: #333333;
            display: inline-flex;

            &-indicator {
                position: absolute;
                top: 27px;
                height: 3px;
                background: #4CA0FF;
                border-radius: 3px;
                transition: all 250ms;
            }

            &-item {
                cursor: pointer;
                margin-right: 22px;

                &.selected {
                    color: #4CC2FF;
                    font-weight: bold;
                }
            }
        }

        &-content {
            border-top: 1px solid #666666;
            margin: 6px 0;
            padding: 8px 0;
            color: #333333;

            &-item {
                display: none;

                &.selected {
                    display: block;
                }
            }
        }
    }
</style>
