const { quaddouble1, quaddouble2 } = require('../quaddouble');

describe('test quaddouble1 function', () => {
  it('should return true', () => {
      const num1 = 45568411115;
      const num2 = 11223344;
      expect(
          quaddouble1(num1, num2)
      ).toBe(true);
  });

  it('should return true', () => {
      const num1 = 11112344445;
      const num2 = 442253;
      expect(
          quaddouble1(num1, num2)
      ).toBe(true);
  });

  it('should return false', () => {
      const num1 = 12222345;
      const num2 = 123452;
      expect(
          quaddouble1(num1, num2)
      ).toBe(false);
  });

  it('should return false', () => {
      const num1 = 12345;
      const num2 = 12345;
      expect(
          quaddouble1(num1, num2)
      ).toBe(false);
  });
});

describe('test quaddouble2 function', () => {
  it('should return true', () => {
      const num1 = 45568411115;
      const num2 = 11223344;
      expect(
          quaddouble2(num1, num2)
      ).toBe(true);
  });

  it('should return true', () => {
      const num1 = 11112344445;
      const num2 = 442253;
      expect(
          quaddouble2(num1, num2)
      ).toBe(true);
  });

  it('should return false', () => {
      const num1 = 12222345;
      const num2 = 123452;
      expect(
          quaddouble2(num1, num2)
      ).toBe(false);
  });

  it('should return false', () => {
      const num1 = 12345;
      const num2 = 12345;
      expect(
          quaddouble2(num1, num2)
      ).toBe(false);
  });
});
