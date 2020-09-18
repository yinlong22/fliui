<template>
    <div>
        <TopNav/>
        <div class="banner">
            <h1>gungunUI</h1>
            <h2>一个厉害的 ui 框架</h2>
            <p class="actions">
                <a href="https://github.com">GitHub</a>
                <router-link to="/doc">start</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import TopNav from '../components/TopNav.vue'

    export default {
        components: {TopNav}
    }
</script>

<style lang="scss" scoped>
.banner{
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(90deg, #6464FA 0%, #4CA0FF 100%);
    > .actions{
        padding: 8px 0;
        a{
            background: #fff;
            display: inline-block;
            $h: 28px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 8px;
            margin: 0 10px;
        }
    }
}
</style>
