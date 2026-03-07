import { Count } from './count';

export class Counter {
    private constructor(public readonly count: Count) {}

    static create(count: number): Counter {
        return new Counter(Count.of(count));
    }

    increment(): Counter {
        return Counter.create(this.count.value + 1);
    }

    decrement(): Counter {
        return Counter.create(this.count.value - 1);
    }
}
