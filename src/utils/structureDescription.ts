function structureDescription(inputString: string) {
    const structuredContent = structurePredictionAndTips(inputString);

    // Get structured tips
    const structuredTips = structureTips(structuredContent.tips);

    console.log('Prediction:', structuredContent.prediction);
    console.log('Structured Tips:', structuredTips);
}

function structurePredictionAndTips(text: string) {
    // Split the string at 'Prediction:' and 'Tips:'
    const sections = text.split(/(Prediction:|Tips:)/).filter(Boolean);

    // Find the index of each section
    const predictionIndex = sections.indexOf('Prediction:');
    const tipsIndex = sections.indexOf('Tips:');

    return {
        prediction: sections.slice(predictionIndex + 1, tipsIndex).join('').trim(),
        tips: sections.slice(tipsIndex + 1).join('').trim()
    };
}

function structureTips(tipsText: string) {
    // Split the tips based on the numbering (1., 2., etc.) using a regular expression
    const tipsArray = tipsText.split(/\d+\.\s/).filter(Boolean);  // Remove empty strings from the array

    // Map the array to objects with 'number' and 'description'
    return tipsArray.map((tip, index) => ({
        number: index + 1,
        description: tip.trim()
    }));
}


export default structureDescription;