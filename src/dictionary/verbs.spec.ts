import { irregularVerbs } from './verbs';

describe('irregularVerbs', () => {
  it('should not contain empty strings', () => {
    const hasEmpty = irregularVerbs.some((item) =>
      item.some((part) => part.trim() === ''),
    );
    expect(hasEmpty).toBe(false);
  });

  it('should have 4 fields on each verb', () => {
    expect(irregularVerbs.every((item) => item.length === 4)).toBe(true);
  });
});
