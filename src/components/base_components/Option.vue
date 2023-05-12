<template>
    <div @click="change" @mouseover="hover = true" @mouseleave="hover = false"
        :class="['card p-4 m-4 rounded-lg cursor-pointer w-40 flex items-center justify-center', 
            (this.selected ? 'bg-blue-2' : 'bg-accent-2'),
            {'shadow': hover}]">
        <span>{{ option.text }}</span>
    </div>
</template>

<script>
export default {
    name: 'Option',
    props: {
        option: Object,
        selected: Boolean
    },
    methods: {
        change: function() {
            this.$emit('change')
        }
    },
    data: function() {
        return {
            hover: false
        }
    },
    computed: {
        
    }
}
</script>

<style scoped>
.shadow {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
}
</style>