import {createWebHashHistory, createRouter} from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Doc from './views/Doc.vue'
// @ts-ignore
import SwitchDemo from './components/SwitchDemo.vue'
// @ts-ignore
import ButtonDemo from './components/ButtonDemo.vue'
// @ts-ignore
import DialogDemo from './components/DialogDemo.vue'
// @ts-ignore
import TabsDemo from './components/TabsDemo.vue'
// @ts-ignore
import DocDemo from './components/DocDemo.vue'
// @ts-ignore
import InputDemo from './components/InputDemo.vue'
// @ts-ignore
import ToastDemo from './components/ToastDemo.vue'
// @ts-ignore
import PopoverDemo from './components/PopoverDemo.vue'
// @ts-ignore
import CollapseDemo from './components/CollapseDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc',
            component: Doc,
            children: [
                {path: '', component: DocDemo},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo},
                {path: 'input', component: InputDemo},
                {path: 'toast', component: ToastDemo},
                {path: 'popover', component: PopoverDemo},
                {path: 'collapse', component: CollapseDemo}
            ],
        },
    ],
})

