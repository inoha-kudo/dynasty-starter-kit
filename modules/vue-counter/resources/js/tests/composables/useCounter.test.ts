import { expect, test } from 'vitest';
import { useCounter } from '../../composables/useCounter';

test('initial value can be set', () => {
    const { count } = useCounter(5);
    expect(count.value).toBe(5);
});

test('default initial value is 0', () => {
    const { count } = useCounter();
    expect(count.value).toBe(0);
});

test('can increment', () => {
    const { count, increment } = useCounter(0);
    increment();
    expect(count.value).toBe(1);
});

test('can decrement', () => {
    const { count, decrement } = useCounter(10);
    decrement();
    expect(count.value).toBe(9);
});

test('can reset', () => {
    const { count, increment, reset } = useCounter(5);
    increment();
    expect(count.value).toBe(6);
    reset();
    expect(count.value).toBe(5);
});

test('counter ref is NOT exposed', () => {
    const result = useCounter(0);
    expect(result).not.toHaveProperty('counter');
});
