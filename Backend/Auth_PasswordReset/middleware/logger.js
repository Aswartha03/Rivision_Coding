
let loggerMiddleware = async (req, res, next) => {
  try {
    let  { method, originalUrl, ip } = req;
    let  time = new Date().toLocaleString();
    console.log(`[${time}] ${method} ${originalUrl} - ${ip}`);
    next();
  } catch (error) {
    console.error("Logger Middleware Error:", error.message);
    return
  }
};

module.exports = loggerMiddleware;
