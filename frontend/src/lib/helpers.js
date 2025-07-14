export const resolve = (path, obj) => {
    return path.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : null;
    }, obj || self);
};
export const detectLanguage = (text) => {
    // Regular expressions to match Arabic and English characters
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    const englishRegex = /[A-Za-z]/;

    let hasArabic = arabicRegex.test(text);
    let hasEnglish = englishRegex.test(text);

    if (hasArabic && !hasEnglish) {
        return 'rtl';
    } else if (!hasArabic && hasEnglish) {
        return 'ltr';
    } else if (hasArabic && hasEnglish) {
        return 'rtl';
    } else {
        return 'ltr';
    }
};
export const reportDateRangeOptions = [
    { label: 'Today', value: 'TODAY' },
    { label: 'Yesterday', value: 'YESTERDAY' },
    { label: 'Last 7 Days', value: 'LAST_7' },
    { label: 'Last 30 Days', value: 'LAST_30' },
    { label: 'This Week', value: 'THIS_WEEK' },
    { label: 'Last Week', value: 'LAST_WEEK' },
    { label: 'This Month', value: 'THIS_MONTH' },
    { label: 'Last Month', value: 'LAST_MONTH' },
    { label: 'This Quarter', value: 'THIS_QUARTER' },
    { label: 'Last Quarter', value: 'LAST_QUARTER' },
    { label: 'This Year', value: 'THIS_YEAR' },
    { label: 'Last Year', value: 'LAST_YEAR' },
    { label: 'All Time', value: 'ALL_TIME' },
    { label: 'Custom Date Range', value: 'CUSTOM' },
];

export const base64ToFile = (base64, filename) => {
    const base64String = base64;
    const mimeType = base64String.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
    const base64Data = base64String.split(',')[1];
    const blob = base64ToBlob(base64Data, 'image/png');
    return new File([blob], filename, { type: 'image/png' });
};

export const services = {
    user_management: 'user_management',
};

export const mbToBit = (mb) => {
    return mb * 1024 * 1024;
};

export const bitTomb = (bits) => {
    const kilobytes = bits / 1024;
    const megabytes = kilobytes / 1024;
    return `${megabytes.toFixed(2)} MB`;
};

export const urlFinder = (onlyUrl = false, service) => {
    let url = '';
    if (process.env.USE_CURRENT_HOST) {
        url =
            window.location.protocol +
            '//' +
            window.location.hostname +
            ':' +
            process.env.USE_CURRENT_HOST;
    } else {
        switch (service) {
            case services.user_management:
                url = process.env.USER_MANAGEMENT_API;
                break;
        }
    }
    if (onlyUrl) {
        return url.replaceAll('api', '');
    }
    return url;
};

export const objectToQueryParams = (obj) => {
    const params = new URLSearchParams();
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            params.append(key, obj[key]);
        }
    }
    return params.toString();
};
