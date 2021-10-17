import { sum } from '../app/app.service';

describe('sum', () => {
  test('adds numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 0)).toBe(1);
    expect(sum(1, -1)).toBe(0);
    expect(sum(-100, 50)).toBe(-50);
  });

  test('returns 0 if no args passed', () => {
    expect(sum()).toBe(0);
  });

  test('returns first arg if second arg not passed', () => {
    expect(sum(1)).toBe(1);
  });

  test('returns second arg if first arg not passed', () => {
    expect(sum(undefined, 2)).toBe(2);
  });
});
