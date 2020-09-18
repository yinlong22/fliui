<template>
    <div class="topNav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>指南</li>
            <li>投稿</li>
        </ul>
        <span class="toggleAside" v-if="isHome"><img src="../assets/menu.svg" @click="toggleMenu" alt=""></span>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from 'vue'

    export default {
        setup() {
            const menuVisible = inject<Ref<boolean>>('menu')
            let isHome = location.hash !== "#/";
            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value
            }
            return {toggleMenu,isHome}
        }
    }
</script>

<style lang="scss" scoped>
    .topNav {
        display: flex;
        padding: 16px;
        font-weight: bold;
        color: #FFFFFF;
        background: linear-gradient(135deg, #FF5773, #fc765e);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
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

        > .toggleAside {
            > img {
                width: 24px;
                height: 24px;
            }

            position: absolute;
            left: 16px;
            top: 35%;
            display: none;
        }

        @media (max-width: 500px) {
            > .toggleAside {
                display: inline-block
            }
            > .menu {
                display: none
            }
            > .logo {
                margin: 0 auto
            }
        }
    }
</style>
