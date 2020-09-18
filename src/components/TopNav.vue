<template>
    <div class="topNav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
        <span class="toggleAside"><img src="../assets/menu.svg" @click="toggleMenu" alt=""></span>
    </div>
</template>

<script lang="ts">
    import { inject , Ref} from 'vue'
    export default {
        setup() {
            const menuVisible = inject<Ref<boolean>>('menu')
            const toggleMenu = ()=>{
                menuVisible.value = !menuVisible.value
            }
            return {toggleMenu}
        }
    }
</script>

<style lang="scss" scoped>
    .topNav {
        display: flex;
        padding: 16px;
        background: linear-gradient(135deg, #FF5773, #fc765e);
        position: relative;
        z-index: 10;
        justify-content: center;
        align-items: center;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }

        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1em;
            }
        }
        > .toggleAside{
            > img{
                width: 24px;
                height: 24px;
            }
            position: absolute;
            left: 16px;
            top: 35%;
            display: none;
        }
        @media (max-width: 500px) {
            > .toggleAside{display: inline-block}
            > .menu{display: none}
            > .logo{margin: 0 auto}
        }
    }
</style>
