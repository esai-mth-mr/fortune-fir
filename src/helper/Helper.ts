export const getRandomNum = (from: number, to: number, num: number): number[] | null => {    
    if (to < from || num <= 0 || !Number.isInteger(num)) return null;
    return Array.from({ length: num }, () => Math.random() * (to - from) + from);
};

export const backgroundImages = [
    '/src/assets/santa2.png',
    //gift
    '/src/assets/gift_1.png',
    '/src/assets/gift_2.png',
    '/src/assets/gift_3.png',
    '/src/assets/gift_4.png',
    '/src/assets/gift_5.png',
    '/src/assets/gift_6.png',
    '/src/assets/gift_7.png',
    '/src/assets/gift_8.png',
    '/src/assets/gift_9.png',
    '/src/assets/gift_10.png',
    '/src/assets/gift_11.png',
    '/src/assets/gift_12.png',
];
