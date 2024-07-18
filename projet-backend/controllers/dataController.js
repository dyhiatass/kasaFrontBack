const sqlDb = require("../config/sqlDatabase");

exports.getData = async (req, res) => {
  try {
    const result = await sqlDb.query("SELECT * FROM your_table");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
