let roleCheckMiddleware = role => {
  return async (req, res, next) => {
    try {
      let header = req.headers.authorization;
      if (!header || !header.startsWith ('Bearer')) {
        return res.status (401).json ({message: 'Token not found'});
      }
      let token = header.split (' ')[1];
      jwt.verify (token, process.env.JWT_SECURITY_CODE, function (
        err,
        decoded
      ) {
        if (decoded) {
          if (decoded.role == role) {
            req.userId = decoded.userId;
            next ();
          } else {
            return res.status (401).json ({message: 'Un athorized'});
          }
        } else if (err) {
          return res.status (401).json ({message: err});
        }
      });
    } catch (error) {
      return res.status (500).json ({message: error.message});
    }
  };
};

module.exports = roleCheckMiddleware;
