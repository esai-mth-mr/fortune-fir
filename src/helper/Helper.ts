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
    '/src/assets/gift.png',
    '/src/assets/gift1.png',
    '/src/assets/gift2.png'
];
