/*import { handleClick } from '../src/main';

test('handleclick', () => {
  it('debería ser una function', () => {
    expect(typeof handleClick).toBe('function');
  });
});

test('handleClick', done => {
  function callback(data) {
    expect(data).toBe('fuction');
    done();
  }

  handleClick(callback);
});*/

import { Home } from '../src/lib/views/home';

test('Home',done => {  
  function callback () {
    expect(Home).toBe('function');
    done();
  }
});