<template>
    <div>
        <TopNav/>
        <div class="banner">
            <h1>fliUi 2.0</h1>
            <h2>网站快速成型的 ui 框架</h2>
            <p class="actions">
                <a href="https://gitee.com/Ylong22/avue-plugin">GitHub</a>
                <router-link to="/doc">Start</router-link>
            </p>
            <ul class="features">
                <li><img src="../assets/vue3.svg" alt=""><span>基于Vue3</span></li>
                <li><img src="../assets/typescript.svg" alt=""><span>基于Typescript</span></li>
                <li><img src="../assets/easy.svg" alt=""><span>代码易读</span></li>
            </ul>
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
    .banner {
        color: #fff;
        margin-top: 60px;
        padding: 100px 0;
        height: 92vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(145deg, #6464FA 0%, #4CA0FF 100%);
        overflow: hidden;

        > .actions {
            padding: 8px 0;
            position: relative;
            a {
                background: #02bcb0;
                color: #fff;
                display: inline-block;
                height: 28px;
                border-radius: 4px;
                padding: 2px 8px;
                margin: 0 10px;
            }
            &.actions::before {
                content: '';
                position: absolute;
                display: block;
                bottom: -834px;
                right: -1500px;
                height: 900px;
                width: 2000px;
                border-radius: 57%;
                background: linear-gradient(145deg, #6464FA 0%, #02bcb0 100%);
            }
            &.actions::after {
                content: '';
                position: absolute;
                display: block;
                bottom: -891px;
                right: -270px;
                height: 900px;
                width: 2000px;
                border-radius: 57%;
                background: linear-gradient(145deg, #6464FA 0%, #02bcb0 100%);
            }
        }

        > .features {
            margin-top: 32px;
            display: inline-flex;
            z-index: 2;
            li {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin-right: 32px;
                margin-left: 32px;

                img {
                    width: 64px;
                    height: 64px;
                }

                span {
                    margin-left: 10px;
                }
            }
        }

        @media (max-width: 500px) {
            > .features {
                margin-top: 32px;
                display: inline-block;

                li {
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 100px;
                    margin-left: 100px;

                    img {
                        width: 52px;
                        height: 52px;
                    }

                    span {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>
