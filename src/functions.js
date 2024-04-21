
export function uperCase(str) {
    return str.toUpperCase();
}

export function triCroissant(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error('L\'entrée doit être un tableau.');
    }
    if (!numbers.every(num => typeof num === 'number')) {
        throw new Error('Le tableau ne contient pas que des nombres.');
    }
    return numbers.slice().sort((a, b) => a - b);
}
export function isPriceInRange(price, min, max) {
    return price >= min && price <= max;
}

