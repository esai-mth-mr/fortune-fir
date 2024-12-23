

const structurePredictionAndTips = (text: string) => {
    const sections = text.split(/(Prediction:|Tips:)/).filter(Boolean);

    const predictionIndex = sections.indexOf('Prediction:');
    const tipsIndex = sections.indexOf('Tips:');

    return {
        prediction: sections.slice(predictionIndex + 1, tipsIndex).join('').trim(),
        tips: sections.slice(tipsIndex + 1).join('').trim(),
    };
};

const structureTips = (tipsText: string) => {
    const tipsArray = tipsText.split(/\d+\.\s/).filter(Boolean); // Split based on numbering
    return tipsArray.map((tip, index) => ({
        number: index + 1,
        description: tip.trim(),
    }));
};


export { structurePredictionAndTips, structureTips };