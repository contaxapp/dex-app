import { sha512Hash } from '../contact';

test('should return sha512 hash', () => {
    sha512Hash('1').then((hash) => {
        expect(hash).toBe('4dff4ea340f0a823f15d3f4f01ab62eae0e5da579ccb851f8db9dfe84c58b2b37b89903a740e1ee172da793a6e79d560e5f7f9bd058a12a280433ed6fa46510a');
    });
    sha512Hash('2').then((hash) => {
        expect(hash).toBe('40b244112641dd78dd4f93b6c9190dd46e0099194d5a44257b7efad6ef9ff4683da1eda0244448cb343aa688f5d3efd7314dafe580ac0bcbf115aeca9e8dc114');
    });
});