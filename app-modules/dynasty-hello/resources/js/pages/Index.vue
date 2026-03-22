<script setup lang="ts">
import HelloContent from '@dynasty/hello/components/HelloContent.vue';
import { Head } from '@inertiajs/vue3';

defineProps<{
    message: string;
}>();
</script>

<template>
    <Head title="Hello" />
    <HelloContent :message="message" />
</template>
