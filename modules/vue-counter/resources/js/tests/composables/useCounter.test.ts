import { useCounter } from '../../composables/useCounter';

describe('useCounter', () => {
    test('count', () => {
        const value = 0;

        const { count } = useCounter(value);

        expect(count.value).toBe(value);
    });

    test('increment', () => {
        const value = 0;

        const { count, increment } = useCounter(value);

        increment();

        expect(count.value).toBe(value + 1);
    });

    test('decrement', () => {
        const value = 0;

        const { count, decrement } = useCounter(value);

        decrement();

        expect(count.value).toBe(value - 1);
    });

    test('reset', () => {
        const value = 1;

        const { count, increment, reset } = useCounter(value);

        increment();

        expect(count.value).toBe(value + 1);

        reset();

        expect(count.value).toBe(value);
    });
});
