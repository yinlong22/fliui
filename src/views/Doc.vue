<template>
    <div>
        <TopNav/>
        <div class="content">
            <aside v-if="menuVisible">
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch/">switch组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button/">button组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog/">dialog组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs/">tabs组件</router-link>

                    </li>
                    <li>
                        <router-link to="/doc/toast/">toast组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/input/">input组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/popover/">popover组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/collapse/">collapse组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script lang="ts">
    import TopNav from '../components/TopNav.vue'
    import {inject, Ref} from 'vue'

    export default {
        components: {TopNav},
        setup() {
            const menuVisible = inject<Ref<boolean>>('menu')
            return {menuVisible}
        }
    }
</script>

<style lang="scss" scoped>
    aside {
        background: lightblue;
        width: 150px;

        > h2 {
            margin-bottom: 4px;
        }

        > ol {
            > li {
                padding: 4px 0;
            }
        }
        @media (max-width: 500px) {
            position: fixed;
            top: 0;
            left: 0;
            padding: 70px 16px 16px;
        }
    }
</style>
