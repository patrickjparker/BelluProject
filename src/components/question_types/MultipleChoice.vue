<template>
    <Question :question="question">
        <div class="flex flex-wrap justify-center">
            <Option v-for="option in options" :key="option.id" 
                :option="option" 
                :selected="option.id === selected" 
                @change="change(option.id)"/>
        </div>
    </Question>
</template>

<script>
import questionMixin from './questionMixin'

export default {
    name: 'MultipleChoice',
    mixins: [questionMixin],
    props: {
        question: String,
        options: Array,
        selected: String
    },
    model: {
        prop: 'selected',
        event: 'change'
    },
    methods: {
        change: function(id) {
            this.$emit('change', id)
        }
    },
}
</script>

<style>

</style>