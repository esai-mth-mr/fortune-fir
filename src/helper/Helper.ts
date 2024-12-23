export const getRandomNum = (from: number, to: number): number | null => {
    if (to < from) return null;
    return Math.random() * (to - from) + from;
};
