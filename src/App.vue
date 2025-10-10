<template>
    <div class="centered">
        <Timer></Timer>
    </div>
</template>

<script setup lang="ts">
    import Timer from './components/Timer.vue';
</script>

<style lang="css">
    .centered {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100svh;
    }
</style>