<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { HelloContent } from '@miraiportal/vue-hello';

defineProps<{
    message: string;
}>();
</script>

<template>
    <Head title="Hello" />
    <HelloContent :message="message" />
</template>
