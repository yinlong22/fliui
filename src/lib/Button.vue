<template>
    <button class="fli-button" :class="classes" :disabled="disabled">
        <!--        <button v-bind="$attrs"> 指定继承事件的标签 -->
        <slot/>
    </button>
</template>

<script lang="ts">
    import {computed} from 'vue'

    export default {
        // inheritAttrs:false 是否继承外组件绑定的事件
        props: {
            theme: {
                type: String,
                default: 'button',
            },
            size: {
                type: String,
                default: 'normal'
            },
            background: {
                type: String,
                default: 'normal'
            },
            level: {
                type: String,
                default: 'red'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: true
            }
        },
        setup(props) {
            const {theme, size, background, level, disabled, loading} = props
            const classes = computed(() => {
                return {
                    [`fli-theme-${theme}`]: theme,
                    [`fli-size-${size}`]: size,
                    [`fli-background-${background}`]: background,
                    [`fli-size-${size}`]: size,
                    [`fli-size-${size}`]: size,
                    [`fli-size-${size}`]: size,
                }
            })
            return {classes}
        }
    }
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a99f;
    $radius: 4px;
    .fli-button {
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade_out(black, 0.95);

        & + & {
            margin-left: 8px;
        }

        &:hover, &:focus {
            color: $blue;
            border-color: $blue;

            &:focus {
                outline: none;
            }

            &::-moz-focus-inner {
                border: 0;
            }
        }

        &.fli-theme-link {
            background: inherit;
            border: none;
            border-radius: 0;
            color: #FF5773;

            &:hover, {
                color: #4CA0FF;
            }
        }

        &.fli-theme-text {
            background: inherit;
            border: none;
            color: #40a99f;
        }

        &.fli-background-red {
            color: white;
            border: none;
            background: linear-gradient(-45deg, #f15c68, #f04950 100%, #f04950 0);
            &:hover, {
                font-weight: bold;
            }
        }
        &.fli-background-blue {
            color: white;
            border: none;
            background: #4CC2FF;
            &:hover, {
                font-weight: bold;
            }
        }
        &.fli-background-black {
            color: white;
            border: none;
            background: #666666;
            &:hover, {
                font-weight: bold;
            }
        }
    }
</style>
