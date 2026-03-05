<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { HelloText } from '@miraiportal/vue-hello';

defineProps<{
    message: string;
}>();
</script>

<template>
    <Head title="Hello" />
    <HelloText :name="message" />
</template>
