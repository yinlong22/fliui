<template>
    <div>
        <button @click="toggle" :class="{clicked:value}"><span></span></button>
    </div>
</template>

<script lang="ts">

    export default {
        props: {
            value: Boolean //对应emit暴露的事件
        },
        setup(props, context) {
            const toggle = () => {
                context.emit('update:value', !props.value)
            }
            return {toggle}
        }
    }
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button {
        height: $h;
        width: $h*2.2;
        border: none;
        background: #FC765E;
        border-radius: $h/2;
        position: relative;
    }

    span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2/2;
        transition: 250ms;
    }

    button.clicked {
        background: #F7515B;
    }

    button.clicked > span {
        left: calc(100% - #{$h2} - 2px);
    }

    button:focus {
        outline: none;
    }
</style>
