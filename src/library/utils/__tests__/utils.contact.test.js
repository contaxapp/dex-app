import { sha512Hash } from '../contact';

test('should return sha512 hash', () => {
    sha512Hash('1', (hash) => {
        expect(hash).toBe('Tf9Oo0DwqCPxXT9PAati6uDl2lecy4Ufjbnf6ExYsrN7iZA6dA4e4XLaeTpuedVg5ff5vQWKEqKAQz7W+kZRCg==');
    });
    sha512Hash('2', (hash) => {
        expect(hash).toBe('QLJEESZB3XjdT5O2yRkN1G4AmRlNWkQle3761u+f9Gg9oe2gJERIyzQ6poj10+/XMU2v5YCsC8vxFa7Kno3BFA==');
    });
});