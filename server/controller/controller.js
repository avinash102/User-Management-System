const UserDb = require('../model/userModel');

// create and save new User
exports.createUser = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: 'fail',
      message: 'Content can not be empty',
    });
  }

  //new user
  const user = new UserDb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in the database
  user
    .save(user)
    .then((data) => {
      // res.status(200).json({
      //   status: 'success',
      //   data: {
      //     user: data,
      //   },
      // });
      res.redirect('/add-user');
    })
    .catch((err) => {
      res.status(500).json({
        status: 'fail',
        message: err.message,
      });
    });
};

// retrieve and return all User / retrieve single user
exports.getAllUser = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    UserDb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).json({
            status: 'fail',
            message: `Not found user with id ${id}`,
          });
        } else {
          res.status(200).json({
            status: 'success',
            data: {
              users: data,
            },
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          status: 'fail',
          message: err.message,
        });
      });
  } else {
    UserDb.find()
      .then((user) => {
        res.status(200).json({
          status: 'success',
          data: {
            users: user,
          },
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: 'fail',
          message: err.message,
        });
      });
  }
};

// Update a new identified user by userid
exports.updateUser = (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      status: 'fail',
      message: 'Data to update can not be empty',
    });
  }

  const id = req.params.id;
  UserDb.findByIdAndUpdate(id, req.body, { useFindandModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          status: 'fail',
          message: `Can not update user by ${id}, May be User not found`,
        });
      } else {
        res.status(200).json({
          status: 'success',
          data: {
            user: data,
          },
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 'fail',
        message: err.message,
      });
    });
};

// Delete a user with specified userid
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  UserDb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          status: 'fail',
          message: `Can not delete user by ${id}, May be User not found`,
        });
      } else {
        res.status(204).json({
          status: 'success',
          message: 'User Succesfully Deleted',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: 'fail',
        message: err.message,
      });
    });
};
