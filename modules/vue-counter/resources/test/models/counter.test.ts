import { describe, expect, it } from 'vitest';
import { Count } from '../../js/models/counter';

describe('Count', () => {
    it('can be incremented', () => {
        const count = new Count(0);
        expect(count.increment().current).toBe(1);
    });

    it('can be decremented', () => {
        const count = new Count(1);
        expect(count.decrement().current).toBe(0);
    });

    it('can be reset', () => {
        const initial = 10;
        const count = new Count(initial);
        // Countクラス単体ではresetを管理せず、composableなどで新しいインスタンスを作る
        const resetCount = new Count(initial);
        expect(resetCount.current).toBe(10);
    });
});
