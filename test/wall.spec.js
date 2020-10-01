import { Wall } from '../src/lib/views/wall';

describe('createPost', () => {
  it('Debería crear un post', () => {
    return Wall('Testing #1').then((data) => {
      expect(data).toBe('Testing #1');
    });
  });
});
