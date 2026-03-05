export class Count {
    private constructor(public readonly value: number) {}

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
