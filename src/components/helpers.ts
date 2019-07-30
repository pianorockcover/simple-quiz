export const getTheMostFrequentItem = (array: number[]): number => {
    let mf = 1;
    let m = 0;
    let item = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j]) m++;
            if (mf < m) {
                mf = m;
                item = array[i];
            }
        }

        m = 0;
    }

    return item;
}