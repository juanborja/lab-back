import { check } from 'express-validator/check';

const RULES = [
  check('date').not().isEmpty().withMessage('Date is required'),

  check('open')
    .not()
    .isEmpty()
    .withMessage('Open is required')
    .bail()
    .toFloat()
    .isFloat()
    .withMessage('Open must be float'),
  check('min')
    .not()
    .isEmpty()
    .withMessage('Min is required')
    .bail()
    .toFloat()
    .isFloat()
    .withMessage('Min must be float'),
  check('max')
    .not()
    .isEmpty()
    .withMessage('Max is required')
    .bail()
    .toFloat()
    .isFloat()
    .withMessage('Max must be float'),
  check('vol')
    .not()
    .isEmpty()
    .withMessage('Vol is required')
    .bail()
    .toFloat()
    .isFloat()
    .withMessage('Vol must be float'),
  check('last')
    .not()
    .isEmpty()
    .withMessage('Last is required')
    .bail()
    .toFloat()
    .isFloat()
    .withMessage('Last must be float'),
];

export default RULES;
