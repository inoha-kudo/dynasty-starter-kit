// @ts-ignore
import wasm from 'mbt:sample-moon/moon/src/counter';
import { computed, shallowRef, triggerRef } from 'vue';

const instance = await wasm();
const { counter_get, counter_new, counter_increment, counter_decrement } = instance.exports;

export const useMoonCounter = () => {
    const counter = shallowRef(counter_new());

    return {
        count: computed(() => counter_get(counter.value)),
        increment: () => {
            counter_increment(counter.value);
            triggerRef(counter);
        },
        decrement: () => {
            counter_decrement(counter.value);
            triggerRef(counter);
        },
        reset: () => {
            counter.value = counter_new();
        },
    };
};
