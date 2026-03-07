import { Counter } from '@miraiportal/ts-counter';
import { computed, ref } from 'vue';

export const useCounter = (initialCount = 0) => {
    const counter = ref(Counter.create(initialCount));

    return {
        count: computed(() => counter.value.count.value),
        increment: () => (counter.value = counter.value.increment()),
        decrement: () => (counter.value = counter.value.decrement()),
        reset: () => (counter.value = Counter.create(initialCount)),
    };
};
