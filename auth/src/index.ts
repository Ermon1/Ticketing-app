import express from "express";
import bodyParser from "body-parser";
import { currentRouter } from "./route/current-user";
import { signInRouter } from "./route/signin";
import { signOutRouter } from "./route/signout";
import { signupRouter } from "./route/signup";
import { errorHandler } from "./middleware/error-handler";


const app = express();


app.use(bodyParser.json());
app.use(currentRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signupRouter);
app.use(errorHandler);






app.listen(3000, () => {
  console.log("Server is listening on port 3000!!!!!!!");
});
