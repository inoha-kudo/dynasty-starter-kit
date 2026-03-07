import { Count } from './count';

export class Counter {
    private constructor(public readonly count: Count) {}

    static of(value: number): Counter {
        return new Counter(Count.of(value));
    }

    increment(): Counter {
        return Counter.of(this.count.value + 1);
    }

    decrement(): Counter {
        return Counter.of(this.count.value - 1);
    }
}
