import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';

export const resolveModulePageComponent = (name: string) => {
    if (name.includes('::')) {
        const [module, page] = name.split('::');

        return resolvePageComponent(
            `../../app-modules/${module}/resources/js/pages/${page}.vue`,
            import.meta.glob<DefineComponent>('../../app-modules/*/resources/js/pages/**/*.vue'),
        );
    } else {
        return resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue'));
    }
};
