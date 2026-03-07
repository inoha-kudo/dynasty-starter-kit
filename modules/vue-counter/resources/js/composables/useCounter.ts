import { Count } from '@miraiportal/ts-counter';
import { computed, ref } from 'vue';

export function useCounter(initial = 0) {
    const count = ref(Count.of(initial));

    const value = computed(() => count.value.value);

    const increment = () => (count.value = count.value.increment());
    const decrement = () => (count.value = count.value.decrement());
    const reset = () => (count.value = Count.of(initial));

    return { count, value, increment, decrement, reset };
}
