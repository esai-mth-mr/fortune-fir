// export const getRandomNum = (from: number, to: number, num: number): number[] | null => {    
//     if (to < from || num <= 0 || !Number.isInteger(num)) return null;
//     return Array.from({ length: num }, () => Math.random() * (to - from) + from);
// };

export const getRandomNum = (from: number, to: number): number | null => {    
    if (to < from) return null;  
    return Math.random() * (to - from) + from;  
};  


export const backgroundImages = [
    '/src/assets/santa2.png',
    '/src/assets/santamodel.png',
    '/src/assets/backgroundImage _1.png',
    '/src/assets/star.png',
    '/src/assets/star1.png',
    '/src/assets/exe_good.png',
    '/src/assets/very_good.png',
    '/src/assets/good.png',
    '/src/assets/bad.png',
    '/src/assets/very_bad.png',
    '/src/assets/exe_bad.png',
    '/src/assets/openbox.png'
    //gifts
];
