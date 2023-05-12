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
},{
    id: "7",
    question: "How long does it take for your hair to air dry?",
    options: [{
        text: "Less than 2 hours",
        id: "Less than 2 hours"
    }, {
        text: "More than 2 hours",
        id: "More than 2 hours"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "airDryTime"
},{
    id: "8",
    question: "How long is your hair?",
    options: [{
        text: "Shorter than shoulder length",
        id: "Shorter than shoulder length"
    }, {
        text: "About shoulder length",
        id: "About shoulder length"
    }, {
        text: "Longer than shoulder length",
        id: "Longer than shoulder length"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "hairLength"
},{
    id: "9",
    question: "On average, how much does your hair grow in a month?",
    options: [{
        text: "Less than 1/2 inch",
        id: "Less than 1/2 inch"
    }, {
        text: "About 1/2 inch",
        id: "About 1/2 inch"
    }, {
        text: "More than 1/2 inch",
        id: "More than 1/2 inch"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "hairGrowth"
},{
    id: "10",
    question: "Have you ever had any chemical services done to your hair? (bleach, color, perm, etc.)",
    options: [{
        text: "Yes",
        id: "Yes"
    }, {
        text: "No",
        id: "No"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "chemicalServices"
},{
    id: "11",
    question: "How often do you bleach your hair?",
    options: [{
        text: "Never",
        id: "Never"
    }, {
        text: "Once a year or less",
        id: "Once a year or less"
    }, {
        text: "2 to 3 times a year",
        id: "2 to 3 times a year"
    }, {
        text: "Every 2 to 3 months",
        id: "Every 2 to 3 months"
    }, {
        text: "At least once a month",
        id: "At least once a month"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "bleachFrequency"
},{
    id: "11",
    question: "How often do you color your hair?",
    options: [{
        text: "Never",
        id: "Never"
    }, {
        text: "Once a year or less",
        id: "Once a year or less"
    }, {
        text: "2 to 3 times a year",
        id: "2 to 3 times a year"
    }, {
        text: "Every 2 to 3 months",
        id: "Every 2 to 3 months"
    }, {
        text: "At least once a month",
        id: "At least once a month"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "colorFrequency"
},{
    id: "12",
    question: "How often do you use heat on your hair? (blow dryer, straightener, curling iron, etc.)",
    options: [{
        text: "Never",
        id: "Never"
    }, {
        text: "No more than once per month",
        id: "No more than once per month"
    }, {
        text: "A few times per month",
        id: "A few times per month"
    }, {
        text: "About once a week",
        id: "About once a week"
    }, {
        text: "Several times a week",
        id: "Several times a week"
    },{
        text: "Every day",
        id: "Every day"
    }],
    type: questionTypes.MULTIPLE_CHOICE,
    data: "heatFrequency"
}]

module.exports = {
    survey,
    questionTypes
}