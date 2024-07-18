require('dotenv').config();
const app = require('./app');
const connectMongoDB = require('./config/database');
const { connectDB: connectMySQLDB } = require('./config/sqlDatabase');
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectMongoDB();

// Connect to MySQL
connectMySQLDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});