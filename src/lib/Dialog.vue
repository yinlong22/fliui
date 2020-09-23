<template>
    <div v-if="visible">
        <Teleport to="body">
            <div class="fli-dialog-overlay" @click="onclickOverlay"></div>
            <div class="fli-dialog-wrapper">
                <div class="fil-dialog">
                    <header>
                        <slot name="title"/>
                        <img src="../assets/cancel.svg" alt="" @click="close">
                    </header>
                    <hr>
                    <main>
                        <slot name="content"/>
                    </main>
                    <hr>
                    <footer>
                        <Button background="red" @click="ok">Ok</Button>
                        <Button background="black" @click="close">Cancel</Button>
                    </footer>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script lang="ts">
    import Button from './Button.vue'

    export default {
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            closeOnClickOverlay: {
                type: Boolean,
                default: true
            },
            ok: {
                type: Function
            }
        },
        components: {Button},
        setup(props, context) {
            const close = () => {
                context.emit('update:visible', false)
            }
            const onclickOverlay = () => {
                if (props.closeOnClickOverlay) {
                    close()
                }
            }
            const ok = () => {
                if (props.ok?.() !== false) {
                    close()
                }
            }
            return {close, onclickOverlay, ok}
        }
    }
</script>

<style lang="scss">
    $radius: 4px;
    $border-color: #d9d9d9;
    .fli-dialog {
        &-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .4);
            z-index: 11;
        }

        &-wrapper {
            background: white;
            color: #666666;
            border-radius: $radius;
            box-shadow: 0 0 3px fade_out(black, 0.5);
            min-width: 15em;
            max-width: 90%;
            width: 334px;
            border: 1px solid;
            height: auto;
            position: absolute;
            left: 6%;
            top: 25%;
            z-index: 15;

            header {
                display: flex;
                margin: 7px;
                justify-content: space-between;

                img {
                    width: 16px;
                    height: 33px;
                }
            }

            hr {
                margin-bottom: 10px;
            }

            main {
                margin-left: 10px;
            }

            footer {
                margin-left: 202px;
                margin-bottom: 10px;
            }
        }
    }

</style>
