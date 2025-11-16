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
        src: url('../fonts/DSEG7Classic-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'DSEG14';
        src: url('../fonts/DSEG14Classic-Regular.woff2') format('woff2');
    }

    .container {
        padding: 2vw;
        background-color: rgb(30, 66, 29);
        border: 4px solid rgb(65, 174, 19);
        border-radius: 1.25vw;
        width: 26.75vw;
        justify-content: left;
        align-items: center;
    }

    .segmented {
        font-size: 4vw;
        font-family: 'DSEG7';
        color: rgb(93, 255, 25);
    }

    .segmented-faded {
        font-size: 4vw;
        font-family: 'DSEG7';
        color: rgb(50, 85, 53);
    }
    
    .segmented-small {
        font-size: 2vw;
        font-family: 'DSEG14';
        margin-left: 2vw;
        color: rgb(93, 255, 25);
    }

    .time-display {
        position: absolute;
    }
</style>