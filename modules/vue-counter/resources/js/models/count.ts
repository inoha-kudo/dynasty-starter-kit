export class Count {
    public static readonly EXCEPTION_MESSAGE_VALUE_MUST_BE_INTEGER = 'The provided value (%s) must be an integer.';

    private constructor(public readonly value: number) {
        if (!Number.isInteger(value)) {
            throw new TypeError(Count.EXCEPTION_MESSAGE_VALUE_MUST_BE_INTEGER.replace('%s', value.toString()));
        }
    }

    static of(value: number): Count {
        return new Count(value);
    }

    increment(): Count {
        return Count.of(this.value + 1);
    }

    decrement(): Count {
        return Count.of(this.value - 1);
    }
}
