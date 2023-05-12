<template>
    <div>
        <div class="text-lg font-medium">{{ question }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        question: String
    }
}
</script>

<style>

</style>