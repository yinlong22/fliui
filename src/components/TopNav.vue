<template>
    <div class="topNav">
        <div class="logo"><img src="../assets/F.svg" alt=""><img src="../assets/L.svg" alt=""><img src="../assets/i.svg" alt=""></div>
        <ul class="menu">
            <li><router-link to="/">主页</router-link></li>
            <li><a href="https://gitee.com/Ylong22/avue-plugin/tree/master">文档</a></li>
        </ul>
        <span class="toggleAside" v-if="isHome">
            <img v-if="menuVisible" src="../assets/menu.svg" @click="toggleMenu" alt="">
            <img v-else src="../assets/menu off.svg" @click="toggleMenu" alt="">
        </span>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from 'vue'

    export default {
        setup() {
            const menuVisible = inject<Ref<boolean>>('menu')
            let isHome = location.hash !== '#/'
            const toggleMenu = () => {
                menuVisible.value = !menuVisible.value
            }
            return {toggleMenu, isHome, menuVisible}
        }
    }
</script>

<style lang="scss" scoped>
    .topNav {
        display: flex;
        padding: 16px;
        font-weight: bold;
        color: #FFFFFF;
        background: linear-gradient(145deg, #FF5773, #fc765e);
        position: fixed;
        top: 0;
        height: 57px;
        left: 0;
        width: 100%;
        z-index: 10;
        justify-content: center;
        align-items: center;

        > .logo {
            position: relative;
            max-width: 6em;
            margin-right: auto;
            img:first-child{
                position: absolute;
                top: -18px;
                left: -13px;
                width: 38px;
                height: 38px;
            }
            img:nth-child(2){
                position: absolute;
                top: -18px;
                left: -2px;
                width: 38px;
                height: 38px;
            }
            img:last-child{
                position: absolute;
                top: -9px;
                left: 18px;
                width: 15px;
                height: 15px;
            }
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
                margin: 0 auto;
            }
        }
    }
</style>
