<script setup lang="ts">
defineProps<{
    res?: string | null;
    loading?: boolean;
    error?: any;
}>();

defineEmits<{
    (e: 'refetch'): void;
}>();
</script>

<template>
    <div class="rounded-lg border border-neutral-200 p-4 shadow-sm dark:border-neutral-800">
        <h2 class="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">API Ping Test</h2>

        <div v-if="loading" class="flex animate-pulse space-x-4">
            <div class="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800"></div>
        </div>

        <div v-else-if="error" class="text-red-500">Error: {{ error }}</div>

        <div v-else class="text-neutral-600 dark:text-neutral-400">
            Response: <span class="font-mono font-bold text-neutral-900 dark:text-neutral-100">{{ res }}</span>
        </div>

        <button
            @click="$emit('refetch')"
            :disabled="loading"
            class="mt-4 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
            Retry
        </button>
    </div>
</template>
