import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

export default (app) => {
  const config = app.config;
  const Users = app.datasource.models.user;

  app.post('/token', (req, res) => {
    if (req.body.username && req.body.password) {
      const username = req.body.username;
      const password = req.body.password;

      Users.findOne({ where: { username } })
        .then((user) => {
          if (Users.isPassword(user.password, password)) {
            const payload = { id: user.employee };
            res.json({
              token: jwt.encode(payload, config.jwtSecret),
            });
          } else {
            res.sendStatus(HttpStatus.UNAUTHORIZED);
          }
        })
        .catch(() => res.sendStatus(HttpStatus.UNAUTHORIZED));
    } else {
      res.sendStatus(HttpStatus.UNAUTHORIZED);
    }
  });
};