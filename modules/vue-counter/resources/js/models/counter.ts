export class Count {
    constructor(private readonly _value: number = 0) {}

    get value() {
        return this._value;
    }

    increment() {
        return new Count(this._value + 1);
    }

    decrement() {
        return new Count(this._value - 1);
    }
}
