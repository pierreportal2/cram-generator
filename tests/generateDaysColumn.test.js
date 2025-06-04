import { generateDaysColumn } from '../src/generateDaysColumn.js';

test('generateDaysColumn for February 2023 creates 28 day headers', () => {
  const { days, names } = generateDaysColumn(2023, 2);
  expect(days.childNodes).toHaveLength(28);
  expect(names.childNodes).toHaveLength(28);
});
