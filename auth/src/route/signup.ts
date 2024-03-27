import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("bad email"),
    body("password").trim().isLength({ min: 4, max: 20 }),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    throw Error(" email or password is wrong")
    }
    
    const { email, password } = req.body;
  }
);
export { router as signupRouter };
