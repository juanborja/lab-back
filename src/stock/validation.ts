import { check } from 'express-validator/check';

const REQUIRED = [
  check('date').not().isEmpty().withMessage('Date is required'),
  check('open').not().isEmpty().withMessage('Open is required'),
  check('min').not().isEmpty().withMessage('Min is required'),
  check('max').not().isEmpty().withMessage('Max is required'),
  check('vol').not().isEmpty().withMessage('Vol is required'),
  check('last').not().isEmpty().withMessage('Last is required'),
];

const TYPES = [
  check('open').optional().toFloat().isFloat().withMessage('Open must be float'),
  check('min').optional().toFloat().isFloat().withMessage('Min must be float'),
  check('max').optional().toFloat().isFloat().withMessage('Max must be float'),
  check('vol').optional().toFloat().isFloat().withMessage('Vol must be float'),
  check('last').optional().toFloat().isFloat().withMessage('Last must be float'),
];

export { REQUIRED, TYPES };
