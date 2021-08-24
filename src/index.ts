import { App } from "vue"
import plugin from "@/components/Prism.vue"
export default {
    install: (app: App, options: any) => {
        /* declare global component */
        app.component('Prism', plugin)
    }
}
