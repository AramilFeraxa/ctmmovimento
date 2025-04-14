const parsePolishDate = (dateStr) => {
    const parts = dateStr.split(' ');
    const day = parseInt(parts[0], 10);

    const monthMap = {
        'stycznia': 0, 'lutego': 1, 'marca': 2, 'kwietnia': 3,
        'maja': 4, 'czerwca': 5, 'lipca': 6, 'sierpnia': 7,
        'września': 8, 'października': 9, 'listopada': 10, 'grudnia': 11
    };

    const month = monthMap[parts[1].toLowerCase()];
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
};

export default parsePolishDate;