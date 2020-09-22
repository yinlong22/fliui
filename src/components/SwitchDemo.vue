<template>
    <div>
        <h1>switch示例</h1>
        <div>
            <Switch v-model:value="bool"/>
        </div>
    </div>
</template>

<script lang="ts">
    import Switch from '../lib/Switch.vue'
    import {ref} from 'vue'

    export default {
        components: {Switch},
        setup() {
            const bool = ref(true)
            return {bool}
        }
    }
</script>

<style lang="scss" scoped>

</style>
