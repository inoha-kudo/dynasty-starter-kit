export class Count {
    static readonly ERROR_MESSAGE_VALUE_NOT_INTEGER = 'The provided value (%s) must be an integer.';

    private constructor(public readonly value: number) {
        if (!Number.isInteger(value)) {
            throw new TypeError(Count.ERROR_MESSAGE_VALUE_NOT_INTEGER.replace('%s', value.toString()));
        }
    }

    static of(value: number): Count {
        return new Count(value);
    }
}
