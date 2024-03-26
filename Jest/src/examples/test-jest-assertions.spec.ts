describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);

    expect(number).toBeCloseTo(10.001);

    expect(number).not.toBeNull();

    expect(number).toHaveProperty('toString');
  });
});
