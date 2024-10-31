const accounts = require("../db/accounts");
const wallets = require("../db/wallets");

const fs = require("fs");

const db = {
  accounts,
  wallets,
};

try {
  fs.writeFileSync("db.json", JSON.stringify(db, null, 2), "utf8");
  console.log("Database reset successfully.");
} catch (err) {
  console.err("Error resetting database.");
}
