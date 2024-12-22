export const getRandomNum = (from: number, to: number): number | null => {
    if (to < from) return null;
    return Math.random() * (to - from) + from;
};


export const backgroundImages = [
    '/assets/santa2.png',
    '/assets/santamodel.png',
    '/assets/backgroundImage _1.png',
    '/assets/star.png',
    '/assets/star1.png',
    '/assets/exe_good.png',
    '/assets/very_good.png',
    '/assets/good.png',
    '/assets/bad.png',
    '/assets/very_bad.png',
    '/assets/exe_bad.png',
    '/assets/openbox.png'
    //gifts
];
