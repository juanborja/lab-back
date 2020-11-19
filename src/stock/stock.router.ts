/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from 'express';
import * as StockService from './stock.service';
import { check, validationResult } from 'express-validator/check';
import RULES from './validation';
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
    const page = req.query?.page ? Number(req.query?.page) : 0;
    const size = req.query?.size ? Number(req.query?.size) : 10;
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
    res.status(400).send(e.message);
  }
});
// POST items/
stockRouter.post('/', RULES, async (req: Request, res: Response) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).jsonp(errors.array());
  }
  try {
    const stock = await StockService.create(req.body);
    res.status(201).send({ stock });
  } catch (e) {
    res.status(400).send(e.message);
  }
});
stockRouter.put('/', async (req: Request, res: Response) => {
  try {
    const stock = await StockService.update(req.body.id, req.body.stock);
    res.status(200).send({ stock });
  } catch (e) {
    res.status(400).send(e.message);
  }
});
stockRouter.delete('/', async (req: Request, res: Response) => {
  try {
    const stock = await StockService.remove(req.body.id);
    res.status(200).send({ stock });
  } catch (e) {
    res.status(400).send(e.message);
  }
});
