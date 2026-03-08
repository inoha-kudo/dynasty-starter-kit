import { Counter } from '../../entities/counter';

test('create', () => {
    expect(() => Counter.create(0)).not.toThrow();
});

test('value', () => {
    const value = 0;

    expect(Counter.create(value).count.value).toBe(value);
});

test('increment', () => {
    const value = 0;

    expect(Counter.create(value).increment().count.value).toBe(value + 1);
});

test('decrement', () => {
    const value = 0;

    expect(Counter.create(value).decrement().count.value).toBe(value - 1);
});
