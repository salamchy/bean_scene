import { body } from 'express-validator';

export const menuValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 3, max: 50 }).withMessage('Name must be 3-50 characters'),
    
  body('category')
    .trim()
    .notEmpty().withMessage('Category is required')
    .isIn(['coffee', 'tea', 'pastry', 'sandwich']).withMessage('Invalid category'),
    
  body('type')
    .trim()
    .notEmpty().withMessage('Type is required')
    .isIn(['hot', 'cold']).withMessage('Invalid type'),
    
  body('price')
    .notEmpty().withMessage('Price is required')
    .isFloat({ min: 1 }).withMessage('Price must be a positive number'),
    
  body('description')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Description must be ≤200 characters')
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};