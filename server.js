const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    const con = await mongoose.connect(DB);
    console.log(`DB connection successful!: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

connectDB();
