# Add Wallet

## Requirements

- Clicking "Add new wallet" button opens the modal.
  - Clicking the "X" icon closes the modal.

  ["Add new Wallet" form](https://www.figma.com/file/YP9FywhIqW8vZfHzXomQWs/Busha-Home?node-id=3%3A95)

- Modal "Add new wallet" form:

  - Makes request to `GET"/wallets"` and shows spinner while request is in process.
  - Shows "Network errror" and "Try again" button when request to `GET "/wallets"` fails.
  - Clicking "Try again" button makes request to `GET "/wallets"`.

  ["Add new Wallet Modal" fething wallets](https://www.figma.com/file/YP9FywhIqW8vZfHzXomQWs/Busha-Home?node-id=14%3A559)

- Modal "Add new wallet" form (after `GET /wallets` is successful):
  - "Add new wallet" form renders, a select element with the returned wallets is displayed.
  - "Create wallet" button is displayed.

  ["Add new Wallet" form](https://www.figma.com/file/YP9FywhIqW8vZfHzXomQWs/Busha-Home?node-id=11%3A387)

- Calls `POST "/accounts"` with wallet currency handles success (after selecting wallet):

  ```json
  data: {"currency": "BTC"}
  ```
  - After clicking "Create wallet" button, the modal closes and the added wallet is rendered in the list.

- Calls `POST "/accounts"` with wallet currency and handles error (after selecting wallet):

  [POST "/accounts" error](https://www.figma.com/file/YP9FywhIqW8vZfHzXomQWs/Busha-Home?node-id=11%3A532)
