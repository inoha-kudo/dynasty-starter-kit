import { expect, test } from 'vitest';
import { Counter } from '../../entities/counter';

test('can increment', () => {
    const counter = Counter.create(0);
    const incremented = counter.increment();
    expect(incremented.count.value).toBe(1);
    // Original counter should not be changed (immutability check)
    expect(counter.count.value).toBe(0);
});

test('can decrement', () => {
    const counter = Counter.create(10);
    const decremented = counter.decrement();
    expect(decremented.count.value).toBe(9);
});
