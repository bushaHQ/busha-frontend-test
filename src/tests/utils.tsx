import { render } from "@testing-library/react";

import App from "../App";

/*
 *  render
 */
export const renderRoot = () => render(<App />);

// /**
//  * setupApp
//  */
// export const setupApp = async () => {
//   // render root component
//   renderRoot();
//   // wait for loading spinner to disappear
//   await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));
// };

export {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  within,
  fireEvent,
} from "@testing-library/react";
