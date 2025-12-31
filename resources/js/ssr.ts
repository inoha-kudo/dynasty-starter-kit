import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, DefineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer(
    (page) =>
        createInertiaApp({
            page,
            render: renderToString,
            title: (title) => (title ? `${title} - ${appName}` : appName),
            resolve: (name) => {
                if (name.includes('::')) {
                    const [module, page] = name.split('::');

                    return resolvePageComponent(
                        `../../vendor/dynasty/${module}/resources/js/pages/${page}.vue`,
                        import.meta.glob<DefineComponent>('../../vendor/dynasty/*/resources/js/pages/**/*.vue'),
                    );
                } else {
                    return resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue'));
                }
            },
            setup: ({ App, props, plugin }) => createSSRApp({ render: () => h(App, props) }).use(plugin),
        }),
    { cluster: true },
);
