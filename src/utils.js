const isEmpty = value => value === undefined || value === null || value === '';

export function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function noop() {

}

export function email(value) {
    let error = null;
    if ((!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) || isEmpty(value)) {
        error = 'Please enter a valid Email';
    }
    return error;
}

export function required(value) {
    const len = value ? value.trim().length : 0;
    if (isEmpty(value) || len < 1) {
        return 'This is required';
    }
}