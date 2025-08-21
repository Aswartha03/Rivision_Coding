let jwt = require ('jsonwebtoken');

let authMiddleware = (role) => {
  return async (req, res, next) => {
    try {
      let token = req.headers.authorization.split (' ')[1];
      if (!token) {
        return res.status (401).json ({message: 'Token is needed...'});
      }
      // token is there need to verify that token
      var decoded = jwt.verify (token, 'shhhhh');
    //   console.log (decoded);

      if (role === decoded.role) {
        req.id = decoded.userId;
        next ();
      } else {
        return res.status (401).json ({message: 'Invalid token'});
      }
    } catch (error) {
      res.status (500).json ({message: error.message});
    }
  };
};

module.exports = authMiddleware;
