<script setup lang="ts">
import PingTest from '@dynasty/ping/components/PingTest.vue';
import { Head } from '@inertiajs/vue3';
import { usePingPage } from '@miraiportal/vue-ping';

const { pingResponse, isPingFetching, pingError, ping } = usePingPage();
</script>

<template>
    <Head title="Ping" />
    <div class="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
        <PingTest :res="pingResponse" :loading="isPingFetching" :error="pingError" @refetch="() => ping()" />
    </div>
</template>
