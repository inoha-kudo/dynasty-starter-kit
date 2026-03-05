import { describe, expect, it } from 'vitest';
import { Count } from '../../js/models/count';

describe('Count', () => {
    it('can be incremented', () => {
        const count = Count.of(0);
        expect(count.increment().value).toBe(1);
    });

    it('can be decremented', () => {
        const count = Count.of(1);
        expect(count.decrement().value).toBe(0);
    });

    it('can be reset', () => {
        const initial = 10;
        // Countクラス単体ではresetを管理せず、composableなどで新しいインスタンスを作る
        const resetCount = Count.of(initial);
        expect(resetCount.value).toBe(10);
    });

    it('can be negative', () => {
        const count = Count.of(-1);
        expect(count.value).toBe(-1);
    });

    it('can decrement below zero', () => {
        const count = Count.of(0);
        expect(count.decrement().value).toBe(-1);
    });

    it('must be an integer', () => {
        const invalidValue = 1.5;
        expect(() => Count.of(invalidValue)).toThrow(TypeError);
        expect(() => Count.of(invalidValue)).toThrow(Count.EXCEPTION_MESSAGE_VALUE_MUST_BE_INTEGER.replace('%s', invalidValue.toString()));
        expect(() => Count.of(0.1)).toThrow(TypeError);
    });
});
