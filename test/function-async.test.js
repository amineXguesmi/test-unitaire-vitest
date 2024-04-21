import { fetchRandomUser } from '../src/functions-async.js';

import { test, describe, expect } from 'vitest';

describe('fetchRandomUser', () => {
    test('retourne un objet JSON avec les informations de l\'utilisateur', async () => {
        try{
            const userData = await fetchRandomUser();

            expect(typeof userData).toBe('object');
            expect(userData).toHaveProperty('gender');
            expect(userData).toHaveProperty('name');
            expect(userData).toHaveProperty('location');
            expect(userData).toHaveProperty('email');
            expect(userData).toHaveProperty('dob');
            expect(userData).toHaveProperty('phone');
            expect(userData).toHaveProperty('cell');
            expect(userData).toHaveProperty('picture');
        }
        catch(error){
            expect(error.message).toBe('Failed to fetch random user');
        }
    });
});