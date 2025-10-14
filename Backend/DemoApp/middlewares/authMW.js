var jwt = require ('jsonwebtoken');
require ('dotenv').config ();

let authMiddleware = async (req, res, next) => {
  try {
    let header = req.headers.authorization;
    if (!header || !header.startsWith ('Bearer')) {
      return res.status (401).json ({message: 'Token not found'});
    }
    let token = header.split (' ')[1];
    jwt.verify (token, process.env.JWT_SECURITY_CODE, function (err, decoded) {
      if (decoded) {
        req.userId = decoded.userId;
        next ();
      }
      else if (err) {
        return res.status (401).json ({message: err});
      }
    });
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

module.exports = authMiddleware
