<template>
    <div>
        <h1>switch示例</h1>
        <div class="fli-addCode"><span>颜色</span>
            <Button @click="codeVisible" background="black">代码</Button>
        </div>
        <div class="fli-showCode">
            <Switch v-model:value="bool"/>
            <Switch theme="red" v-model:value="bool2"/>
            <Switch theme="blueL" v-model:value="bool3"/>
            <span></span><span></span><span></span>
        </div>
        <code ref="className">{{code}}</code>
        </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue'
    import {ref} from 'vue'
    import Button from '../lib/Button.vue'

    export default {
        components: {Button, Switch},
        setup() {
            const bool = ref(true)
            const bool2 = ref(true)
            const bool3 = ref(true)
            const code =
`<template>
<Switch v-model:value="bool"/>
<Switch theme="red" v-model:value="bool2"/>
<Switch theme="blueL" v-model:value="bool3"/>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
   components: {Switch},
      setup() {
      //每个Switch的状态值是$bool 默认选中为true
         const bool = ref(true)
         const bool2 = ref(true)
         const bool3 = ref(true)
   }
   return {bool, bool2, bool3}
}
`
            const className = ref<HTMLDivElement>(null)
            const codeVisible = () => {
                const classes = className.value.classList
                !classes.contains('show') ? classes.add('show') : classes.remove('show')
            }
            return {bool, bool2, bool3, code, className, codeVisible}
        }
    }
</script>

<style lang="scss" scoped>
    code {
        border-radius: 3px;
        opacity: 0;
        visibility: hidden;
        &.show {
            opacity: 1;
            visibility: visible;
            display: block;
        }
        transition:opacity 1s;
    }
</style>
