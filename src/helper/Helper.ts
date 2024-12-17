export const getRandomNum = (from: number, to: number, num: number): number[] | null => {    
    if (to < from || num <= 0 || !Number.isInteger(num)) return null;
    return Array.from({ length: num }, () => Math.random() * (to - from) + from);
};

export const backgroundImages = [
    '/src/assets/bg-1.png',
    '/src/assets/bg-2.png',
    '/src/assets/bg-3.png',
    '/src/assets/bg-4.png',
    '/src/assets/bg-5.png',
    '/src/assets/santa_cap.png',
    '/src/assets/luck.png',
    '/src/assets/main_tree.png',
    '/src/assets/landing.jpg',
    '/src/assets/modal.jpg',
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
    // '/src/assets/gift_11.png',
    // '/src/assets/gift_12.png',
    //characters
    '/src/assets/main_characters.png',
    //month
    '/src/assets/months/1.png',
];
