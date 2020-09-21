<template>
    <div>
        <h1>button示例</h1>
        <div>按钮类型</div>
        <div>
            <Button theme="button">按钮</Button>
            <Button theme="link">链接</Button>
            <Button theme="text">文本</Button>
        </div>
        <div>背景</div>
        <div>
            <Button background="red">你好</Button>
            <Button background="blue">你好</Button>
            <Button background="black">你好</Button>
        </div>
        <div>示例3</div>
        <div>
            <Button theme="button">你好</Button>
            <Button theme="link">你好</Button>
            <Button theme="text">你好</Button>
        </div>
        <div>示例4</div>
        <div>
            <Button theme="button">你好</Button>
            <Button theme="link">你好</Button>
            <Button theme="text">你好</Button>
        </div>
        <div>示例5</div>
        <div>
            <Button theme="button">你好</Button>
            <Button theme="link">你好</Button>
            <Button theme="text">你好</Button>
        </div>
        <div>示例6</div>
        <div>
            <Button theme="button">你好</Button>
            <Button theme="link">你好</Button>
            <Button theme="text">你好</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'

    export default {
        components: {Button},
    }
</script>

<style lang="scss" scoped>
    div {
        margin-top: 10px;
    }
</style>
