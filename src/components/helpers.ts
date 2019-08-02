import jQuery from "jquery";

export const getTheMostFrequentItem = (array: number[]): number => {
    if (array.length === 0) {
        return 0;
    }

    let modeMap = {} as any;
    let maxEl = array[0], maxCount = 1;

    for (let i = 0; i < array.length; i++) {
        const el = array[i];
        const label = el.toString();

        if (modeMap[label] === null) {
            modeMap[label] = 1;
        } else {
            modeMap[label]++;
        }

        if (modeMap[label] > maxCount) {
            maxEl = el;
            maxCount = modeMap[label];
        }
    }

    return maxEl;
}

export const scrollPageTo = (config: { top: number, speed?: number, delay?: number }) => {
    const { top, speed, delay } = config;
    jQuery("html, body")
        .delay(delay || 0)
        .animate({
            scrollTop: top
        }, speed || 0);
}
