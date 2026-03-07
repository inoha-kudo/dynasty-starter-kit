<script setup lang="ts">
import PingTest from '@dynasty/ping/components/PingTest.vue';
import { usePingPage } from '@dynasty/ping/composables/usePingPage';
import { Head } from '@inertiajs/vue3';
import { useMoonCounter } from '@miraiportal/vue-counter';

const { ping } = usePingPage();
const { count, increment, decrement, reset } = useMoonCounter();
</script>

<template>
    <Head title="Ping" />
    <div class="flex min-h-screen flex-col items-center gap-8 bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
        <PingTest :res="ping.data" :loading="ping.isFetching" :error="ping.error" @refetch="() => ping.fetch()" />

        <div class="flex flex-col items-center gap-4 rounded-xl border border-[#1b1b18]/10 p-8 dark:border-[#EDEDEC]">
            <div class="text-4xl font-bold">{{ count }}</div>
            <div class="flex gap-4">
                <button
                    @click="decrement"
                    class="rounded-lg bg-[#1b1b18] px-4 py-2 text-white transition hover:bg-[#1b1b18]/80 dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#EDEDEC]/80"
                >
                    Decrement
                </button>
                <button
                    @click="reset"
                    class="rounded-lg bg-[#1b1b18] px-4 py-2 text-white transition hover:bg-[#1b1b18]/80 dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#EDEDEC]/80"
                >
                    Reset
                </button>
                <button
                    @click="increment"
                    class="rounded-lg bg-[#1b1b18] px-4 py-2 text-white transition hover:bg-[#1b1b18]/80 dark:bg-[#EDEDEC] dark:text-[#1b1b18] dark:hover:bg-[#EDEDEC]/80"
                >
                    Increment
                </button>
            </div>
        </div>
    </div>
</template>
