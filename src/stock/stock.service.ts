/**
 * Data Model Interfaces
 */
import { IStock } from './stock.interface';
import Stock from './stock.model';

/**
 * Service Methods
 */
export const findAll = async (page: number, size: number) => {
  return Stock.findAndCountAll({ limit: size, offset: page * size });
};

export const find = async (id: number) => {
  const record = Stock.findByPk(id);
  if (!record) throw new Error('No se encontro registro');
  return record;
};

export const create = async (newStock: IStock) => {
  const s = await Stock.create(newStock);
  return Stock.findByPk(s.id);
};

export const remove = async (id: number) => {
  await Stock.destroy({
    where: {
      id,
    },
  });
  return Stock.findByPk(id, { paranoid: false });
};
export const update = async (id: number, client: IStock) => {
  await Stock.update(client, {
    where: {
      id,
    },
  });
  return Stock.findByPk(id);
};
