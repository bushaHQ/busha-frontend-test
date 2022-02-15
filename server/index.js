const path = require("path");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const PORT = process.env.SERVER_PORT || 3090;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use("/accounts", (req, res, next) => {
  if (req.method === "POST") {
    if (!req.body.currency) {
      return res.status(422).json({
        error: "Provide wallet currency",
      });
    }

    const wallets = router.db.getState().wallets;
    const walletIndex = wallets.findIndex(
      (wallet) => wallet.currency === req.body.currency
    );
    if (walletIndex === -1) {
      return res.status(422).json({
        error: "Provide a valid wallet currency",
      });
    }
    const wallet = wallets[walletIndex];

    const accounts = router.db.getState().accounts;
    const account = accounts.find(
      (account) => account.currency === req.body.currency
    );
    if (account) {
      return res.status(422).json({
        error: "Account already exists",
      });
    }

    req.body.hold = "0";
    req.body.pending_balance = "0";
    req.body.balance = "0";
    req.body.currency = wallet.currency;
    req.body.name = wallet.name;
    req.body.type = wallet.type;
    req.body.imgURL = wallet.imgURL;

    router.db.getState().wallets.splice(walletIndex, 1);
    router.db.write();
  }
  // Continue to JSON Server router
  next();
});

server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
