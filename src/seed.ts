import * as StockService from './stock/stock.service';
import faker from 'faker';
export default async (amount: number) => {
  const currentDate = new Date();
  for (let i = 0; i < amount; i++) {
    await StockService.create({
      id: 0,
      date: currentDate,
      last: faker.random.number({
        min: 3000,
        max: 3400,
      }),
      open: faker.random.number({
        min: 3000,
        max: 3400,
      }),
      max: faker.random.number({
        min: 3000,
        max: 3400,
      }),
      min: faker.random.number({
        min: 3000,
        max: 3400,
      }),
      vol: faker.random.number({
        min: 3,
        max: 10,
      }),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
};
