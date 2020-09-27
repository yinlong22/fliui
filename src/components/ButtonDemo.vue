<template>
    <div>
        <h1>button示例</h1>
        <div class="fli-addCode">
            <span>按钮类型</span>
            <Button @click="codeVisible" background="black">代码展示</Button>
        </div>
        <div>
            <Button theme="button">按钮</Button>
            <Button theme="link">链接</Button>
            <Button theme="text">文本</Button>
            <Button theme="wired">wired big button</Button>
        </div>
        <div>背景</div>
        <div>
            <Button background="red">你好</Button>
            <Button background="blue">你好</Button>
            <Button background="black">你好</Button>
        </div>
        <div>大小</div>
        <div>
            <Button theme="button">普普通</Button>
            <Button size="longer" background="red">长长长</Button>
            <Button size="big" background="black">大大大</Button>
            <Button size="small" background="blue">小小小</Button>
        </div>
        <div>按钮等级</div>
        <div>
            <Button>普通按钮</Button>
            <Button level="main">主要按钮</Button>
            <Button level="danger">危险按钮</Button>
            <Button level="danger" theme="link">危险链接按钮</Button>
            <Button level="danger" theme="text">危险文字按钮</Button>
        </div>
        <div>loading</div>
        <div>
            <Button loading>加载中</Button>
            <Button v-model:loading="bool">动态加载</Button>
        </div>
        <div>禁用</div>
        <div>
            <Button disabled>禁用</Button>
        </div>
        <code ref="className">{{code}}</code>
    </div>
</template>

<script lang="ts">
    import Button from '../lib/Button.vue'
    import {ref} from 'vue'

    export default {
        components: {Button},
        setup() {
            const bool = ref(false)
            const className = ref<HTMLDivElement>(null)
            const codeVisible = () => {
                const classes = className.value.classList
                !classes.contains('show') ? classes.add('show') : classes.remove('show')
            }
            const code =
                `<template>
    <div>
        <div>按钮类型</div>
        <div>
            <Button theme="button">按钮</Button>
            <Button theme="link">链接</Button>
            <Button theme="text">文本</Button>
            <Button theme="wired">wired big button</Button>
        </div>

        <div>背景</div>
        <div>
            <Button background="red">你好</Button>
            <Button background="blue">你好</Button>
            <Button background="black">你好</Button>
        </div>

        <div>大小</div>
        <div>
            <Button theme="button">普普通</Button>
            <Button size="longer" background="red" >长长长</Button>
            <Button size="big" background="black">大大大</Button>
            <Button size="small" background="blue">小小小</Button>
        </div>

        <div>按钮等级</div>
        <div>
            <Button>普通按钮</Button>
            <Button level="main">主要按钮</Button>
            <Button level="danger">危险按钮</Button>
            <Button level="danger" theme="link">危险链接按钮</Button>
            <Button level="danger" theme="text">危险文字按钮</Button>
        </div>

        <div>loading</div>
        <div>
            <Button loading>加载中</Button>
            <Button v-model:loading="bool">动态加载</Button>
        </div>

        <div>禁用</div>
        <div>
            <Button disabled>禁用</Button>
        </div>
    </div>
</template>
<script lang="ts">
import Button from 'fli-ui'
import {ref} from 'vue'
export default {
   components: {Button},
      setup() {//使用动态加载
         const bool = ref(true)
   }
   return {bool}
}
`
            return {bool, codeVisible, className, code}
        }
    }
</script>

<style lang="scss" scoped>
    div {
        margin-top: 10px;
    }

    Button {
        margin-bottom: 10px;
    }
</style>
