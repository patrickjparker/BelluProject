<template>
    <div class="flex justify-center p-12">
        <div class="w-3/4 max-w-2xl flex flex-col justify-center items-center">
            <transition name="main-fade" mode="out-in">
                <component 
                    class="max-w-2xl"
                    :key="currentQuestion"
                    :is="COMPONENT_MAP[question.type]"
                    :question="question.question" 
                    :options="question.options"
                    v-model="response[question.data]"/>
            </transition>
            <div class="flex justify-between w-full p-4 relative">
            <Button v-if="currentQuestion !== 0"
                @click="currentQuestion--;step();">Back</Button>
            <div v-else></div>
            <transition name="fade">
                <span v-if="showErrorMessage" class="absolute top-0 right-2 text-red-0 text-xs">*Please select an option</span>
            </transition>
            <Button v-if="currentQuestion !== survey.length -1" :disabled="!response[question.data]"
                @click="currentQuestion++;step();"
                @disabled-click="badButtonClick">Next</Button>
            <Button v-else @click="csvDownload(csvOptions)" 
                :disabled="!response[question.data]"
                @disabled-click="badButtonClick">
                Download Response
            </Button>
        </div>
    </div>
</div>
</template>

<script>
// Only allows one layer
import csvDownload from 'json-to-csv-export'

import Button from './base_components/Button.vue'
import MultipleChoice from './question_types/MultipleChoice.vue'
import SelectSeveral from './question_types/SelectSeveral.vue'
import Scale from './question_types/Scale.vue'

import { survey, questionTypes } from './Survey'

const COMPONENT_MAP = {
    MultipleChoice,
    SelectSeveral,
    Scale
}

const response = survey.reduce((acc, question) => {
    acc[question.data] = ''
    return acc
}, {});

export default {
    name: 'Survey',
    components: {
        Button,
        MultipleChoice,
        Scale
    },
    data: function() {
        return {
            COMPONENT_MAP,
            survey,
            questionTypes,
            currentQuestion: 0,
            response,
            showErrorMessage: false
        }
    },
    methods: {
        csvDownload,
        badButtonClick: function() {
            this.showErrorMessage = true;
            
            // Reset the error message after 3 seconds
            setTimeout(() => {
            this.showErrorMessage = false;
            }, 3000);
        },
        step: function() {

        }
    },
    computed: {
        csvOptions: function() {
            return {
                data: [this.response],
                filename: 'survey-response.csv',
                delimiter: ','
            }
        },
        question: function() {
            return this.survey[this.currentQuestion]
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-fade-enter-active,
.main-fade-leave-active {
  transition: opacity 0.4s ease;
}

.main-fade-enter,
.main-fade-leave-to {
  opacity: 0;
}
</style>