<script setup lang="ts">
import PingTest from '@dynasty/ping/components/PingTest.vue';
import { usePingPage } from '@dynasty/ping/composables/usePingPage';
import { Head } from '@inertiajs/vue3';

const { ping } = usePingPage();
</script>

<template>
    <Head title="Ping" />
    <div class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
        <PingTest :res="ping.data" :loading="ping.isFetching" :error="ping.error" @refetch="() => ping.fetch()" />
    </div>
</template>
