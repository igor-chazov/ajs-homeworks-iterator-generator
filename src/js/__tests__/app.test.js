import canIterate from '../app';

test('должна определяет, соответствует ли объект протоколу итерирования', () => {
  const testIterable = true;
  expect(canIterate('Netology')).toBe(testIterable);
});

test('должна определяет, соответствует ли объект протоколу итерирования', () => {
  const testIterable = false;
  expect(canIterate(null)).toBe(testIterable);
});

test('должна определяет, соответствует ли объект протоколу итерирования', () => {
  const testIterable = false;
  expect(canIterate(10)).toBe(testIterable);
});
