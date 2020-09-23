// @ts-ignore
import Dialog from './Dialog.vue'
import {createApp, h} from 'vue'

export const openDialog = (options) => {
    const {title, content,ok} = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const close = () => {
        div.remove()
        app.unmount(div)
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close()
                    }
                },ok
            }, {title, content})
        }
    })
    app.mount(div)
}
