import { NextFunction, Request, Response } from 'express';
import { validationResult, matchedData } from 'express-validator';

export const validator = (req: Request, res: Response, next: NextFunction) => {
    const validationErrors = validationResult(req);
  
    if (!validationErrors.isEmpty()) {
      const { msg, param } = validationErrors.array()[0];
      // return res.status(400).json({ errors: validationErrors.array() });
      return res.status(400).json({ msg, fields: [param] });
    }
  
    // clip unwanted fields
    req.body = matchedData(req, { includeOptionals: true, locations: ["body"] });
  
    next();
  };