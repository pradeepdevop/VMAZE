import mongoose from "mongoose";
import utils from "../utils";

mongoose
  .connect(process.env.DB_URL as string)
  .then(() => {
    utils.logger.log({
      level: "info",
      message: utils.SuccessMessage.DB_CONNECTED_SUCCESSFULLY,
    });
  })
  .catch((error) => {
    utils.logger.log({
      level: "error",
      message: utils.ErrorMessage.FAILED_TO_CONNECT_DB,
    });
  });
