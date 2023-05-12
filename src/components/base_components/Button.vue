<template>
    <div @click="click" :class="['inline-block p-2 px-4 rounded-lg', displayClass]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        darkVariant: Boolean,
        disabled: Boolean
    },
    methods: {
        click: function() {
            if (!this.disabled) {
                this.$emit('click')
            } else {
                this.$emit('disabled-click')
            }
        }  
    },
    computed: {
        displayClass: function() {
            return this.disabled ? 'bg-gray-2 cursor-not-allowed' : 'bg-beige cursor-pointer'
        }
    }
}
</script>

<style>

</style>