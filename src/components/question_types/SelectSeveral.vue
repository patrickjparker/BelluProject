<template>
    <Question :question="question">
        <div class="flex flex-wrap justify-center">
            <Option v-for="option in options" :key="option.id" :option="option" :selected="selectedArr.includes(option.id)" @change="change(option.id)"/>
        </div>
    </Question>
</template>

<script>
import QuestionMixin from './questionMixin'

export default {
    name: 'SelectSeveral',
    mixins: [QuestionMixin],
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
            let temp = [...this.selectedArr]
            if (temp.includes(id)) {
                temp.splice(temp.indexOf(id), 1)
            } else {
                temp.push(id)
            }
            this.$emit('change', temp.join(','))
        }
    },
    computed: {
        selectedArr: function() {
            if (!this.selected) return []
            return this.selected.split(',')
        }
    }
}
</script>

<style>

</style>