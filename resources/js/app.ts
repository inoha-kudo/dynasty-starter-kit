import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createApp, h } from 'vue';
import { resolveModulePageComponent } from './module';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolveModulePageComponent(name),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueQueryPlugin)
            // .provide(pingRepositoryKey, {
            //     ping: async () => ping(),
            // })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
