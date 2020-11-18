/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';
import * as StockService from './stock.service';
/**
 * Router Definition
 */
export const stockRouter = express.Router();
/**
 * Controller Definitions
 */

// GET items/
stockRouter.get('/', async (req: Request, res: Response) => {
  try {
    //Default page 0, size 10
    const page = Number(req.query?.page) ? Number(req.query?.page) : 0;
    const size = Number(req.query?.size) ? Number(req.query?.size) : 10;
    const stocks = await StockService.findAll(page, size);
    res.status(200).send(stocks);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// GET items/:id
stockRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const stock = await StockService.find(id);
    res.status(200).send(stock);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// POST items/
stockRouter.post('/', async (req: Request, res: Response) => {
  try {
    const stock = await StockService.create(req.body.stock);
    res.status(201).send({ stock });
  } catch (e) {
    res.status(404).send(e.message);
  }
});
stockRouter.put('/', async (req: Request, res: Response) => {
  try {
    const stock = await StockService.update(req.body.id, req.body.stock);
    res.status(200).send({ stock });
  } catch (e) {
    res.status(404).send(e.message);
  }
});
stockRouter.delete('/', async (req: Request, res: Response) => {
  try {
    const stock = await StockService.remove(req.body.id);
    res.status(200).send({ stock });
  } catch (e) {
    res.status(404).send(e.message);
  }
});
