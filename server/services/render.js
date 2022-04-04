// Render template
const axios = require('axios');

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get('http://localhost:3000/api/v1/users')
    .then((response) => {
      res.render('index', { users: response.data.data.users });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render('add_user');
};

exports.update_user = (req, res) => {
  axios
    .get('http://localhost:3000/api/v1/users', { params: { id: req.query.id } })
    .then((userdata) => {
      res.render('update_user', { user: userdata.data.data.users });
    })
    .catch((err) => {
      res.send(err);
    });
};
