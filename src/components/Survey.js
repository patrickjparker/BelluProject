const questionTypes = {
    MULTIPLE_CHOICE: 'MultipleChoice',
    SELECT_SEVERAL: 'SelectSeveral',
    SCALE: 'Scale'
}

const survey = [{
    id: "1",
    question: "Select the hair type that most closely resembles your hair.",
    options: [{
        text: "Straight",
        id: "Straight"
    }, {
        text: "Wavy",
        id: "Wavy"
    }, {
        text: "Curly",
        id: "Curly"
    }, {
        text: "Coily",
        id: "Coily"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "hairReseblance"
},{
    id: "2",
    question: "I would like my hair to be:",
    options: [{
        text: "Smoother",
        id: "Smoother"
    }, {
        text: "Curlier",
        id: "Curlier"
    }, {
        text: "Less frizzy",
        id: "Less frizzy"
    }, {
        text: "Longer",
        id: "Longer"
    }, {
        text: "Less dry",
        id: "Less dry"
    }, {
        text: "Less greasy",
        id: "Less greasy" 
    }, {
        text: "Less prone to split ends",
        id: "Less prone to split ends"
    }, {
        text: "More voluminous",
        id: "More voluminous"
    }, {
        text: "Healthier overall",
        id: "Healthier overall"
    }],
    type: questionTypes.SELECT_SEVERAL,
    data: "hairGoals"
},{
    id: "3",
    question: "In general, your scalp is:",
    options: [{
        text: "Dry",
        id: "Dry"
    }, {
        text: "Average",
        id: "Average"
    }, {
        text: "Greasy",
        id: "Greasy"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "scalpType"
},{
    id: "4",
    question: "In general, your hair is:",
    options: [{
        text: "Dry",
        id: "Dry"
    }, {
        text: "Average",
        id: "Average"
    }, {
        text: "Greasy",
        id: "Greasy"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "hairType"
},{
    id: "5",
    question: "Your hair is:",
    options: [{
        text: "Never frizzy",
        id: "Never frizzy"
    }, {
        text: "Sometimes frizzy",
        id: "Sometimes frizzy"
    }, {
        text: "Usually frizzy",
        id: "Usually frizzy"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "frizz"
},{
    id: "6",
    question: "How thick is your hair? Rub a single strand of hair between your finger. What does it feel like?",
    options: [{
        high: "Thick (Feels like a wire)",
        low: "Thin (I can barely feel it)",
        num: ['1','2','3','4','5']
    }],
    type: questionTypes.SCALE,
    data: "hairThickness"
}]

module.exports = {
    survey,
    questionTypes
}