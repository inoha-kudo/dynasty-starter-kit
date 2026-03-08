import { Counter } from '../../entities/counter';

test('create', () => {
    expect(() => Counter.create(0)).not.toThrow();
});

test('value', () => {
    const value = 0;

    expect(Counter.create(value).count.value).toBe(value);
});

test('increment', () => {
    expect(Counter.create(0).increment().count.value).toBe(1);
});

test('decrement', () => {
    expect(Counter.create(0).decrement().count.value).toBe(-1);
});
