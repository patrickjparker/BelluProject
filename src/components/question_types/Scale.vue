<template>
    <Question :question="question">
        <div class="flex flex-wrap justify-center">
            <span class="max-w-12 p-4">{{ option.low }}</span>
            <span :class="['p-3 m-1 rounded-lg', {'bg-blue-2': selected === opt}]" v-for="opt in option.num" :key="opt"
                @click="$emit('change', opt)">
                {{ opt }}
            </span>
            <span class="max-w-12 p-4">{{ option.high }}</span>
        </div>
    </Question>
</template>

<script>
import questionMixin from './questionMixin'

export default {
    name: 'Scale',
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
        },
    },
    computed: {
        option: function() {
            return this.options[0]
        },
    }
}
</script>

<style>

</style>