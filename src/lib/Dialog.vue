<template>
    <div class="fli-dialog-overlay"></div>
    <div class="fli-dialog-overlay">
        <header>标题</header>
        <main>
            <p>content1</p>
            <p>content2</p>
        </main>
        <footer>
            <Button>Ok</Button><Button>Cancel</Button>
        </footer>
    </div>
</template>

<script lang="ts">
    import Button from './Button.vue'
    export default {
        components: {Button}
    }
</script>

<style lang="scss">

</style>
