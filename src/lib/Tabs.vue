<template>
    <div class="fli-tabs" :class="classes">
        <div class="fli-tabs-nav" ref="container">
            <div class="before"></div>
            <div class="after"></div>
            <div class="collapse" v-for="(item,index) in titles" :key="index">
                <div v-if=" item === selected && JSON.stringify(classes).indexOf('fli-theme-collapse') > -1 ">
                    {{selected}}
                </div>
            </div>
            <div class="fli-tabs-nav-item" v-for="(item,index) in titles"
                 :ref="el=>{if (item === selected) selectedItem = el}"
                 :key="index" :class="{selected: item === selected}" @click="select(item)">{{item}}
            </div>
            <div class="fli-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="fli-tabs-content">
            <!--        因为要逐个检查类型-->
            <component class="fli-tabs-content-item" :class="{selected: item.props.title === selected}"
                       v-for="item in defaults" :is="item"></component>
        </div>
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import {ref, onMounted, watchEffect, computed} from 'vue'

    export default {
        props: {
            selected: {
                type: String,
            },
            theme: {
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
            const classes = computed(() => {
                return {
                    [`fli-theme-${props.theme}`]: props.theme,
                }
            })
            return {defaults, titles, select, selectedItem, indicator, container, classes}
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

                &.fli-theme {
                    display: none;
                }

                &.selected {
                    color: #4CC2FF;
                    font-weight: bold;
                }
            }
        }

        &-content {
            border-top: 1px solid #666666;
            margin: -1px 0;
            padding: 8px 0;
            color: #333333;

            &-item {
                display: none;

                &.selected {
                    display: block;
                }
            }
        }

        &.fli-theme-clo {
            display: inline-flex;

            > .fli-tabs-nav {
                display: inline-flex;
                white-space: nowrap;
                flex-direction: column;

                > .fli-tabs-nav-item {
                    position: relative;

                    &.selected {
                        font-weight: 400;
                    }

                    &.selected::after {
                        content: '';
                        position: absolute;
                        display: block;
                        height: 12px;
                        left: -6px;
                        top: 7px;
                        width: 3px;
                        background: #4CA0FF;
                    }
                }

                > .fli-tabs-nav-indicator {
                    height: 0;
                }
            }

            > .fli-tabs-content {
                border-top: none;
                padding-left: 12px;
                border-left: 2px solid #666666;
            }
        }

        &.fli-theme-collapse {
            > .fli-tabs-nav {
                display: inline-flex;
                white-space: nowrap;
                flex-direction: column;
                position: relative;
                border-radius: 4px;
                background: #808080;
                padding: 28px 5px 5px;
                height: 0;
                color: #B1B1B1;

                > .fli-tabs-nav-item {
                    overflow: hidden;
                    padding: 0 10px;

                    &.selected {
                        border-radius: 4px;
                        color: #f8f8f8;
                        font-weight: 400;
                        background: #a9a9a9;
                    }
                }

                > .collapse {
                    position: absolute;
                    color: #ffffff;
                    top: 4px;
                }

                > .fli-tabs-nav-indicator {
                    height: 0;
                }

                > .before {
                    position: absolute;
                    display: none;
                    right: 6px;
                    top: 14px;
                    border: 8px solid;
                    border-color: #8f8f8f transparent transparent;
                }
                > .after {
                    position: absolute;
                    right: 6px;
                    top: 4px;
                    border: 8px solid;
                    border-color: transparent transparent #8f8f8f;
                }
                &:focus, &:hover {
                    > .before {
                       display: block;
                    }
                    > .after {
                        display: none;
                    }
                    height: auto;
                }
            }

            > .fli-tabs-content {
                border-top: none;
            }
        }
    }

</style>
