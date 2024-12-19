export const getRandomNum = (from: number, to: number, num: number): number[] | null => {    
    if (to < from || num <= 0 || !Number.isInteger(num)) return null;
    return Array.from({ length: num }, () => Math.random() * (to - from) + from);
};

export const backgroundImages = [
    '/src/assets/santa2.png',
    '/src/assets/santamodel.png',
    '/src/assets/backgroundImage _1.png',
    //gifts
];
