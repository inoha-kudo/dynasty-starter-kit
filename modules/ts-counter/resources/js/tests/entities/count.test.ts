import { expect, test } from 'vitest';
import { Count, Counter } from '../../entities';

test('can be incremented', () => {
    const counter = Counter.of(0);
    expect(counter.increment().count.value).toBe(1);
});

test('can be decremented', () => {
    const counter = Counter.of(1);
    expect(counter.decrement().count.value).toBe(0);
});

test('can be reset', () => {
    const initial = 10;
    // Counterクラスで新しいインスタンスを作ることでリセットを表現
    const resetCounter = Counter.of(initial);
    expect(resetCounter.count.value).toBe(10);
});

test('can be negative', () => {
    const count = Count.of(-1);
    expect(count.value).toBe(-1);
});

test('can decrement below zero', () => {
    const counter = Counter.of(0);
    expect(counter.decrement().count.value).toBe(-1);
});

test('must be an integer', () => {
    const invalidValue = 1.5;
    expect(() => Count.of(invalidValue)).toThrow(TypeError);
    expect(() => Count.of(invalidValue)).toThrow(Count.ERROR_MESSAGE_VALUE_NOT_INTEGER.replace('%s', invalidValue.toString()));
    expect(() => Count.of(0.1)).toThrow(TypeError);
});
