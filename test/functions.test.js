import { test, expect,suite } from 'vitest';
import { uperCase, triCroissant, isPriceInRange } from '../src/functions';

suite('Test de la fonction uperCase', () => {
    test('Test de la fonction uperCase', () => {
        const result = uperCase('hello');
        expect(result).toBe('HELLO');
    });
    test('Test de la fonction uperCase', () => {
        const result = uperCase('');
        expect(result).toBe('');
    });
    test('Test de la fonction uperCase', () => {
        const result = uperCase('Hello!!!');
        expect(result).toBe('HELLO!!!');
    });
});

suite('Test de la fonction triCroissant', () => {
    test('Test de la fonction triCroissant', () => {
        const result = triCroissant([3, 2, 1]);
        expect(result).toEqual([1, 2, 3]);
    });
    test('Test de la fonction triCroissant', () => {
        const result = triCroissant([1, 2, 3]);
        expect(result).toEqual([1, 2, 3]);
    });
    test('Test de la fonction triCroissant', () => {
        const result = triCroissant([3, 1, 2]);
        expect(result).toEqual([1, 2, 3]);
    });
    test('Test de la fonction triCroissant', () => {
        expect(() => triCroissant('hello')).toThrowError('L\'entrée doit être un tableau.');
    });
    test('Test de la fonction triCroissant', () => {
        expect(() => triCroissant([1, 2, 'hello'])).toThrowError('Le tableau ne contient pas que des nombres.');
    });
});

suite('Test de la fonction isPriceInRange', () => {
    test('Test de la fonction isPriceInRange', () => {
        const result = isPriceInRange(10, 5, 15);
        expect(result).toBe(true);
    });
    test('Test de la fonction isPriceInRange', () => {
        const result = isPriceInRange(10, 10, 15);
        expect(result).toBe(true);
    });
    test('Test de la fonction isPriceInRange', () => {
        const result = isPriceInRange(10, 5, 10);
        expect(result).toBe(true);
    });
    test('Test de la fonction isPriceInRange', () => {
        const result = isPriceInRange(10, 15, 20);
        expect(result).toBe(false);
    });
    test('Test de la fonction isPriceInRange', () => {
        const result = isPriceInRange(10, 5, 9);
        expect(result).toBe(false);
    });
});