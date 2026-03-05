import { Count } from '../models/counter';
import { computed, ref } from 'vue';

export function useCounter(initial = 0) {
    const count = ref(new Count(initial));

    const value = computed(() => count.value.value);

    const increment = () => (count.value = count.value.increment());
    const decrement = () => (count.value = count.value.decrement());

    return { count, value, increment, decrement };
}
