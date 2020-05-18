import { sha1Hash } from '../contact';

test('should return sha1 hash', () => {
    sha1Hash('1', (hash) => {
        expect(hash).toBe('NWoZK3kTsExUV00Ywo1G5jlUKKs=');
    });
    sha1Hash('2', (hash) => {
        expect(hash).toBe('2kuSN7rMzfGcB2DKt67EqDWQELA=');
    });
});