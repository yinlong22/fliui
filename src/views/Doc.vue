<template>
    <div class="layout">
        <TopNav class="nav"/>
        <div class="content">
            <aside v-if="menuVisible">
                <h2>FliUi</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch/">switch-开关</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button/">button-按钮</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog/">dialog-遮挡层</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/input/">input-输入框</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs/">tabs-导航栏</router-link>

                    </li>
                    <li>
                        <router-link to="/doc/toast/">toast-提示层</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/popover/">popover-弹出</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/collapse/">collapse-抽屉</router-link>
                    </li>
                </ol>
                <div v-if="isPhone">
                    <span><router-link to="/">主页</router-link></span>
                    <span><a href="https://gitee.com/Ylong22/avue-plugin/tree/master">文档</a></span>
                </div>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import TopNav from '../components/TopNav.vue'
    import {inject, Ref} from 'vue'

    export default {
        components: {TopNav},
        setup() {
            const width = document.documentElement.clientWidth
            const isPhone = width <= 500
            const menuVisible = inject<Ref<boolean>>('menu')
            return {menuVisible, isPhone}
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;

        > .nav {
            flex-shrink: 0;
        }

        > .content {
            flex-grow: 1;
            padding-top: 60px;
            padding-left: 156px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }
    }

    .content {
        display: flex;

        > aside {
            flex-shrink: 0;
        }

        > main {
            color: #FFFFFF;
            flex-grow: 1;
            padding: 16px;
            background: linear-gradient(145deg, #6464FA 0%, #4CA0FF 100%);
        }
    }

    aside {
        z-index: 2;
        border-radius: 0 0 12px 0;
        background: lightblue;
        width: 150px;
        position: fixed;
        top: 0;
        left: 0;
        padding: 70px 16px 16px;
        height: 100%;
        color: slategrey;

        > h2 {
            margin-bottom: 4px;
        }

        > ol {
            margin-bottom: 22px;

            > li {
                padding: 4px 0;
            }
        }

        > div:last-child {
            color: #fc765e;

            > span:last-child {
                margin-left: 20px;
            }
        }
    }

    main {
        overflow: auto;
        border-radius: 12px 0 0 0;
    }
</style>
