<template>
    <button @click="load" class="fli-button" :class="classes" :disabled="disabled">
        <!--        <button v-bind="$attrs"> 指定继承事件的标签 -->
        <span v-if="loading" class="fli-loadingIndicator"><img src="../assets/loading.svg" alt=""></span>
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
                default: 'normal'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        setup(props,context) {
            const {theme, size, background, level, loading} = props
            const load = () => {
                context.emit('update:loading', !props.loading)
            }
            const classes = computed(() => {
                return {
                    [`fli-theme-${theme}`]: theme,
                    [`fli-size-${size}`]: size,
                    [`fli-background-${background}`]: background,
                    [`fli-level-${level}`]: level,
                    [`fli-loading-${loading}`]: loading,
                }
            })
            return {classes,load}
        }
    }
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $green: #40a99f;
    $blue: #4CA0FF;
    $red: #FF5773;
    $black: #666666;
    $withe: #fff;
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
            color: $red;

            &:hover, {
                color: $blue;
            }
        }

        &.fli-theme-text {
            background: inherit;
            border: none;
            color: $blue;
        }

        &.fli-background-red {
            color: $withe;
            border: none;
            background: linear-gradient(-45deg, #f15c68, #f04950 100%, #f04950 0);

            &:hover, &:focus {
                font-weight: bold;
            }
        }

        &.fli-background-blue {
            color: $withe;
            border: none;
            background: $blue;

            &:hover, &:focus {
                font-weight: bold;
            }
        }

        &.fli-background-black {
            color: $withe;
            border: none;
            background: $black;

            &:hover, &:focus {
                font-weight: bold;
            }
        }

        &.fli-size-small {
            height: 20px;
            font-size: 12px;
            padding: 10px 3px;
        }

        &.fli-size-longer {
            width: $h*8;
        }

        &.fli-size-big {
            height: $h*1.5;
            width: $h*3.5;
        }

        &.fli-level-main {
            color: $withe;
            border: none;
            background: $blue;

            &:hover, &:focus {
                font-weight: bold;
            }
        }

        &.fli-level-danger {
            background: red;

            &.fli-theme-text, &.fli-theme-link {
                background: inherit;
                color: red;
            }
        }

        &[disabled] {
            cursor: not-allowed;
            color: grey;
        }

        > .fli-loadingIndicator {
            img {
                width: 12px;
                height: 12px;
                margin-right: 6px;
                animation: fli-spin 1s infinite linear;
            }

        }
    }

    @keyframes fli-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg)
        }
    }
</style>
