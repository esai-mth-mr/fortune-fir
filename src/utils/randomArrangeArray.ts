


export const shuffleData = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Get a random index  
        // Swap the elements at indices i and j  
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}  