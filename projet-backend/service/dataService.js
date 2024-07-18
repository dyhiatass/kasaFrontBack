// Example of a service, e.g., for data operations
const sqlDb = require("../config/sqlDatabase");

exports.getDataFromDb = async () => {
  const result = await sqlDb.query("SELECT * FROM your_table");
  return result.rows;
};
