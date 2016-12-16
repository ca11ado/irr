const lispHero = require('../lispHero');

describe('my tests of lispHero function', () => {
  it('should return true', () => {
      const inputString = '()';
      expect(
          lispHero(inputString)
      ).toBe(true);
  });

  it('should return false', () => {
      const inputString = '(()';
      expect(
          lispHero(inputString)
      ).toBe(false);
  });

});

describe('original test of lispHero function', () => {
  it('1 should return true', () => {
      const inputString = '()';
      expect(
          lispHero(inputString)
      ).toBe(true);
  });

  it('2 should return true', () => {
      const inputString = '{}[]()';
      expect(
          lispHero(inputString)
      ).toBe(true);
  });

  it('3 should return true', () => {
      const inputString = '([{}])';
      expect(
          lispHero(inputString)
      ).toBe(true);
  });

  it('4 should return false', () => {
      const inputString = '[)';
      expect(
          lispHero(inputString)
      ).toBe(false);
  });

  it('5 should return false', () => {
      const inputString = '())({}}{()][][';
      expect(
          lispHero(inputString)
      ).toBe(false);
  });
});
