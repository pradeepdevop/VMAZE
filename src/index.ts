import { server } from "./app";
import utils from "./utils";

server.listen(process.env.PORT, () => {
  utils.logger.log({
    level: "info",
    message: `server running on ${process.env.PORT}`,
  });
});
