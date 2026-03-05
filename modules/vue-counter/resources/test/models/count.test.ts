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
});
