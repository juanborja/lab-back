import db from '../db';
import { Model, DataTypes, Optional } from 'sequelize';
import { IStock } from './stock.interface';
interface StockCreationAttributes extends Optional<IStock, 'id'> {}

class Stock extends Model<IStock, StockCreationAttributes> {
  public id!: number;
  public date!: Date;
  public last!: number;
  public open!: number;
  public max!: number;
  public min!: number;
  public vol!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: new DataTypes.DATE(),
      allowNull: false,
    },
    last: {
      type: new DataTypes.FLOAT(),
      allowNull: false,
    },
    open: {
      type: new DataTypes.FLOAT(),
      allowNull: false,
    },
    max: {
      type: new DataTypes.FLOAT(),
      allowNull: false,
    },
    min: {
      type: new DataTypes.FLOAT(),
      allowNull: false,
    },
    vol: {
      type: new DataTypes.FLOAT(),
      allowNull: false,
    },
  },
  {
    paranoid: true,
    sequelize: db,
    tableName: 'stocks',
  },
);

(async () => {
  await db.sync();
})();
export default Stock;
