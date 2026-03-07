import { Counter } from '@miraiportal/ts-counter';
import { computed, ref } from 'vue';

export function useCounter(initial = 0) {
    const counter = ref(Counter.create(initial));

    const value = computed(() => counter.value.count.value);

    const increment = () => (counter.value = counter.value.increment());
    const decrement = () => (counter.value = counter.value.decrement());
    const reset = () => (counter.value = Counter.create(initial));

    return { counter, value, increment, decrement, reset };
}
