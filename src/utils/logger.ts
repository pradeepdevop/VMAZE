import winston from "winston";

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: "info",
      filename: "logs/success.log",
    }),
    new winston.transports.File({ level: "error", filename: "logs/error.log" }),
  ],
  format: winston.format.combine(
    winston.format.label({ label: "Time" }),
    winston.format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
    winston.format.printf(
      (info) => `${info.level}:${info.label}:${info.timestamp}:${info.message}`
    )
  ),
});
