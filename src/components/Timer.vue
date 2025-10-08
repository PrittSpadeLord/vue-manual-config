<template>
    <div class="container">
        <div class="time-display">
            <span class="segmented">{{ displayTime }}</span><span class="segmented-small">{{ amPm }}</span>
        </div>
        <div class="background-display">
            <span class="segmented-faded">88:88:88</span>
        </div>
    </div>
    
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import onAnimationFrame from '../hooks/onAnimationFrame'
    import { padZeros, to12Hour, getAmPm } from '../utils/utils'

    const getDisplayTime = () => {
        return `${padZeros(to12Hour((new Date().getHours())))}:${padZeros((new Date().getMinutes()))}:${padZeros((new Date().getSeconds()))}`
    }

    const displayTime = ref(getDisplayTime())

    const amPm = ref(getAmPm((new Date().getHours())))

    onAnimationFrame(() => {
        displayTime.value = getDisplayTime()
        amPm.value = getAmPm((new Date().getHours()))
    })
</script>

<style>
    @font-face {
        font-family: 'DSEG7';
        src: url('../fonts/DSEG7Classic-Regular.woff2') format('woff2'), url('../fonts/DSEG7Classic-Regular.woff') format('woff');
    }

    @font-face {
        font-family: 'DSEG14';
        src: url('../fonts/DSEG14Classic-Regular.woff2') format('woff2'), url('../fonts/DSEG14Classic-Regular.woff') format('woff');
    }

    .container {
        margin: 2rem;
    }

    .segmented {
        font-size: 4rem;
        font-family: 'DSEG7';
    }

    .segmented-faded {
        font-size: 4rem;
        font-family: 'DSEG7';
        color: #e5e5e5;
    }
    
    .segmented-small {
        font-size: 2rem;
        font-family: 'DSEG14';
        margin-left: 2rem;
    }

    .time-display {
        position: absolute;
    }
</style>