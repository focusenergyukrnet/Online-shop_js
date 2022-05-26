export const sort = values => {
    if (values.every(value => typeof value === 'string')) {
        return values.sort();
    } else if (value => typeof value === 'number') {
        return values.sort((a, b) => a - b);
    } else {
        return values;
    }
};