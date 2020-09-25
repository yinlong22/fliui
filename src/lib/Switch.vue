<template>
    <div>
        <button @click="toggle" class="fli-switch" :class="classes"><span></span></button>
    </div>
</template>

<script lang="ts">

    import {computed} from 'vue'

    export default {
        props: {
            value: Boolean, //对应emit暴露的事件
            theme: {
                type: String,
                default: ''
            }
        },
        setup(props, context) {
            const toggle = () => {
                context.emit('update:value', !props.value)
            }
            const {theme} = props
            const classes = computed(() => {
                return {
                    [`fli-clicked`]: props.value,
                    [`fli-clicked-${theme}`]: props.theme,
                }
            })
            return {toggle, classes}
        }
    }
</script>

<style lang="scss">
    $h: 22px;
    $h2: $h - 4px;
    $color: #4CA0FF;
    $color2: #F7515B;
    $color3: #40a99f;
    .fli-switch {
        height: $h;
        width: $h*2.1;
        border: none;
        background: #bfbfbf;
        border-radius: $h/2;
        position: relative;

        > span {
            position: absolute;
            top: 2px;
            left: 2px;
            height: $h2;
            width: $h2;
            background: white;
            border-radius: $h2/2;
            transition: all 250ms;
        }


        &.fli-clicked {
            background: $color;

            > span {
                left: calc(100% - #{$h2} - 2px);
            }



        }
        &.fli-clicked.fli-clicked-red {
            background: $color2;
        }
        &.fli-clicked.fli-clicked-blueL {
            background: $color3;
        }
        &:focus {
            outline: none;
        }

        &:active {
            > span {
                width: $h2+4px;
            }
        }

        &.fli-clicked:active {
            > span {
                width: $h2+4px;
                margin-left: -4px;
            }
        }
    }

</style>
