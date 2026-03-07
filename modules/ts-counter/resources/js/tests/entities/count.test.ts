import { expect, test } from 'vitest';
import { Count } from '../../entities/count';

test('can be negative', () => {
    const count = Count.of(-1);
    expect(count.value).toBe(-1);
});

test('must be an integer', () => {
    const invalidValue = 1.5;
    expect(() => Count.of(invalidValue)).toThrow(TypeError);
    expect(() => Count.of(invalidValue)).toThrow(Count.ERROR_MESSAGE_VALUE_NOT_INTEGER.replace('%s', invalidValue.toString()));
    expect(() => Count.of(0.1)).toThrow(TypeError);
});
