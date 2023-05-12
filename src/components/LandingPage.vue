<template>
    <div class="flex flex-col justify-center items-center p-12">
        <img src="../assets/logo_and_name.png" class="logo"/>
        <p class="max-w-lg p-8">We want to help you reach your hair goals.<br>Take the survey now to get personalized recommendations.</p>
        <Button @click="$emit('move')">Start Survey</Button>
    </div>
</template>

<script>
import Button from './base_components/Button.vue'

export default {
    name: 'LandingPage',
    components: {
        Button
    },
}
</script>

<style scoped>
.logo {
    width: auto;
    height: auto;
    max-width: 400px;
    max-height: 200px;
}

</style>