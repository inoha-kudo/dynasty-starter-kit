import wasm from 'mbt:sample-moon/moon/src/counter';
import { computed, shallowRef, triggerRef } from 'vue';

const instance = await wasm();
const { counter_get, counter_new, counter_increment, counter_decrement } = instance.exports;

export const useMoonCounter = () => {
    // MoonBit のインスタンスを生成 (counter_new)
    const counter = shallowRef(counter_new());

    // 初期値の反映（MoonBit の実装に合わせて初期値を設定）
    // for (let i = 0; i < initialCount; i++) {
    //     counter_increment(counter.value);
    // }

    const count = computed(() => counter_get(counter.value));

    return {
        count,
        increment: () => {
            counter_increment(counter.value);
            // 内部状態が変更されたことを Vue に通知
            triggerRef(counter);
        },
        decrement: () => {
            counter_decrement(counter.value);
            triggerRef(counter);
        },
        reset: () => {
            counter.value = counter_new();
            // for (let i = 0; i < initialCount; i++) {
            //     counter_increment(counter.value);
            // }
        },
    };
};
