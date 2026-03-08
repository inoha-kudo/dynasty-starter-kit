import { Count } from '../../entities/count';

test('of', () => {
    expect(() => Count.of(0)).not.toThrow(TypeError);
});

test('of with non-integer value', () => {
    const value = 0.1;

    expect(() => Count.of(value)).toThrow(new TypeError(Count.ERROR_MESSAGE_VALUE_NOT_INTEGER.replace('%s', value.toString())));
});

test('value', () => {
    const value = 0;

    expect(Count.of(value).value).toBe(value);
});
